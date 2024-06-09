import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChatbotService } from '../services/chatbot.service';

@Component({
  selector: 'app-tripadvisor-users-by-gender',
  templateUrl: './tripadvisor-users-by-gender.component.html',
  styleUrls: ['./tripadvisor-users-by-gender.component.css']
})
export class TripadvisorUsersByGenderComponent {




  chart:any;

constructor(private chatbotService:ChatbotService){}

ngOnInit(){
  this.chatbotService.getGenderPercentages().subscribe((res)=>{
    this.chart =new Chart({
      chart: {
          type: 'variablepie'
      },
      title: {
          text: 'Percentage of TripAdvisor Bot Users By Gender',
          align: 'center'
      },
      tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
              ' <b>{point.y} %</b><br/>' 
      },
      series: [
        {
         type: 'pie',
         data: [
           {
             name: 'Male',
             y: (res.tripAdvisor.male/(res.tripAdvisor.male+res.tripAdvisor.female))*100,//amazon perctage here
             color: '#165BAA',
           },
           {
             name: 'Female',
             y: (res.tripAdvisor.female/(res.tripAdvisor.male+res.tripAdvisor.female))*100,//tripadvisor perctage here
             color: '#F765A3',
           },
         
         ]
        }
       ],
  })
  })

}

}
    
   