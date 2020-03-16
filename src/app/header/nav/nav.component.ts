
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

  ngOnInit(): void {
  }

}
