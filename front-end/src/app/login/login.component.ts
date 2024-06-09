import { Component,OnInit,ViewChild } from '@angular/core';
import { User } from '../Requests/User';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import { AuthReq } from '../Requests/AuthReq';
import { CanProceedService } from '../services/can-proceed.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! the form now is template driven form
so we access the value of email and password as follow respectivly
myForm.controls.email.value
myForm.controls.password.value inside the signin function

*/

  
  users:User[]=[];
  @ViewChild('myEmail',{static:true}) myCustomEmail:any;
  constructor(private userService:UserService, private router: Router, private canProceedService:CanProceedService){}
  //onInit get all users in this component
  ngOnInit(){ 

  }

  //onSignIn compare the email and the password that you enter if it exists in the users the get in this component
  signin(myForm:any){
    
    const request: AuthReq = {
      email: myForm.controls.email.value,
      password: myForm.controls.password.value
    }

    
    // if (this.userService.authenticate(request).subscribe()) {
    //   this.router.navigate(['/dashboard'],{ state: { data: myForm.controls.email.value } });
    // } else {
    //   alert("check your password or email !");
    // }
    this.userService.authenticate(request).subscribe(
      {next: res => {
        this.router.navigate(['/dashboard'],{ state: { data: myForm.controls.email.value } });
        this.canProceedService.login(myForm.controls.email.value);

      },
      error:error => {
        alert("check your password or email !");
      }
    }
    )

  

  }

}
