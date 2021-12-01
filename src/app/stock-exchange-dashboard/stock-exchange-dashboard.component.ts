import { IBOVESPAServiceService } from './../../services/ibovespaservice/ibovespaservice.service';
import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import Chart from 'chart.js/auto';
import { IibovespaDatas } from 'src/services/ibovespaservice/DTO-IBOVESPA-datas';

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
      (res: Array<IibovespaDatas>)  => {

        var datasToDashboard: Array<any> = [];
        var lablesToDashboard: Array<any> = [];

        res.forEach(element => {
          datasToDashboard.push(element.fechamento);
          lablesToDashboard.push(element.data);
        });

        this.elemento.nativeElement.height = 80;
        new Chart(this.elemento.nativeElement, {
          type : 'line',
          data:{
            labels: lablesToDashboard,
            datasets: [
              {
                label: 'Last datas',
                data: datasToDashboard,
              }
            ]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },

          }
        });
      },
      () => {

      });


  }
}
