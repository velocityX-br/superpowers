// Entry point — full wiring done once all modules are implemented
async function main(): Promise<void> {
  console.log('MCP Proxy starting... (implementation in progress)');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
