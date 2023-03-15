import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpagesComponent } from './contactpages.component';

describe('ContactpagesComponent', () => {
  let component: ContactpagesComponent;
  let fixture: ComponentFixture<ContactpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
