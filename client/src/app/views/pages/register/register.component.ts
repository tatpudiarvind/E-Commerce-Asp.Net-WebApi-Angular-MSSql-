import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service.ts'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent,ReactiveFormsModule, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective]
})
export class RegisterComponent {
registerForm:FormGroup;
data:any;
error:any;
  constructor(private router: Router, private fb:FormBuilder, private userRegistrationService: UserRegistrationService) {
    this.registerForm = this.fb.group({});
   }
   ngOnInit(): void {
    // Initialize the form group with controls
    this.registerForm = this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    });
    this.userRegistrationService.
  }

  RegistrationButton(){
    console.log(this.registerForm.value);
    this.router.navigateByUrl("/login")
  }
}
