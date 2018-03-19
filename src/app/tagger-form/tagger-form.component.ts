import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tagger-form',
  templateUrl: './tagger-form.component.html',
  styleUrls: ['./tagger-form.component.scss']
})
export class TaggerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTeam() {
    console.log('adding team');
  }

}
