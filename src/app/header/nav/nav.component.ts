
import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  phone;

  constructor(public contacnts: ContactsService) {
    this.phone = contacnts.phone
   }

   triggerbtn() {
    let stick = document.getElementById('sticky')
    let appnav = document.getElementById('appnav')
    let headernav = document.getElementById('headernav')
    let buttonnav = document.querySelector('.navbar-toggler').getAttribute('aria-expanded')

    if(buttonnav == 'false') {
      appnav.style.backgroundColor = 'white'
      headernav.classList.remove('navbar-dark')
      headernav.classList.add('navbar-light')

    }
    if (buttonnav == 'true') {
      if(!stick.classList.contains('sticky-moving')) {
        appnav.style.backgroundColor = ''
        headernav.classList.remove('navbar-light')
        headernav.classList.add('navbar-dark')
      }
    }
   }

  ngOnInit(): void {

  }

}
