import { Component, Input } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';
import { error } from 'highcharts';

@Component({
  selector: 'nb-chat-conversation-showcase',
  styles: [`
    ::ng-deep nb-layout-column {
      display: flex;
      justify-content: center; 
      background-color: white;
      

    }
    :host {
      display: flex;
    }
    nb-chat {
      width: 1000px;
      margin:  0.5rem 0 2rem 2rem;
    }
  `],
  templateUrl: './chat-conversation-showcase.component.html',
})

export class ChatConversationShowcaseComponent {

  messages: any[] = [];
  @Input() bot_info:any;


  message!:any;

  color!: string;
  constructor(private chatbotService: ChatbotService){}
  ngOnInit() {
    console.log(this.bot_info.id)
    this.color = this.bot_info.siteInfo.siteName === "TripAdvisor" ? "success" : "warning" ;
    this.chatbotService.load_Conversation(this.bot_info.id).subscribe((res)=>{

    let messageDB= res;


    for (var msgObj of messageDB) {
      this.loadSentMessages(msgObj.user,msgObj.bot);
    }
   })
  }
  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    let messageSaving = {user:"",bot:""}
    const files = !event.files ? [] : event.files.map((file:any) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: '',
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });

    messageSaving.user = event.message;

    if (this.bot_info.siteInfo.siteName === "TripAdvisor") {
            this.chatbotService.responseTripadvi(event.message).subscribe((res)=>{
              console.log(res);
              //this.message= res;
                this.messages.push({
                text: res, //reply text
                date: '',
                reply: false, //uf this false , then this is gonna be a reply
                type: files.length ? 'file' : 'text',
                files: files,
                user: {
                  name: this.bot_info.name,
                  avatar: this.bot_info.siteInfo.imgSrc,
                },
                

              });
              messageSaving.bot = res;
              console.log("--")
              console.log("res", res)
              console.log("message: ",messageSaving.bot)


              this.chatbotService.sendMessages(messageSaving, this.bot_info.id).subscribe((res)=>{console.log(res)})

            },error => {alert("Somethig went wrong. Couldn't respond to your  request!")})

    }else if (this.bot_info.siteInfo.siteName === "Amazon") {
      this.chatbotService.responseAmazon(event.message).subscribe((res)=>{
        //this.message= res;
      
        this.messages.push({
          text: res, //reply text
          date: '',
          reply: false, //uf this false , then this is gonna be a reply
          type: files.length ? 'file' : 'text',
          files: files,
          user: {
            name: this.bot_info.name,
            avatar: this.bot_info.siteInfo.imgSrc,
          },

        });



          messageSaving.bot =res;
          this.chatbotService.sendMessages(messageSaving, this.bot_info.id).subscribe((res)=>{console.log(res)})



      },error => {alert("Somethig went wrong. Couldn't respond to your  request!")})
    }

    
  
    
  }

  loadSentMessages(userMsg:string, botMsg:string){
    this.messages.push({
      text: userMsg,
      date: '',
      reply: true,
   
      user: {
        name: "",
        avatar: "",
      },
    });

    this.messages.push({
      text: botMsg, //reply text
      date: '',
      reply: false, //uf this false , then this is gonna be a reply
      user: {
        name: this.bot_info.name,
        avatar: this.bot_info.siteInfo.imgSrc,
      },

    });



  }
}
