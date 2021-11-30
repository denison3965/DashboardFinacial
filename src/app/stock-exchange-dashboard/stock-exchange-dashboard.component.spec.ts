import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeDashboardComponent } from './stock-exchange-dashboard.component';

describe('StockExchangeDashboardComponent', () => {
  let component: StockExchangeDashboardComponent;
  let fixture: ComponentFixture<StockExchangeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockExchangeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
