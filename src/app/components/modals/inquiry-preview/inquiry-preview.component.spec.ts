import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryPreviewComponent } from './inquiry-preview.component';

describe('InquiryPreviewComponent', () => {
  let component: InquiryPreviewComponent;
  let fixture: ComponentFixture<InquiryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
