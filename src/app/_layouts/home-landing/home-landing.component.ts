import { Component, OnInit, ElementRef } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

declare var $:any

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  screen:number;

  constructor(public route:Router, private elementRef:ElementRef, private router:Router,private activatedRoute:ActivatedRoute ) {
  }

  ngOnInit() {
    this.getScreenSize();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(()=>this.activatedRoute)
    ).subscribe(event => {
        $.getScript('../../assets/js/home-landing.js');
        $.getScript('../../assets/js/charts.js');
        $.getScript('../../assets/js/jquery.onepage-scroll.min.js');
        $.getScript('../../assets/js/jspa-animation.js');
        $.getScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js'); 
    });
  }

  @HostListener('window:resize',['$event'])
  getScreenSize(event?){
    this.screen = window.innerWidth;
  }

  projects(){
    window.location.href = "http://"+window.location.host+"/";
  }
  ngOndestroy(){
    console.log("Component destroyed")
    this.elementRef.nativeElement.remove()
  }

}
