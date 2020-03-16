import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  metadescr = {name: 'description', content: 'Проверка СЕО'}
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Angular?')
    if (this.meta.getTag('name= "description"')) {
      this.meta.updateTag(this.metadescr)
    } else {
      this.meta.addTag(this.metadescr)
    }
  }
}
