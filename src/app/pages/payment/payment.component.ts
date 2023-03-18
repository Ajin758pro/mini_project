import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

   name:string=''
   phone:string=''
   address:string=''
  // msg()
  // {
  //   if(this.name == ''){
  //     Swal.fire({
  //       title: 'Please Enter ',
  //       icon: 'warning',
  //       confirmButtonColor: '#5a3838',
  //     })
  //      return;
  //   }
  //   if(this.phone == ''){
  //     Swal.fire({
  //       title: 'Please Enter Phone number',
  //       icon: 'warning',
  //       confirmButtonColor: '#5a3838',
  //     })
  //      return;
  //   }
  //    if(this.address=='')
  //   {
  //     Swal.fire({
  //       title: 'Please Enter Address',
  //       icon: 'warning',
  //       confirmButtonColor: '#5a3838',
  //     })
  //      return
  //   }
  //   this.name = '';
  // this.phone = '';
   
  // }


 
}
