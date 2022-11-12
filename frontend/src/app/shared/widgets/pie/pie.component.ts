import { Component, OnInit, Input } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import *as  Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions:{};
  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Random Data'
      },
      subtitle: {
          text: 'Source: ' +
              '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
              'target="_blank">Counterpoint Research</a>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: this.data
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  
  }

}
