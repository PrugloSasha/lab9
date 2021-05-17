import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WotwComponent } from './wotw.component';

describe('WotwComponent', () => {
  let component: WotwComponent;
  let fixture: ComponentFixture<WotwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WotwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WotwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
