import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input()
  chartData: any;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      backgroundColor: '#F6F6EF',
      axisY: {
        title: 'Votes',
        gridColor: '#CFCEC8',
        lineColor: '#CFCEC8',
      },
      axisX: {
        gridColor: '#CFCEC8' ,
        title: 'Id',
        lineColor: '#CFCEC8',
      },
      data: [
        { indexLabelFontColor: '#CFCEC8',
          type: 'line',
          dataPoints: this.chartData,
        },
      ],
    });
    chart.render();
  }

  renderChart() {}
}
