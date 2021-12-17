import { FinalciaApiService } from './../../services/finalcia-api/finalcia-api.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-coin-board',
  templateUrl: './coin-board.component.html',
  styleUrls: ['./coin-board.component.scss']
})
export class CoinBoardComponent implements OnInit {
  @ViewChild('coin', {static: true}) elemento!: ElementRef;

  @Input() typeCurrencie : string = "";

  public nameCurrencie =  "";
  public variation = "0%";
  public price = 0;

  constructor(
    private finalciaApiService: FinalciaApiService
  ) { }

  ngOnInit(): void {
    this.finalciaApiService.getDayliQuoteCurrencie(this.typeCurrencie).subscribe(
      result => {
        this.nameCurrencie = result[0].name;

        this.variation = result[result.length -1].varBid + "%";
        this.price = parseFloat(result[result.length - 1].high);

        console.log(this.price);

        let dataToBuild = result.map(element => {
          return element.high;
        });

        this.buildChart(dataToBuild)
      },
      (e: any) => {
      }
    );
  }


  buildChart(data: Array<any>) {
    new Chart(this.elemento.nativeElement,  {
      type: 'line',
      data: {
      labels: ["-9","-8","-7","-6","-5","-4","-3","-2","-1","Ontem"],
      datasets: [
        {
            label: "",
            data: [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]],
            borderWidth: 3,



        },
      ],
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },

      }

  });

  }
}
