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

  formData = { name: '', email: '', message: '' };

  // Strict email regex: requires local part, @, domain, and valid TLD (2–10 chars)
  readonly emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,10}$/;

  isSubmitting = false;
  submitSuccess = false;
  submitError   = false;

  private readonly EMAILJS_PUBLIC_KEY   = 'onYGRAIwkRMtaoYKZ';
  private readonly EMAILJS_SERVICE_ID   = 'service_apiujh2';
  private readonly EMAILJS_TEMPLATE_ID  = 'template_1dbib4e';

  constructor() {
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    // Reset states
    this.isSubmitting  = true;
    this.submitSuccess = false;
    this.submitError   = false;

    try {
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          name:    this.formData.name,
          email:   this.formData.email,
          message: this.formData.message,
        }
      );

      this.submitSuccess = true;
      this.formData = { name: '', email: '', message: '' };

      // Reset button back to idle after 3 s
      setTimeout(() => { this.submitSuccess = false; }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      this.submitError = true;

      // Allow retry after 3 s
      setTimeout(() => { this.submitError = false; }, 3000);

    } finally {
      this.isSubmitting = false;
    }
  }
}