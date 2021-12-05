import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarSingleActiveComponent } from './dashboar-single-active.component';

describe('DashboarSingleActiveComponent', () => {
  let component: DashboarSingleActiveComponent;
  let fixture: ComponentFixture<DashboarSingleActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarSingleActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarSingleActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
