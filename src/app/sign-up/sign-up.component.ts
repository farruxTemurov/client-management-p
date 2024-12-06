import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../assets/styles/auth-styles.css']
})
export class SignUpComponent implements OnInit {
  isFormSubmitted = false;  // Track the form submission state
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessages: any = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) { }  // Inject Router

  ngOnInit(): void { }

  // Form submission method
  onSubmit(): void {
    if (this.validateForm()) {
      // Form submission logic goes here
      alert('Form submitted successfully!');
      this.isFormSubmitted = true;  // Hide the form and show the success message

      // Redirect to the home page (MainComponent)
      this.router.navigate(['/']);
    }
  }

  // Validate the form fields
  validateForm(): boolean {
    let isValid = true;

    // Reset error messages
    this.errorMessages = {
      name: '',
      email: '',
      password: ''
    };

    // Validate name
    if (!this.name.trim()) {
      this.errorMessages.name = 'Name is required.';
      isValid = false;
    }

    // Validate email
    if (!this.email.trim()) {
      this.errorMessages.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(this.email)) {
      this.errorMessages.email = 'Enter a valid email address.';
      isValid = false;
    }

    // Validate password
    if (!this.password.trim()) {
      this.errorMessages.password = 'Password is required.';
      isValid = false;
    } else if (this.password.length < 6) {
      this.errorMessages.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    return isValid;
  }
}
