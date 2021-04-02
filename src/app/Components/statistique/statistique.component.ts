
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ForfaitService } from 'src/app/service/forfait.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements AfterViewInit  {
 @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  title = 'Charts.js in Angular 9';
  barChart: any;
  doughnutChart: any;
  lineChart: any;

 result: any = '' ;
  response: any = '';

  constructor(private ForfaitServices: ForfaitService) { }
  ngAfterViewInit() {
    this.lineChartMethod();
    this.Liste();
  }

    Liste() {
    this.ForfaitServices.statistic().subscribe(
      (res) => {
         const temps = res as any;
         this.result = temps.data;
         console.log(this.result);
      }
    );
  }


  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.result,
            spanGaps: false,
          }
        ]
      }
    });
  }

}

