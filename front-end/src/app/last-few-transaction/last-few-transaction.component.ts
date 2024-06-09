import { Component } from '@angular/core';
import { Md5 } from 'ts-md5';
import { ChatbotService } from '../services/chatbot.service';


@Component({
  selector: 'app-last-few-transaction',
  templateUrl: './last-few-transaction.component.html',
  styleUrls: ['./last-few-transaction.component.css']
})
export class LastFewTransactionComponent {
  transactions:any;
  constructor(private chatbotService:ChatbotService){}

  ngOnInit(){
    this.chatbotService.getlastBotsInfos().subscribe((res)=>{
      this.transactions = res;
      for (var val of this.transactions) {
        val.email=this.getGravatarURL(val.email);
        }
    })
    
}

getGravatarURL(email: string) {

  const address = String(email).trim().toLowerCase();

  const hash = Md5.hashStr(address);

  return `https://www.gravatar.com/avatar/${hash}/?d=mm`;
}
}
