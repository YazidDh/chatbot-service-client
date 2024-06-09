import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ChatbotService } from '../services/chatbot.service';
import { CanProceedService } from '../services/can-proceed.service';

import {Md5} from 'ts-md5';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  email!: any;
  userDetails!: any;
  to_show!:string;
  searchedWord:string='';
  profileInParent!: any;
  searchBot!:string;
  previousSearchBot:string='';
  


  chat_box_info!:any;
  bot_to_edit!:any;

  bots_details : any;
  bots: any;


  imgURL!: string;
  constructor(private router: Router, private userService: UserService, private chatbotservice: ChatbotService,private canProceedService: CanProceedService) {}


  //"https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
  ngOnInit() {

    
    this.email = this.canProceedService.geStoredEmail();
    console.log()
    
    // this.email = history.state.data;
    
    this.userService.getUser(this.email).subscribe(
      res => {
        this.userDetails = res;
        console.log(this.userDetails.role)
        this.profileInParent = {id:this.userDetails.id,name:this.userDetails.fullname, email:this.userDetails.email, gender:this.userDetails.gender,role:this.userDetails.role, bots:[],imgUrl:this.getGravatarURL(this.userDetails.email)}
        console.log(this.profileInParent)
        console.log("getUser executed")


        this.chatbotservice.getChatBotByUserId(this.profileInParent.id).subscribe(
          response => {
            this.bots_details= response;
            this.bots = this.bots_details;
            console.log(this.bots); 
            this.profileInParent.bots = this.bots;
            console.log(this.profileInParent )
            
          }

        )
      
      }
    );
  

    // this.profileInParent = {name:'John Doe', email:'johndoe@gmail.com', gender:'Male', bots:['E-bay', 'Amazon', 'Coursera'],imgUrl:"https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"}
    
  }
  


 



  showCreationComp(){
    this.to_show='create_comp';
  }
  showMyBotsComp(){
    this.to_show='my_bots_comp';
  }

  close(){
    this.to_show='';
  }

  setSearchedWord(e:any){
    this.searchedWord = e.target.value;
  }

  showProfileComp(){
    this.to_show='profile_info_comp'
  }

  showSettingsComp(){
    this.to_show='settings_comp';
  }

  showChatBoxComp(e:any){
    this.chat_box_info = e;
    this.to_show='chat_box_comp';

  }

  showEditBotComp(e:any){
    this.bot_to_edit = e;
    this.to_show='edit_bot_comp';
    console.log(e);
  }
  showAdminDash(){
    this.to_show='main_admin_page_comp'

  }

  logout(){
    this.canProceedService.logout();
    this.router.navigate(['/signin'])
    location.reload()

  }
  getGravatarURL(email: string) {
 
    const address = String(email).trim().toLowerCase();
  
    const hash = Md5.hashStr(address);
  
    this.imgURL= `https://www.gravatar.com/avatar/${hash}/?d=mm`;
  }

  // logout () {
  //   console.log("worked")
  //   this.userService.logout().subscribe(
  //     res => {
  //       this.router.navigate(['/signin']);
  //     }
  //   )
  // }

  
}
