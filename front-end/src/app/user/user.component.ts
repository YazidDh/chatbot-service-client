import { Component,OnInit } from '@angular/core';
import { User } from '../Requests/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService){}
  ngOnInit():void{}
}
