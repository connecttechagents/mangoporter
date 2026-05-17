/**
 * Site Config Service
 * Fetches dynamic configuration (like Current Batch) from a Google Sheet (CSV format).
 */

export async function fetchSiteConfig() {
  // --- HANDOVER NOTE ---
  // To connect to a real Google Sheet for config:
  // 1. Create a "Site Config" tab with columns: Key, Value.
  // 2. Publish that specific tab to the web as CSV.
  // 3. Replace the mock return below with a fetch to your CSV URL.
  
  console.log('[SiteConfig] Fetching config...');
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'Current Batch': 'Banganapalle | Orders close: Thu'
      });
    }, 500);
  });
}
