import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinBoardComponent } from './coin-board.component';

describe('CoinBoardComponent', () => {
  let component: CoinBoardComponent;
  let fixture: ComponentFixture<CoinBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
