import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninpagesComponent } from './signinpages.component';

describe('SigninpagesComponent', () => {
  let component: SigninpagesComponent;
  let fixture: ComponentFixture<SigninpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
