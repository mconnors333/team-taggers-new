import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  openCreatTeamPage(value: string) {
    console.log(`opening ${value}`);
    this.router.navigate(['/tagger-form']);
  }
}
