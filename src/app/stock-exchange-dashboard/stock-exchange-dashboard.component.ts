import { IBOVESPAServiceService } from './../../services/ibovespaservice/ibovespaservice.service';
import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-stock-exchange-dashboard',
  templateUrl: './stock-exchange-dashboard.component.html',
  styleUrls: ['./stock-exchange-dashboard.component.scss']
})
export class StockExchangeDashboardComponent implements OnInit {
  @ViewChild('stockdashboard', {static: true}) elemento!: ElementRef;

  constructor(
    private ibovespaService: IBOVESPAServiceService
  ) { }

  ngOnInit(): void {

    this.ibovespaService.getDataStockExchange().subscribe(
      res => {

      },
      () => {

      });

    this.elemento.nativeElement.height = 200;
    new Chart(this.elemento.nativeElement, {
      type : 'line',
      data:{
        labels: ['1', '2', '3'],
        datasets: [
          {
            data: [23,34,32]
          }
        ]
      }
    });
  }
}
