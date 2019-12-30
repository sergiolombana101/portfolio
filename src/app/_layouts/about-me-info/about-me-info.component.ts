import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me-info',
  templateUrl: './about-me-info.component.html',
  styleUrls: ['./about-me-info.component.scss']
})
export class AboutMeInfoComponent implements OnInit {
  screen:number;


  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales:{
      yAxes:[{
        ticks:{
          maxTicksLimit:9,
          beginAtZero:true,
          callback:function(value, index, values){
            let yLabels = {
              0: 'Prodigy',
              1: 'Awesome',
              2: 'Hot Muffins',
              3: 'UMMM..OK',
              4: 'Meh...',
              5: 'Don\'t ask'
            }
            return yLabels[index]
          }
        }
      }]
    }
  };
  public barChartLabels = ['CSS', 'C#', 'Python', 'ASP.NET', 'ANGULAR', 'JAVA', 'PHP'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [80, 100, 80, 80, 95, 75, 80], label: '', fillColor:"rgba(0,0,255,0.5)", backgroundColor:"rgba(0,0,255,0.3)"}
  ]

  public pieChartOptions = {

  }
  public pieChartLabels = ['Leadership', 'TeamWork', 'Time Management', 'Public Speaking', 'Adaptibility', 'Communication'];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData = [
    {data:[20,15,20,15,15,15]}
  ]

  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize',['$event'])
  getScreenSize(event?){
    this.screen = window.innerWidth;
  }

}
