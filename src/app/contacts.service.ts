import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  phone = {tel: '+73545764532', phone: '+7 (354) 576-45-32'}
  constructor() { }
}
