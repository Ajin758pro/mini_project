import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {
    
email :  string = '';
password : string = '';
constructor(private auth :AuthService){}

login()
{
  if(this.email == ''){
    Swal.fire({
      title: 'Please enter Email',
      icon: 'warning',
      confirmButtonColor: '#5a3838',
    })
     return;
  }
  if(this.password == ''){
    Swal.fire({
      title: 'Please enter Password',
      icon: 'warning',
      confirmButtonColor: '#5a3838',
    })
     return;
  }
     
  this.auth.login(this.email,this.password);
  this.email = '';
  this.password = '';
}
}
