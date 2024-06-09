import { Component,Output,EventEmitter, Input, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-bot',
  templateUrl: './edit-bot.component.html',
  styleUrls: ['./edit-bot.component.css']
})
export class EditBotComponent implements OnInit{
  @Output() onCloseEditBot:EventEmitter<string>=new EventEmitter();
  @Input() bot_details!:any;
  new_bot_name!:string;

  ngOnInit(){
    this.new_bot_name=this.bot_details.title;

  }
  constructor(private chatbotservice: ChatbotService,  private toastr: ToastrService) {

  }

  onClose(){
    this.onCloseEditBot.emit();
    }

    edit(){
      //new_bot_name contains the new value to send to backend
      
      const bot_title = {
        title:this.new_bot_name
      }
      this.chatbotservice.updateChatbot(this.bot_details.id, bot_title).subscribe(
        () => {
          this.bot_details.title = this.new_bot_name;
        
 this.toastr.success("Bot name is updated to "+this.new_bot_name +" successfully!", "Congratulations");
        }
      );
      console.log(this.bot_details.id)
      console.log(this.new_bot_name)
      

    }
}
