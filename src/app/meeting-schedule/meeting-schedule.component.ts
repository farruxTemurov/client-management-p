import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-meeting-schedule',
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['../../assets/styles/auth-styles.css']
})
export class MeetingScheduleComponent {
  isFormSubmitted: boolean = false; // Track whether the form has been submitted
  tname: string = '';
  pnum: number | null = null; // Use number type for pnum
  dueDate: string = '';
  errorMessages: any = {
    tname: '',
    pnum: '',
    dueDate: ''
  };

  constructor(private router: Router) { }  // Inject Router

  onSubmit(): void {
    if (this.validateForm()) {
      this.isFormSubmitted = true; // Set form submission flag to true
      console.log('Form submitted:', this.isFormSubmitted); // Debugging log
      alert('Meeting scheduled successfully!');

      // Redirect to the home page (MainComponent)
      this.router.navigate(['/']);
    }
  }

  validateForm(): boolean {
    let isValid = true;

    this.errorMessages = {
      tname: '',
      pnum: '',
      dueDate: ''
    };

    if (!this.tname.trim()) {
      this.errorMessages.tname = 'Meeting topic is required.';
      isValid = false;
    }

    if (this.pnum === null || this.pnum < 2) {
      this.errorMessages.pnum = 'At least 2 people are required.';
      isValid = false;
    }

    if (!this.dueDate) {
      this.errorMessages.dueDate = 'Start time is required.';
      isValid = false;
    }

    return isValid;
  }
}
