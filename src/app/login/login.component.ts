import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
 isAuth :any;
  constructor( private data: DataService,private router:Router) { }

  ngOnInit(): void {
  }
  
onSubmit(){
this.isAuth =this.data.getUserValidation(this.username,this.password);
if(this.isAuth){
  this.router.navigate(['/home']);

}
else{
  alert('Wrong Credentials')
}
}
}
