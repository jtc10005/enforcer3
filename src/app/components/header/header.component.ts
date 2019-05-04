import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get routesForMenu() {
   return routes.filter(x => x.ShowInMenu);
  }

  constructor() {}

  ngOnInit() {}
}
