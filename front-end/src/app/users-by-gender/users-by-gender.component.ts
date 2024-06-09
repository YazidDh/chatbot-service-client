import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChatbotService } from '../services/chatbot.service';

@Component({
  selector: 'app-users-by-gender',
  templateUrl: './users-by-gender.component.html',
  styleUrls: ['./users-by-gender.component.css']
})
export class UsersByGenderComponent {

chart:any;

  constructor(private chatbotService:ChatbotService){}
  ngOnInit(){

    this.chatbotService.getGenderPercentages().subscribe((res)=>{
console.log(res.general)
      this.chart = new Chart({
        chart: {
          type: 'bar',
          height: 225
        },
        title: {
          text: 'Site Users Gender Percentage'
        },
        xAxis: {
          categories: [
            'Male',
            'Female',
          ]
        },
        yAxis: {
          title: {
            text: ''
          }
          , min:0,
          max:100
        },
        series: [
         {
          type: 'bar',
          showInLegend: false,
          data: [
            {
              name: 'Male',
              y: (res.general.male/(res.general.male+res.general.female))*100,// male perctage put it here
              color: '#165BAA',
            },
            {
              name: 'Female',
              y: (res.general.female/(res.general.male+res.general.female))*100,// female perctage put it here
              color: '#F765A3',
            },
           
          ]
         }
        ],
        credits: {
          enabled: false
        }
      })
    })

  }

}
