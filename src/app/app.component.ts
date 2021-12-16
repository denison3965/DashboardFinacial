import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashboardFinacial';

  public currentPage = "dashBoardPage";

  onChangePage(evento: string){
    this.currentPage = evento;
  }
}
