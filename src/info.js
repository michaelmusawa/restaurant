export default function info() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
  
    const heading = document.createElement('h1');
    heading.innerText = 'Contact Information';
  
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
  
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
  
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
  
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';
  
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your Email';
  
    const messageTextarea = document.createElement('textarea');
    messageTextarea.placeholder = 'Your Message';
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Send Message';
  
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);
  
    const contactMap = document.createElement('div');
    contactMap.classList.add('contact-map');
    // Add code to integrate a map API or embed a map
  
    contactInfo.appendChild(contactForm);
    contactInfo.appendChild(contactMap);
  
    const contactAddress = document.createElement('address');
    contactAddress.innerHTML = '123 Main Street<br>City, Country';
  
    contactDetails.appendChild(contactInfo);
    contactDetails.appendChild(contactAddress);
  
    contactContainer.appendChild(heading);
    contactContainer.appendChild(contactDetails);
  
    document.body.appendChild(contactContainer);
  }
  