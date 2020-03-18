import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesblockComponent } from './servicesblock.component';

describe('ServicesblockComponent', () => {
  let component: ServicesblockComponent;
  let fixture: ComponentFixture<ServicesblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
