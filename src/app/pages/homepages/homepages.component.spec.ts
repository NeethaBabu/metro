import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagesComponent } from './homepages.component';

describe('HomePagesComponent', () => {
  let component: HomePagesComponent;
  let fixture: ComponentFixture<HomePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
