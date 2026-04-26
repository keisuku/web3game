param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]] $Arguments
)

$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "web3game.py"
python $scriptPath @Arguments
