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
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrI7DDl8DEt-ZY9Lv4zy26AknitoFaK-KBD4n44flz6lkWODDPh6GU6ipdlyLoSg/pub?gid=799365168&single=true&output=csv';
  
  try {
    const response = await fetch(CSV_URL);
    const csvData = await response.text();
    
    // Simple CSV parser
    const rows = csvData.split('\n').slice(1); // Remove header
    return rows.filter(row => row.trim() !== '').map(row => {
      const [name, area, whatsapp, status] = row.split(',').map(s => s ? s.trim() : '');
      return { name, area, whatsapp, status };
    });
  } catch (err) {
    console.error('Failed to fetch society data:', err);
    return []; // Fallback to empty
  }
}

export function searchSocieties(query, societies) {
  if (!query || query.length < 2) return [];
  
  const lowerQuery = query.toLowerCase();
  return societies.filter(s => 
    s.name.toLowerCase().includes(lowerQuery) || 
    s.area.toLowerCase().includes(lowerQuery)
  );
}
