import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {

  months: any = [
    { key: 'Janeiro', value: '1' },
    { key: 'Fevereiro', value: '2' },
    { key: 'Março', value: '3' },
    { key: 'Abril', value: '4' },
    { key: 'Maio', value: '5' },
    { key: 'Junho', value: '6' },
    { key: 'Julho', value: '7' },
    { key: 'Agosto', value: '8' },
    { key: 'Setembro', value: '9' },
    { key: 'Outubro', value: '10' },
    { key: 'Novembro', value: '11' },
    { key: 'Dezembro', value: '12' },
  ];

  month: any;
  year: any;

  evaluations: any = [];
  evaluationSelected: any = {};
  constructor(private evaluationService: EvaluationService) {
  }

  visibleEvaluation
  visibleDetailEvaluation

  ngOnInit() {
    this.visibleEvaluation = true;
    this.visibleDetailEvaluation = false;
    this.loadEvaluationByUser();
  }

  async loadEvaluationByUser() {
    try {
      this.evaluations = (await this.evaluationService.get())['evaluations'];
    } catch (err) {

    }
  }

  openVisibleEvaluation() {
    this.visibleEvaluation = true
    this.visibleDetailEvaluation = false
  }

  openVisibleDetailEvaluation(evaluation) {
    this.evaluationSelected = evaluation;
    this.visibleDetailEvaluation = true
    this.visibleEvaluation = false
  }

}
