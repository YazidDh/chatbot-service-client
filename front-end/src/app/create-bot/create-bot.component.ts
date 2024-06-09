
import { Component, Output, EventEmitter,Input } from '@angular/core';
import { ChatBot } from '../Requests/ChatBot';
import { ChatbotService } from '../services/chatbot.service';
import { Participants, conversation } from '../Requests/Conversation';
import { ToastrService } from 'ngx-toastr';
import { error } from 'highcharts';



@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent {

botTitle!:any;
selectedSiteInfos!:any;
@Output() onCloseCreate:EventEmitter<string>=new EventEmitter();
@Input() profileInCreate:any;


constructor(private chatBotService: ChatbotService, private toastr: ToastrService) {}

//used to know wich option is selected
  siteInfos = [{siteName:"Amazon",category:"E-commerce",imgSrc:"assets/amazon.gif"},
  {siteName:"TripAdvisor",category:"E-Travel",imgSrc:"assets/TripAdvisor.png"}
];

  update(e:any){
    for (var obj of this.siteInfos) {
      if(obj['siteName']=== e.target.value){
        this.selectedSiteInfos=obj;
      }
      //console.log(this.selectedSiteInfos,this.botTitle);

    }
  }



  onClose(){
this.onCloseCreate.emit();
}

createChatBot() {
  
  const createReq: ChatBot = {
     title: this.botTitle,
     siteInfo: this.selectedSiteInfos,
     userId: this.profileInCreate.id
   }
  //console.log(createReq);

  this.chatBotService.createChatBot(createReq).subscribe(
    () => {
      this.chatBotService.getChatBotByUserId(this.profileInCreate.id).subscribe(
      res => {this.profileInCreate.bots = res
      console.log("bot: ",this.profileInCreate.bots[this.profileInCreate.bots.length-1].id)
      console.log("user: ",this.profileInCreate.id)
      const conv: conversation = {
        participants:{
            userId:this.profileInCreate.id,
            chatbotId:this.profileInCreate.bots[this.profileInCreate.bots.length-1].id
        },
        messages : [
        ]
      
    
      }
      this.chatBotService.createConversation(conv).subscribe();
      
      }  )
    
     
    
      this.toastr.success(this.botTitle+" bot is created successfully!", "Congratulations");},error => {
        this.toastr.error("Something went wrong. Couldn't create Bot !")
      }
  );
  
}
}





