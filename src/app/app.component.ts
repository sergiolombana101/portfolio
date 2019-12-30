import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent{

  constructor(
 
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }




  // Scroll To Top When Route Changes
  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 10);
    }
  }
}
