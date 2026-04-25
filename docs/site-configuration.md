# Site Configuration Guide

This guide explains how to perform common small updates to the NetraaNikhilam Farms website logic and text.

## 1. Updating the WhatsApp Floating Button
The floating WhatsApp button is configured to message a specific number with a default message.

**File to Edit**: `src/js/components/whatsapp-fab.js`

Look for these lines at the top of the file:
```javascript
const WHATSAPP_NUMBER = '919019522193'; // Update this to your business number
const DEFAULT_MESSAGE = 'Hi! I am interested in MangoPorter mangoes...';
```
*Include the country code (e.g., `91` for India) without the `+` sign.*

## 2. Updating Mango Varieties (Status, Price, Text)
The varieties are listed directly in the HTML. If a variety moves from "Upcoming" to "Main Season," you can update it here.

**File to Edit**: `mangoes.html`

Search for the variety name (e.g., "Alphonso") and locate the status badge:
```html
<!-- Example: Changing Upcoming to Active -->
<span class="badge badge-upcoming">Select Harvest</span> 
<!-- Change to: -->
<span class="badge badge-active">Main Season</span>
```

## 3. SEO and Metadata
If you want to change how the site appears on Google or when shared on WhatsApp/social media, update those tags in the `<head>` section.

**Files to Edit**: All `.html` files (`index.html`, `our-story.html`, etc.)

Look for:
```html
<meta name="description" content="Update your description here..." />
<title>Update Page Title — MangoPorter</title>
```

## 4. Contact Information
For the address and footer phone numbers, check the bottom of each HTML page or the footer component (if refactored into a separate file).

**Files to Edit**: `index.html`, `contact.html`
