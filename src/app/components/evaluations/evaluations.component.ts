import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {


  constructor() {
  }
  visibleEvaluation
  visibleDetailEvaluation

  ngOnInit() {

  }
  
  openVisibleEvaluation(){
    this.visibleEvaluation = true
    this.visibleDetailEvaluation = false
  }
  openVisibleDetailEvaluation(){
    this.visibleDetailEvaluation = true
    this.visibleEvaluation = false
  }

}
