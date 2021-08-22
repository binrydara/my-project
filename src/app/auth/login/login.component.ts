import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public logindata= {email:'',password:''}
  
  
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  checklogin(){
    if(this.logindata.email=='' || this.logindata.password=='' ){
      console.log('test  plas check input');
    }else{
      this.login
    }
  }
  login(){
  //   const data={
  //     username:'binly',
  //     password:'12345'
  //   }


    
  //   if(res.status==1){
  //     console.log('login succesfully');
  //   }else{
  //     console.log('nonono');
  //   }
  //   console.log('nonono');
  //   //this._auth.login(this.logindata)
   }

}
