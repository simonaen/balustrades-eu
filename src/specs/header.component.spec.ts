import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../app/components/header/header.component';
import {SharedModule} from '../app/components/shared/shared.module';
import {NavigationBarModule} from '../app/components/navigation-bar/navigation-bar.module';
import {CommonModule} from '@angular/common';
import {ContactBarComponent} from '../app/components/contact-bar/contact-bar.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NavigationBarModule, CommonModule],
      declarations: [ HeaderComponent, ContactBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
