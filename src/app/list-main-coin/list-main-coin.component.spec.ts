import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainCoinComponent } from './list-main-coin.component';

describe('ListMainCoinComponent', () => {
  let component: ListMainCoinComponent;
  let fixture: ComponentFixture<ListMainCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMainCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMainCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
