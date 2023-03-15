import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutespagesComponent } from './routespages.component';

describe('RoutespagesComponent', () => {
  let component: RoutespagesComponent;
  let fixture: ComponentFixture<RoutespagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutespagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutespagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
