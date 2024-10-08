import { Component } from '@angular/core';
import { IconDirective, IconModule, IconSetService } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, FormCheckComponent,FormCheckLabelDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, CardHeaderComponent, DropdownComponent, DropdownDividerDirective, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective, FormCheckInputDirective, FormLabelDirective, FormSelectDirective, ThemeDirective } from '@coreui/angular';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { DropdownsComponent } from "../../buttons/dropdowns/dropdowns.component";
import { DocsExampleComponent } from '@docs-components/public-api';
import { cilListNumbered, cilPaperPlane,cilPhone,cilScrubber,cilLockLocked,cilEqualizer ,cilUser , brandSet } from '@coreui/icons';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent ,IconModule, ReactiveFormsModule, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, DropdownsComponent,
        CardHeaderComponent, DocsExampleComponent, FormLabelDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,ThemeDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterLink, DropdownDividerDirective, FormSelectDirective,
    ]
})
export class RegisterComponent {
registerForm:FormGroup;
data:any;
error:any;
  constructor(private router: Router, private fb:FormBuilder, private userRegistrationService: UserRegistrationService,public iconSet: IconSetService) {
    this.registerForm = this.fb.group({});
    iconSet.icons = { cilListNumbered,cilPhone,cilLockLocked ,cilScrubber,cilEqualizer,cilUser , cilPaperPlane, ...brandSet };
   }
   ngOnInit(): void { 
    // Initialize the form group with controls  
    this.registerForm = this.fb.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      phone:['',Validators.required],
      status:['',Validators.required],
      role:['',Validators.required],
    });
  }

  RegistrationButton(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
    this.userRegistrationService.createUser(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
    this.router.navigateByUrl("/login")
  }
}
}
