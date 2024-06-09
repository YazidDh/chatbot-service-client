import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChatbotService } from '../services/chatbot.service';

@Component({
  selector: 'app-chatbot-types-percentage',
  templateUrl: './chatbot-types-percentage.component.html',
  styleUrls: ['./chatbot-types-percentage.component.css']
})
export class ChatbotTypesPercentageComponent {
   amazonVal:number =0;
   tripAdvVal: number = 0;
chart:any;

constructor(private chatbotService:ChatbotService){}
ngOnInit(){
   this.chatbotService.getBotsPercentageByType().subscribe((res)=>{

      console.log(res)

   this.chart = new Chart({  chart : {
      height:'300px',
      plotBorderWidth: 0,
      plotShadow: true
   },
   title : {
  text: "Percentage Of Bot Type Preffered By Our Users"
   },
   
   tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
   plotOptions : {
      pie: {
         shadow: false,
         center: ['50%', '50%'],
         size:'70%',//adjust the size of the pie donut here
         innerSize: '40%'            
      }
   },
   series : [{
      type: 'pie',
      name: 'Percentage of all bot created',
      data: [
        {
          name: 'Amazon',
          y: (res.amazon/(res.amazon+res.tripAdvisor))*100,
          sliced: true,
          color:'#FF9900'
       },// put the percentae here
       {
        name: 'TripAdvisor',
        y:(res.tripAdvisor/(res.amazon+res.tripAdvisor))*100,
        sliced: true,
        color:'#00af87',
     },//put the percantege here
      ]
   }]
  });

})
}
  
}
    
   