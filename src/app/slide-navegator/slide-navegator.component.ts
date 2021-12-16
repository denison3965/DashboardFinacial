import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slide-navegator',
  templateUrl: './slide-navegator.component.html',
  styleUrls: ['./slide-navegator.component.scss']
})
export class SlideNavegatorComponent implements OnInit {

  @Output() changePage = new EventEmitter();

  public currentPage: string = "dashBoardPage";

  constructor() { }

  ngOnInit(): void {
  }

  goToDashBoard() {
    this.changePage.emit("dashBoardPage");
    this.currentPage = "dashBoardPage"

  }

  goToCurrecies() {
    this.changePage.emit("curreciesPage");
    this.currentPage = "curreciesPage"
  }

}
