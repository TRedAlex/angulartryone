import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  phone;

  scrollhead() {

  const stick = document.getElementById('sticky')


  const options = {
    threshold: 1,
  }

  const obsrv = new IntersectionObserver((entr, obs) => {
    entr[0].target.classList.toggle('sticky-moving', entr[0].intersectionRatio < 1)
    console.log(entr[0],obs)
  }, options)

  obsrv.observe(stick)

  }
  constructor(public contacnts: ContactsService) {
    this.phone = contacnts.phone
   }

  ngOnInit(): void {
    this.scrollhead()
  }

}
