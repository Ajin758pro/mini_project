import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router : Router) {
   }

   //login
   login(email : string,password : string)
   {
    this.fireauth.signInWithEmailAndPassword(email,password).then(() =>{
      localStorage.setItem('token','true');
      this.router.navigate(['brands']);
    },err => {
      alert(err.message);
      this.router.navigate(['/login1']);

    })
   }


   //register
   register(email : string,password : string)
   {
      this.fireauth.createUserWithEmailAndPassword(email,password).then(() =>{
        alert('registration successfull');
        this.router.navigate(['/login1']);
      },err => {
        alert(err.message);
        this.router.navigate(['/register']);

      })
   }
}
