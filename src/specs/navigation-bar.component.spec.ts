import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from '../app/components/navigation-bar/navigation-bar.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../app/components/shared/shared.module';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule],
      declarations: [ NavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
