import { FinalciaApiService } from './../services/finalcia-api/finalcia-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DashboardFinacial';

  public currentPage = "dashBoardPage";

  constructor(
    private finalciaApiService: FinalciaApiService
  )
  {

  }

  ngOnInit(): void {
  }

  onChangePage(evento: string){
    this.currentPage = evento;
  }
}
