import { FinalciaApiService } from './../../services/finalcia-api/finalcia-api.service';
import { Component, OnInit } from '@angular/core';
import { DTO_dayli_quote_currencie } from 'src/services/finalcia-api/DTO-dayli-quote-currencie';

@Component({
  selector: 'app-list-main-coin',
  templateUrl: './list-main-coin.component.html',
  styleUrls: ['./list-main-coin.component.scss']
})
export class ListMainCoinComponent implements OnInit {

  public currencies: any = [];
  constructor(private finalciaApiService: FinalciaApiService) { }

  ngOnInit(): void {
    const currenciesList = 'XRP,DOGE,GBP,CNY,LTC';

    this.finalciaApiService.getCurrentQuote(currenciesList).subscribe(
      result => {
        this.currencies = Object.values(result);
      }, () => {

      }
    )
  }

  isPositive(variation : string) {
    if (variation.indexOf('-') != -1)
    {
      return false;
    }
    return true;
  }

  isNegative(variation : string) {
    if (variation.indexOf('-') != -1)
    {
      return true;
    }
    return false;
  }

}
