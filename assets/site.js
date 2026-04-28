(() => {
  const data = window.WEB3GAME_DATA || { episodes: [] };
  const state = { episodeIndex: 0, pageIndex: 0, tab: "pages" };
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function episode() {
    return data.episodes[state.episodeIndex] || { pages: [] };
  }

  function page() {
    return episode().pages[state.pageIndex] || null;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    window.clearTimeout(toast.timer);
    toast.timer = window.setTimeout(() => el.classList.remove("show"), 1800);
  }

  async function copy(text, message) {
    try {
      await navigator.clipboard.writeText(text || "");
      toast(message || "コピーしました");
    } catch {
      toast("コピーに失敗しました");
    }
  }

  function renderHeader() {
    const ep = episode();
    $("#episode-subtitle").textContent = `${ep.title || ep.id} / ${ep.pageCount || 0}ページ / ${ep.promptCount || 0}プロンプト`;
    $("#generated-at").textContent = `generated ${new Date(data.generatedAt).toLocaleString("ja-JP")}`;
    const pageCount = data.episodes.reduce((sum, item) => sum + (item.pageCount || 0), 0);
    $("#counts").textContent = `${data.episodes.length} episodes, ${pageCount} pages`;
  }

  function renderEpisodes() {
    const list = $("#episode-list");
    list.innerHTML = "";
    data.episodes.forEach((ep, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `episode-button${index === state.episodeIndex ? " active" : ""}`;
      button.innerHTML = `<strong>${escapeHtml(ep.label || ep.id)}</strong><span>${ep.pageCount || 0} pages / ${ep.promptCount || 0} prompts</span>`;
      button.addEventListener("click", () => {
        state.episodeIndex = index;
        state.pageIndex = 0;
        render();
      });
      list.appendChild(button);
    });
  }

  function renderPages() {
    const grid = $("#page-grid");
    grid.innerHTML = "";
    episode().pages.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `page-card${index === state.pageIndex ? " active" : ""}`;
      button.innerHTML = `
        <div class="page-id"><span>${escapeHtml(item.id)}</span><span>${item.star ? "★" : ""}</span></div>
        <div class="page-title">${escapeHtml(item.title || item.purpose || item.id)}</div>
        <div class="meta-line">${escapeHtml(item.density || "density未記入")}</div>
        <div class="meta-line">${escapeHtml(item.pattern || "pattern未記入")}</div>
      `;
      button.addEventListener("click", () => {
        state.pageIndex = index;
        renderPages();
        renderPrompt();
        renderSources();
        loadFeedback();
      });
      grid.appendChild(button);
    });
    renderDetail();
  }

  function renderDetail() {
    const current = page();
    const detail = $("#page-detail");
    if (!current) {
      detail.innerHTML = `<p class="muted">ページがありません。</p>`;
      return;
    }
    const badges = [current.status, current.flow, current.techniques].filter(Boolean);
    detail.innerHTML = `
      <div class="detail-header">
        <h2>${escapeHtml(current.id)}: ${escapeHtml(current.title)}</h2>
        <div class="purpose">${escapeHtml(current.purpose || "")}</div>
        <div class="badge-row">${badges.map((b) => `<span class="badge">${escapeHtml(b)}</span>`).join("")}</div>
      </div>
      <div class="panel-list">${(current.panels || []).map(renderPanel).join("")}</div>
    `;
  }

  function renderPanel(panel) {
    const title = `コマ${panel.n || ""}${panel.size ? `（${panel.size}）` : ""}`;
    return `
      <section class="panel-card">
        <h3>${escapeHtml(title)}</h3>
        ${field("構図", panel.composition)}
        ${field("表情", panel.expression)}
        ${field("セリフ", panel.dialogue)}
        ${field("密度", panel.density)}
        ${field("技法", panel.techniques)}
      </section>
    `;
  }

  function field(label, value) {
    return value ? `<p><span class="label">${label}:</span> ${escapeHtml(value)}</p>` : "";
  }

  function renderPrompt() {
    const current = page();
    $("#prompt-title").textContent = current ? `${current.id}: ${current.title}` : "Prompt";
    $("#prompt-text").textContent = current?.promptText || "プロンプト未生成です。python scripts/web3game.py sync-dashboard を実行してください。";
  }

  function renderSources() {
    const current = page();
    const ep = episode();
    const items = [
      ["episode", ep.source],
      ["page", current?.source],
      ["prompt", current?.promptSource],
      ["build", current?.buildSource],
      ["latest checkpoint", data.latestCheckpoint],
    ].filter(([, value]) => value);
    $("#source-list").innerHTML = items
      .map(([label, value]) => `<div class="source-item"><strong>${escapeHtml(label)}</strong><br><code>${escapeHtml(value)}</code></div>`)
      .join("");
  }

  function feedbackKey() {
    const current = page();
    return current ? `feedback:${episode().id}:${current.id}` : "feedback";
  }

  function loadFeedback() {
    $("#feedback-input").value = localStorage.getItem(feedbackKey()) || "";
    $("#feedback-status").textContent = "";
  }

  function feedbackPayload() {
    const current = page();
    if (!current) return "";
    return `${episode().id} ${current.id} へのフィードバックです。
${current.source} と ${current.promptSource || "該当プロンプト"} を読み、必要なら bible / prompt-constants にも反映してください。
反映後は python scripts/web3game.py sync-dashboard と validate を実行してください。

---

${$("#feedback-input").value.trim()}`;
  }

  function renderTabs() {
    $$(".tab-button").forEach((button) => button.classList.toggle("active", button.dataset.tab === state.tab));
    $$(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === state.tab));
  }

  function bindEvents() {
    $$(".tab-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.tab = button.dataset.tab;
        renderTabs();
        if (state.tab === "prompt") renderPrompt();
        if (state.tab === "sources") renderSources();
      });
    });
    $("#copy-current-prompt").addEventListener("click", () => copy(page()?.promptText, "現在のプロンプトをコピーしました"));
    $("#copy-prompt-inline").addEventListener("click", () => copy(page()?.promptText, "プロンプトをコピーしました"));
    $("#copy-feedback").addEventListener("click", () => copy(feedbackPayload(), "フィードバック文をコピーしました"));
    $("#feedback-input").addEventListener("input", () => {
      localStorage.setItem(feedbackKey(), $("#feedback-input").value);
      $("#feedback-status").textContent = "一時保存しました";
    });
  }

  function render() {
    renderHeader();
    renderEpisodes();
    renderPages();
    renderPrompt();
    renderSources();
    loadFeedback();
    renderTabs();
  }

  bindEvents();
  render();
})();
