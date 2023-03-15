import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepagesComponent } from './timepages.component';

describe('TimepagesComponent', () => {
  let component: TimepagesComponent;
  let fixture: ComponentFixture<TimepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
