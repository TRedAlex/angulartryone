import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicesblock',
  templateUrl: './servicesblock.component.html',
  styleUrls: ['./servicesblock.component.scss']
})
export class ServicesblockComponent implements OnInit {

  items = [
    {header: 'Текст для Гриффиндора', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate cum repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Мордора', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupidi repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Мордор наше все', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate cum repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Больше Мордора', body: 'Lorem ipsum dolor sit Perferendis cupiditate cum repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Хедера', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate cum repudiandae bearepudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Хедера', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Хедера', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate cum repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Хедера', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate cum repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
    {header: 'Текст для Хедера', body: 'Loremtetur adipisicing elit. Perferendis cupiditate cum repudiandae beatae eligendi quae, totam dolorem, esse magnam, laudantium fuga unde sed amet. Sed doloribus error alias nam maxime fuga, accusamus sapiente totam similique, maiores dolorum. Harum repellat veniam debitis, fuga reiciendis veritatis excepturi nisi, odit impedit soluta eligendi!'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
