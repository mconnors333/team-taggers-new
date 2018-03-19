import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'history' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  openCreatTeamPage(value: string) {
    console.log(`opening ${value}`);
    this.router.navigate(['/tagger-form']);
  }
}
