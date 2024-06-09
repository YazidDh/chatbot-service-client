import { Component , Output, EventEmitter ,Input} from '@angular/core';
import {UpdateUserReq } from '../Requests/UpdateUserReq'
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @Input() profile:any;
  
  gender!:string;
  name !:string;
  email !:string;

  @Output() onCloseSettings:EventEmitter<string>=new EventEmitter();
  constructor(private userSrvice: UserService, private toastr: ToastrService){}
  ngOnInit() {
    this.name=this.profile.name;
    this.email=this.profile.email;

  }
  
 //used to know wich option is selected
 genders = ['Male','Female'];


 update(e:any){
  this.gender = e.target.value
  console.log(this.gender)
}

updateUser() {
  this.profile.name = this.name;
  this.profile.email = this.email;
  const updateUserReq: UpdateUserReq = {
    fullname : this.name,
    email: this.email,
    
  }
  this.userSrvice.updateUser(this.profile.id,updateUserReq).subscribe(()=>{
    
    this.toastr.success("Your profile is updated successfully!", "Congratulations");

  });
  console.log(updateUserReq, "id: ",this.profile.id);
}
onClose(){
  this.onCloseSettings.emit();
  }
}
