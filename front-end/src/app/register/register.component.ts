import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Requests/User';
import { Router } from '@angular/router';
import { CanProceedService } from '../services/can-proceed.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! the form now is template driven form
so we access the value of email, fullName, password , and gender as follow respectivly

myForm.controls.email.value
 myForm.controls.fullName.value
 myForm.controls.password.value
 myForm.controls.gender.value

*/

  form!: any;

  @ViewChild('myEmail', { static: true }) myCustomEmail: any;
  constructor(private userService: UserService, private router: Router, private canProceedService:CanProceedService) {}

  //used to know wich option is selected
  genders = ['Male', 'Female'];

  

  ngOnInit() {
    this.myCustomEmail.nativeElement.focus();
  }

  update(e: any, myForm: any) {
    myForm.controls.gender.value = e.target.value;
  }

 
  submit(myForm: any) {
    const newUser: User = {
      email: myForm.controls.email.value,
      fullname: myForm.controls.fullName.value,
      password: myForm.controls.password.value,
      gender: myForm.controls.gender.value,
      
    };


    // this.userService.register(newUser).subscribe(()=>{ this.canProceedService.login(myForm.controls.email.value );}   
    this.canProceedService.login(myForm.controls.email.value );

    this.userService.register(newUser).subscribe(
//       {next: res => {
//         this.canProceedService.login(myForm.controls.email.value );

//         this.router.navigate(['/dashboard'],{ state: { data: myForm.controls.email.value } });
//         console.log('registration completed succesfully')

//         console.log(newUser)
//       },
//       error:error => {
//         alert("This email is already used !");
//       }
//     }
// 

      res => {
        
        if (res.token === null) {
          alert(res.userExists);
        } else {
          this.canProceedService.login(myForm.controls.email.value );

          this.router.navigate(['/dashboard'],{ state: { data: myForm.controls.email.value } });
        }
          
      }   
    
    );
    console.log(myForm);
   
    
    
    //myForm.reset()

    
  }
}

