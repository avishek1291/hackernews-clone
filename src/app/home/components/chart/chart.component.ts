import { Component, Input, OnChanges, OnInit, ViewChild, ElementRef, SimpleChanges} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input()
  chartData: any;
  @ViewChild('#chartContainer', { static: false}) chartContainer: ElementRef;

  chartOptions =  {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'ID',
          fontStyle: 'bold',
          fontSize: '16',
          fontColor: 'black',
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Votes',
          fontStyle: 'bold',
          fontSize: '16',
          fontColor: 'black'
        }
      }],
    }
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
   if (this.chartData && changes.chartData){
    this.renderChartjs();
   }

  }


  renderChart(){
  }

  renderChartjs(){
    const chartJs =  new Chart('chartContainer', {
      type: 'line',
      data: {
          labels: this.chartData.map(el => el.x),
          datasets: [{
              data: this.chartData,
              borderColor: '#245b89',
              backgroundColor: 'rgba(255,255,255, 0)',
              borderWidth: 1
          }]
      },
      options: this.chartOptions
  });
  }
}
