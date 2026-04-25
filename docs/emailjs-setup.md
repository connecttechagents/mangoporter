# Form Submissions: EmailJS Setup Guide

We use EmailJS to handle contact forms without needing a back-end server.

## 1. Create an EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com/) and create a free account.
2. In the **Email Services** tab, click "Add New Service".
3. Connect your Gmail account (e.g., `mangoporter.in@gmail.com`).
4. Note your **Service ID** (e.g., `service_mangoporter`).

## 2. Create Email Templates
Create two templates in the **Email Templates** tab:

### A. Community Drop Request
- **Template ID**: `template_drop_request`
- **Fields to use**: `{{name}}`, `{{whatsapp}}`, `{{society}}`, `{{area}}`, `{{households}}`, `{{message}}`

### B. General Inquiry
- **Template ID**: `template_general`
- **Fields to use**: `{{name}}`, `{{whatsapp}}`, `{{subject}}`, `{{message}}`

## 3. Update Website Credentials
1. Go to **Account > API Keys** and copy your **Public Key**.
2. Open `src/js/services/email-service.js` and update the following:

```javascript
const SERVICE_ID = 'your_actual_service_id';
const PUBLIC_KEY = 'your_actual_public_key';
```

## 4. Test
Go to the **Community Drops** or **Contact** page on your live site, fill out a form, and click Submit. You should receive an email within seconds.
