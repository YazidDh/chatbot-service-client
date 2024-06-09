import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatBot } from '../Requests/ChatBot';
import { Observable } from 'rxjs';
import { Messages, conversation } from '../Requests/Conversation';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl : string="http://localhost:8080/api/chatBots"

  constructor(private httpClient:HttpClient) {}

  public createChatBot(chatbot: ChatBot): Observable<ChatBot> {
    return this.httpClient.post<ChatBot>(`${this.apiUrl}`,chatbot);
  }

  public updateChatbot(id: string,chatbot_tite: any):Observable<ChatBot> {
    return this.httpClient.put<ChatBot>(`${this.apiUrl}/${id}`,chatbot_tite);
  }

  public deleteChatBot(id: string):Observable<ChatBot> {
    return this.httpClient.delete<ChatBot>(`${this.apiUrl}/${id}`);
  }

  public getChatBotByUserId(id: string): Observable<ChatBot[]> {
    return this.httpClient.get<ChatBot[]>(`${this.apiUrl}/${id}`);
  }

  public responseAmazon(message: string): Observable<string> {
    return this.httpClient.post(`${this.apiUrl}/amazonChatbotResponse`,message, {responseType: "text"});
  }

  public responseTripadvi(message: string): Observable<string> {
    return this.httpClient.post(`${this.apiUrl}/tripAdvChatbotResponse`,message, {responseType: "text"});
  }

  public createConversation(conversation:conversation):Observable<conversation> {
    return this.httpClient.post<conversation>(`${this.apiUrl}/conversations`, conversation);
  }

  /* this function takes as input :
      1- messages withe the fellowing format  {"user":"message", "bot":"message"}
      2- id witch is this.bot_info.id (chatbotId)
    IT APPENDS TO THE MESSAGES ELEMENT OF THE CONVERSATION OBJECT THE USER AND BOT 
    RESPONSES*/
  public sendMessages(messages: Messages, id:string):Observable<Messages> {
    return this.httpClient.put<Messages>(`${this.apiUrl}/conversations/${id}`,messages);
  }

  

  /*
  this function returns the conversation messages in order like the fellowing: 
  [
    {
        "user": "how can i pay for my  ticket ?",
        "bot": "you cantact your agency online "
    },
    {
        "user": "thank you for help good bye",
        "bot": "you are welcome any time"
    }
] 
it is a list of json objects
the argument is the chatbotId 
  */ 
  public load_Conversation(id:string):Observable<Messages[]> {
    return this.httpClient.get<Messages[]>(`${this.apiUrl}/conversations/${id}`);
  }


  /*
  All of the these functions does not require inputs.
  */ 

  /*
  this functions returns data like this :
  {
    "amazon": 0.5555556,
    "tripAdvisor": 0.44444445
  }
  these are the percentages of each type of chatbot.
  */ 
  public getBotsPercentageByType():Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/chartsData/chatBotsPercentageByType`)
  }

  /* 
  this function returns gender in general and by bots :
  the data is in this format:
  {
    "general": {
        "male": 0.5,
        "female": 0.5
    },
    "amazon": {
        "male": 0.5,
        "female": 0.5
    },
    "tripAdvisor": {
        "male": 0.625,
        "female": 0.375
    }
}
  
  */
  public getGenderPercentages():Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/chartsData/GenderPercentages`);
  }

  /*
  this function return the last 10 chatbot and some data about them:
  the chatbots are order like the first element is the last one created and so on 
 
  data is clean and ready to use

  data format: 
  [
    {
        "fullname": "test 17",
        "email": "test17@gmail.com",
        "botTitle": "amazon 17k",
        "siteName": "Amazon"
    },
    {
        "fullname": "test 17",
        "email": "test17@gmail.com",
        "botTitle": "trip adv17",
        "siteName": "TripAdvisor"
    },
    {
        "fullname": "test 17",
        "email": "test17@gmail.com",
        "botTitle": "trip 17",
        "siteName": "TripAdvisor"
    },
    {
        "fullname": "test 15",
        "email": "test15@gmail.com",
        "botTitle": "trip  advisor",
        "siteName": "TripAdvisor"
    },
    {
        "fullname": "test 15",
        "email": "test15@gmail.com",
        "botTitle": "tripAdv k15",
        "siteName": "TripAdvisor"
    },
    {
        "fullname": "test 15",
        "email": "test15@gmail.com",
        "botTitle": "tripAdv 15",
        "siteName": "TripAdvisor"
    },
    {
        "fullname": "test 14",
        "email": "test14@gmail.com",
        "botTitle": "amazon k14",
        "siteName": "Amazon"
    },
    {
        "fullname": "test 14",
        "email": "test14@gmail.com",
        "botTitle": "amazon 14",
        "siteName": "Amazon"
    },
    {
        "fullname": "test 13",
        "email": "test13@gmail.com",
        "botTitle": "trip advisor",
        "siteName": "TripAdvisor"
    },
    {
        "fullname": "test 13",
        "email": "test13@gmail.com",
        "botTitle": "amazon k13",
        "siteName": "Amazon"
    }
  ]
  it is a list of json objects.
  */

  public getlastBotsInfos():Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/chartsData/lastBotsInfos`);
  }


}
