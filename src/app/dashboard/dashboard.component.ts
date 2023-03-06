import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  d:string=new Date().toLocaleTimeString()  ;  
s= setInterval(()=>{
  this.d=new Date().toLocaleTimeString()
},1000)
}

