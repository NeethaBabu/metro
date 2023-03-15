import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppagesComponent } from './signuppages.component';

describe('SignuppagesComponent', () => {
  let component: SignuppagesComponent;
  let fixture: ComponentFixture<SignuppagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuppagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuppagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
