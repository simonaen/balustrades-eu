import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPreviewComponent } from './about-preview.component';

describe('AboutPreviewComponent', () => {
  let component: AboutPreviewComponent;
  let fixture: ComponentFixture<AboutPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
