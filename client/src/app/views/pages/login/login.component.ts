import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  ProgressBarComponent,
  ProgressBarDirective,
  ProgressComponent,
  ToastBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastHeaderComponent
} from '@coreui/angular';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
// import { ToastSampleIconComponent } from 'app\views\notifications\toasters\toast-simple\toast-sample-icon.component.ts';
// import { ToastSampleIconComponent } from './app/views/notifications/toasters/toast-simple/toast-sample-icon.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ToasterComponent, ToastComponent, ToastHeaderComponent, ToastBodyComponent,ReactiveFormsModule, ProgressBarDirective, ProgressComponent, ProgressBarComponent, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class LoginComponent {
  position = 'top-end';
  visible = false;
  percentage = 0;
  Message:string = "";
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
     // Initialize loginForm with an empty form group
     this.loginForm = this.fb.group({});
  }
  
  
  ngOnInit(): void {
    // Initialize the form group with controls
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  NavigationClick() {
    this.router.navigateByUrl('/register');
  };

  LoginAuthentication() {
    const form = this.loginForm.value;
    const username = form.username;
    const password = form.password;
  
    console.log("Login form submitted:", this.loginForm.value);  // Debug log
    console.log("Username:", username);
    console.log("Password:", password);
    if (username == "Admin" && password == "Password123") {
      this.router.navigateByUrl("/dashboard")
    } else {
      this.visible = !this.visible;
    this.Message = "Please insert correct credentials";
    }

  }

  toggleToast() {
    this.visible = !this.visible;
  }
  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
}
