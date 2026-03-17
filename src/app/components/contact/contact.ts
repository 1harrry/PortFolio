import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // EmailJS configuration
  private readonly EMAILJS_PUBLIC_KEY = 'onYGRAIwkRMtaoYKZ';
  private readonly EMAILJS_SERVICE_ID = 'service_apiujh2';
  private readonly EMAILJS_TEMPLATE_ID = 'template_1dbib4e';  

  constructor() {
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.setAttribute('disabled', 'true');
      }

      console.log('Sending email with data:', this.formData);

      // Match the variable names with your EmailJS template
      const result = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          name: this.formData.name,           // Changed from from_name to name
          email: this.formData.email,          // Changed from from_email to email
          message: this.formData.message,
          // reply_to: this.formData.email     // Remove if not in template
        }
      );

      console.log('Email sent successfully:', result);
      alert('✨ Message sent successfully! I\'ll get back to you within 24 hours.');
      this.formData = { name: '', email: '', message: '' };
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again or email me directly at hariprasath20.c@gmail.com');
    } finally {
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Send Message';
        submitButton.removeAttribute('disabled');
      }
    }
  }
}