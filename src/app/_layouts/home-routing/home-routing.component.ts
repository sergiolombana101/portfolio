import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.scss']
})
export class HomeRoutingComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }
  ngOndestroy(){
    console.log("Component destroyed")
    this.elementRef.nativeElement.remove()
  }

}
