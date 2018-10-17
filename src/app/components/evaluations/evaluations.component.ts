import { Component, OnInit } from '@angular/core';
// import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {
  settings = {
    columns: {
      date: {
        title: 'Data da avaliação'
      },
      teacher: {
        title: 'Professor'
      }
    },
    actions: false
  };

  data = [
    {
      date:'19/08/2018',
      teacher: 'Paulão dacadimia'
    }
  ];
  constructor() {
  }

  ngOnInit(){
  }

  onRowHover(event){
    //Ajuda aqui!
  }
}
