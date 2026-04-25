# Society Finder: Google Sheets Integration Guide

Follow these steps to connect your website's search tool to a live Google Sheet.

## 1. Prepare your Google Sheet
1. Create a new Google Sheet.
2. In the first row, add these headers:
   - `name`
   - `area`
   - `whatsapp`
   - `status`
3. Fill in your data (e.g., `Prestige Shantiniketan`, `Whitefield`, `https://chat.whatsapp.com/...`, `active`).

## 2. Publish as CSV
1. Go to **File > Share > Publish to web**.
2. Under "Link", select the specific sheet (e.g., "Sheet1").
3. Change the format from "Web page" to **Comma-separated values (.csv)**.
4. Click **Publish** and copy the URL.

## 3. Update the Website Service
Open `src/js/services/society-data.js` and update the `fetchSocieties` function:

```javascript
export async function fetchSocieties() {
  const CSV_URL = 'PASTE_YOUR_PUBLISHED_CSV_LINK_HERE';
  
  try {
    const response = await fetch(CSV_URL);
    const csvData = await response.text();
    
    // Simple CSV parser
    const rows = csvData.split('\n').slice(1); // Remove header
    return rows.map(row => {
      const [name, area, whatsapp, status] = row.split(',').map(s => s.trim());
      return { name, area, whatsapp, status };
    });
  } catch (err) {
    console.error('Failed to fetch society data:', err);
    return []; // Fallback to empty
  }
}
```

## 4. Why CSV?
Using the CSV publication method is free, fast, and does not require a complex Google Cloud API Key or OAuth setup. It's the most efficient way for static sites to handle dynamic content.
