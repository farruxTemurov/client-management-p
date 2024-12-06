import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';
import { MainComponent } from './main/main.component'; // Import MainComponent

const routes: Routes = [
  { path: '', component: MainComponent }, // Home page route
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'task-assignment', component: TaskAssignmentComponent },
  { path: 'meeting-schedule', component: MeetingScheduleComponent },
  { path: '**', redirectTo: '' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
