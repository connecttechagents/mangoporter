/**
 * Society Data Service
 * Manages the list of active/upcoming societies.
 * Designed to fetch data from a Google Sheet (published as JSON/CSV).
 */

// Mock data that represents what would come from a Google Sheet
const MOCK_SOCIETIES = [
  { name: 'Prestige Shantiniketan', area: 'Whitefield', whatsapp: 'https://chat.whatsapp.com/sample1', status: 'active' },
  { name: 'Sobha Dream Acres', area: 'Panathur', whatsapp: 'https://chat.whatsapp.com/sample2', status: 'active' },
  { name: 'Salarpuria Greenage', area: 'Electronic City', whatsapp: 'https://chat.whatsapp.com/sample3', status: 'active' },
  { name: 'Brigade Metropolis', area: 'Mahadevapura', whatsapp: 'https://chat.whatsapp.com/sample4', status: 'active' },
  { name: 'Purva Riviera', area: 'Marathahalli', whatsapp: 'https://chat.whatsapp.com/sample5', status: 'active' },
  { name: 'Godrej United', area: 'Whitefield', whatsapp: 'https://chat.whatsapp.com/sample6', status: 'active' }
];

export async function fetchSocieties() {
  // --- HANDOVER NOTE ---
  // To connect to a real Google Sheet:
  // 1. Publish your Google Sheet to the web as CSV.
  // 2. Use fetch('your-google-sheet-csv-url') here and parse it.
  
  console.log('[SocietyData] Fetching society data...');
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_SOCIETIES);
    }, 500);
  });
}

export function searchSocieties(query, societies) {
  if (!query || query.length < 2) return [];
  
  const lowerQuery = query.toLowerCase();
  return societies.filter(s => 
    s.name.toLowerCase().includes(lowerQuery) || 
    s.area.toLowerCase().includes(lowerQuery)
  );
}
