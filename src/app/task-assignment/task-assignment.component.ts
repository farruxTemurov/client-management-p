import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-task-assignment',
  templateUrl: './task-assignment.component.html',
  styleUrls: ['../../assets/styles/auth-styles.css']
})
export class TaskAssignmentComponent {
  isFormSubmitted: boolean = false; // Track whether the form has been submitted
  tname: string = '';
  aname: string = '';
  dueDate: string = '';
  errorMessages: any = {
    tname: '',
    aname: '',
    dueDate: ''
  };

  constructor(private router: Router) { }  // Inject Router


  // Method to handle form submission
  onSubmit(): void {
    if (this.validateForm()) {
      this.isFormSubmitted = true; // Set form submission flag to true
      alert('Task Assigned successfully!');

      // Redirect to the home page (MainComponent)
      this.router.navigate(['/']);
    }
  }

  // Method to validate form inputs
  validateForm(): boolean {
    let isValid = true;

    // Reset error messages
    this.errorMessages = {
      tname: '',
      aname: '',
      dueDate: ''
    };

    // Validate topic name
    if (!this.tname.trim()) {
      this.errorMessages.tname = 'Task topic is required.';
      isValid = false;
    }

    // Validate assignee name
    if (!this.aname.trim()) {
      this.errorMessages.aname = 'Assignee name is required.';
      isValid = false;
    }

    // Validate due date
    if (!this.dueDate) {
      this.errorMessages.dueDate = 'Due date is required.';
      isValid = false;
    }

    return isValid;
  }
}
