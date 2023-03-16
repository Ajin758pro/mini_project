import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  constructor(private router:Router,private hero:HeroService) {}

  brands= this.hero.giveData()

    gotohere(id:any)
   {
      localStorage.setItem('id',id);
      this.router.navigate(['/single'])
   }
}