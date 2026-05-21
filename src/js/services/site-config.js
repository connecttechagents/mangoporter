/**
 * Site Config Service
 * Fetches dynamic configuration (like Current Batch) from a Google Sheet (CSV format).
 */

export async function fetchSiteConfig() {
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrI7DDl8DEt-ZY9Lv4zy26AknitoFaK-KBD4n44flz6lkWODDPh6GU6ipdlyLoSg/pub?gid=1787239575&single=true&output=csv';
  
  try {
    const response = await fetch(CSV_URL);
    const csvData = await response.text();
    
    const config = {};
    const rows = csvData.split('\n').slice(1);
    rows.forEach(row => {
      const parts = row.split(',');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(',').trim();
        if (key) {
           // Remove quotes if present
           config[key] = value.replace(/^"|"$/g, '').trim();
        }
      }
    });
    return config;
  } catch (err) {
    console.error('Failed to fetch site config:', err);
    return {};
  }
}
