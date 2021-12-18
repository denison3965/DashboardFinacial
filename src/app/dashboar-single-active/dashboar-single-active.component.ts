import { Observable } from 'rxjs';
import { DTO_dayli_quote_currencie } from './../../services/finalcia-api/DTO-dayli-quote-currencie';
import { FinalciaApiService } from './../../services/finalcia-api/finalcia-api.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboar-single-active',
  templateUrl: './dashboar-single-active.component.html',
  styleUrls: ['./dashboar-single-active.component.scss']
})
export class DashboarSingleActiveComponent implements OnInit {

  @Input() pathImageCoin!: string;
  @Input() size!: string;
  @Input() coin!: string;

  public test = '100px';

  @ViewChild('coinBoard', {static: true}) elemento!: ElementRef;
  public price = 0;
  public nameCoin = "";

  constructor(private finalciaApiService: FinalciaApiService) {
  }

  ngOnInit(): void {


    this.finalciaApiService.getDayli5daysQuoteCurrencie(this.coin).subscribe(
      (result: DTO_dayli_quote_currencie[]) => {
        this.price = parseFloat(result[0].high);
        this.nameCoin = result[0].name;
        let data = result.map(element => {
          return element.high;
        })

        this.buildBoard(data);
      },
      () => {

      })
    }
    buildBoard(data: any) {
      this.elemento.nativeElement.height = 70;
      let grafico = new Chart(this.elemento.nativeElement, {
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
              data: data,
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
