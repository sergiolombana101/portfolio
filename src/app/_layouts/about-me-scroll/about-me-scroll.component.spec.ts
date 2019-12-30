import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeScrollComponent } from './about-me-scroll.component';

describe('AboutMeScrollComponent', () => {
  let component: AboutMeScrollComponent;
  let fixture: ComponentFixture<AboutMeScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
