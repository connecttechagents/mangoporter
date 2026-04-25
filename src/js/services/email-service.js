/**
 * EmailJS Integration Service
 * Handles form submissions for Community Drop requests and general inquiries.
 */

export async function sendEmail(formElement, templateId) {
  // --- IMPORTANT: User needs to replace these with their actual EmailJS credentials ---
  const SERVICE_ID = 'service_mangoporter'; // Placeholder
  const USER_ID = 'user_XXXXXXXXXXXXXXXXX'; // Placeholder Public Key
  
  // Note: For a live site, we'd typically use the EmailJS SDK script link in index.html
  // and call emailjs.sendForm(). This is a mock/placeholder implementation 
  // for the development phase.
  
  console.log(`[EmailJS] Sending form ${formElement.id} using template ${templateId}...`);
  
  // Simulate API delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // In a real implementation:
      // emailjs.sendForm(SERVICE_ID, templateId, formElement, USER_ID)
      //   .then(resolve)
      //   .catch(reject);
      
      resolve({ status: 200, text: 'OK' });
    }, 1500);
  });
}
