import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentpagesComponent } from './paymentpages.component';

describe('PaymentpagesComponent', () => {
  let component: PaymentpagesComponent;
  let fixture: ComponentFixture<PaymentpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
