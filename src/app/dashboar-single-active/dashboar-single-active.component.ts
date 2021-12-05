import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboar-single-active',
  templateUrl: './dashboar-single-active.component.html',
  styleUrls: ['./dashboar-single-active.component.scss']
})
export class DashboarSingleActiveComponent implements OnInit {
  @ViewChild('coinBoard', {static: true}) elemento!: ElementRef;
  public bitcoin = 48502.00;

  constructor() { }

  ngOnInit(): void {
    this.elemento.nativeElement.height = 70;
    new Chart(this.elemento.nativeElement, {
      type : 'line',

      data:{
        labels: ['', '', '', '', ''],
        datasets: [
          {
            label: 'Last datas',
            tension: 0.5,
            borderColor: 'black',
            borderWidth: 4,
            spanGaps: false,
            pointBorderWidth: 1,
            pointHoverBorderWidth: 12,
            data: [12,10,14, 20, 8],
          }
        ]
      },
      options: {
        scales: {
          yAzes:{
            display: false,
            grid: {
              display: false,
              lineWidth: 0,
              drawBorder: false
            }
          },
          xAxes: {
            display: false,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },

      }
    });
  }

}
