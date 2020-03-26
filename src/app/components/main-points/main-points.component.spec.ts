import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPointsComponent } from './main-points.component';

describe('MainPointsComponent', () => {
  let component: MainPointsComponent;
  let fixture: ComponentFixture<MainPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
