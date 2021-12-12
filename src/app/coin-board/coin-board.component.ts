import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-coin-board',
  templateUrl: './coin-board.component.html',
  styleUrls: ['./coin-board.component.scss']
})
export class CoinBoardComponent implements OnInit {
  @ViewChild('coin', {static: true}) elemento!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    new Chart(this.elemento.nativeElement,  {
      type: 'line',
      data: {
      labels: ["-9","-8","-7","-6","-5","-4","-3","-2","-1","Ontem","+1","+2","+3"],
      datasets: [
        {
            label: "",
            data: ["9","8","7","6","5","4","3","2","1","6","1","2","3"],
            borderWidth: 3,
            tension: 0.5,


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
