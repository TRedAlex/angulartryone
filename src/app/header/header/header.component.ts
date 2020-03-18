import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  phone;

  triggerStick() {

    const trigger = document.getElementById('trigger-sticky')

    let obstrigger = new IntersectionObserver(entries => {
      const e = entries[0]

      let stick = document.getElementById('sticky')
      let headernav = document.getElementById('headernav')
      let appnav = document.getElementById('appnav')
      let buttonnav = document.querySelector('.navbar-toggler').getAttribute('aria-expanded')

      if (e.isIntersecting) {
        stick.classList.remove('sticky-moving')
        if(buttonnav == 'false') {
          appnav.style.backgroundColor = ''
          headernav.classList.remove('navbar-light')
          headernav.classList.add('navbar-dark')
        } else {
          headernav.classList.remove('navbar-dark')
          headernav.classList.add('navbar-light')
          appnav.style.backgroundColor = 'white'
        }
      }

      if (!e.isIntersecting) {
        stick.classList.add('sticky-moving')
        appnav.style.backgroundColor = 'white'
        headernav.classList.remove('navbar-dark')
        headernav.classList.add('navbar-light')

      }
    })

    obstrigger.observe(trigger)
  }

  constructor(public contacnts: ContactsService) {
    this.phone = contacnts.phone
   }

  ngOnInit(): void {
    this.triggerStick()
  }

}
