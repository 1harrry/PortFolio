import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    alert('Message sent! (Demo - Add your backend logic)');
    this.formData = { name: '', email: '', message: '' };
  }
}