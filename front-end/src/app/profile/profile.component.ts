import { Component, Output, EventEmitter , Input} from '@angular/core';

import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Output() onCloseProfileInfo:EventEmitter<string>=new EventEmitter();
  @Output() onBtnEditProfileEvent:EventEmitter<string>=new EventEmitter();

  @Input() profile:any;

  imgURL!: string;

  ngOnInit() {
    this.getGravatarURL(this.profile.email)
    
    
  }

  getGravatarURL(email: string) {
 
    const address = String(email).trim().toLowerCase();
  
    const hash = Md5.hashStr(address);
  
    this.imgURL= `https://www.gravatar.com/avatar/${hash}/?d=mm`;
  }
  onClose(){
    this.onCloseProfileInfo.emit();
    }

    onBtnEditProfile(){
      this.onBtnEditProfileEvent.emit();
 

    }
}
