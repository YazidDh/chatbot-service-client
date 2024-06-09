import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChatbotService } from '../services/chatbot.service';


@Component({
  selector: 'app-amazon-users-by-gender',
  templateUrl: './amazon-users-by-gender.component.html',
  styleUrls: ['./amazon-users-by-gender.component.css']
})
export class AmazonUsersByGenderComponent {


 chart:any;
constructor(private chatbotService:ChatbotService){}
ngOnInit(){
this.chatbotService.getGenderPercentages().subscribe((res)=>{
  console.log(res.amazon)
  this.chart = new Chart({
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Percentage of Amazon Bot Users By Gender',
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
           y: (res.amazon.male/(res.amazon.male+res.amazon.female))*100,//amazon perctage here
           color: '#165BAA',
         },
         {
           name: 'Female',
           y: (res.amazon.female/(res.amazon.male+res.amazon.female))*100,//tripadvisor perctage here
           color: '#F765A3',
         },
       
       ]
      }
     ],
})
})
}
}
    
   