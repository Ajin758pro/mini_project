import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name : string= '';
  email :  string = '';
  password : string = '';
  constructor(private auth :AuthService){}



  register()
  {
    if(this.name == ''){
      Swal.fire({
        title: 'Please Enter name',
        icon: 'warning',
        confirmButtonColor: '#5a3838',
      })
       return;
    }
    if(this.email == ''){
      Swal.fire({
        title: 'Please Enter Email',
        icon: 'warning',
        confirmButtonColor: '#5a3838',
      })
      return;
    }
    if(this.password == ''){
      Swal.fire({
        title: 'Please Enter Password',
        icon: 'warning',
        confirmButtonColor: '#5a3838',
      })
       return;
    }
       
    this.auth.register(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
