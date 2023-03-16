import { Injectable } from '@angular/core';
import { casio, data, omega, rolex, tissot } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  giveData()
  {
      return data
  }
  givedata1()
  {
    return casio
  }
  givedata2()
  {
    return tissot
  }
  givedata3()
  {
    return rolex
  }
  givedata4()
  {
    return omega
  }
  
  }

