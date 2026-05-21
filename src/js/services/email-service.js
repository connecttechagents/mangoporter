/**
 * EmailJS Integration Service
 * Handles form submissions for Community Drop requests and general inquiries.
 */

export async function sendEmail(formElement, templateId) {
  const SERVICE_ID = 'service_v40gzbh';
  const PUBLIC_KEY = 'BU4-9V0ivezOf_18D';
  
  console.log(`[EmailJS] Sending form ${formElement.id} using template ${templateId}...`);
  
  const formData = new FormData(formElement);
  formData.append('service_id', SERVICE_ID);
  formData.append('template_id', templateId);
  formData.append('user_id', PUBLIC_KEY);

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS Error: ${response.status} ${errorText}`);
  }

  return response.text();
}
