import { Component , Output, EventEmitter, Input, OnInit} from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-bots',
  templateUrl: './my-bots.component.html',
  styleUrls: ['./my-bots.component.css']
})
export class MyBotsComponent implements OnInit{
  category:string="All";
  @Input() profileInMyBots:any;

  
  bots_details: any;
  bots:any;

  constructor(private chatbotservice: ChatbotService, private toastr: ToastrService) {}
  ngOnInit(): void {
    console.log(this.profileInMyBots);
    this.bots = this.profileInMyBots.bots;
    console.log(this.profileInMyBots.id);
   
  }


  
  //bots=[{name:'Amazon',category:'E-commerce',img:"assets/amazon.gif"},
  //{name:'Coursera',category:'E-learning', img:"assets/coursera.png"}, ];

  @Output() onCloseMyBots:EventEmitter<string>=new EventEmitter();
  
  @Output() onOpen:EventEmitter<any>=new EventEmitter();
  @Output() onEditBot:EventEmitter<any>=new EventEmitter();



  
  @Input() searched:string='';


    //used to know wich option is selected 
    
    categories = ['All','E-commerce','E-travel'];

    update(e:any){
      this.category = e.target.value
    }

    onClose(){
      this.onCloseMyBots.emit();
      
      }
      open(botInfo:any){
        this.onOpen.emit(botInfo);
        
        }

        editBot(bot:any ){
          this.onEditBot.emit(bot);


        }

        deleteBot(id:any){
          console.log(id);
          this.chatbotservice.deleteChatBot(id).subscribe(
            () => {

              this.profileInMyBots.bots = this.profileInMyBots.bots.filter((bot:any) => bot.id !== id)
              this.bots = this.profileInMyBots.bots;
              console.log(this.profileInMyBots.bots)
              let botName = this.profileInMyBots.bots.filter((bot:any) => bot.id === id)

            this.toastr.error("The bot is deleted successfully!", "Congratulations");
            }
            
          );
          
          //your code here

          //keep this to refersh page after deletion and show MyBots component after update
          //location.reload();
          
        }
    

}