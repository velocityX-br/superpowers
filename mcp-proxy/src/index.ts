import path from 'path';
import { loadConfig } from './config/loader';

async function main() {
  const configPath = process.env.MCP_PROXY_CONFIG || path.resolve(process.cwd(), 'config.yaml');

  console.log(`Loading config from: ${configPath}`);
  const config = loadConfig(configPath);
  console.log(`Loaded ${config.servers.length} server(s)`);
  console.log('MCP Proxy starting... (full implementation in progress)');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
