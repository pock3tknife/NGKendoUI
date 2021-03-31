import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'NGKendoUI';

  constructor(private router: Router) {}

  ngOnInit() {}
}
