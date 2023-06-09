import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPagesComponent } from './signuppages.component';

describe('SignupPagesComponent', () => {
  let component: SignupPagesComponent;
  let fixture: ComponentFixture<SignupPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
