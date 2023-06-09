import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';
HeroService
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  constructor(private router:Router,private hero:HeroService,private firestore : Firestore) {}
  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage']);
  }
  
  submit(){
    alert('Submitted Sucessfully')
    this.router.navigateByUrl('homepage')
  }

  addData(f:any)
  {
     const collectionInstance = collection(this.firestore,'users');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('Data Saved Sucessfully')
    })
    .catch((err)=>{
      console.log(err); 
    })
  }
}
