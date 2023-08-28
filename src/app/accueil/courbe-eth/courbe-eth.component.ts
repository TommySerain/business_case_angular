import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiEthService } from 'src/app/services/api-eth.service';


@Component({
  selector: 'app-courbe-eth',
  templateUrl: './courbe-eth.component.html',
  styleUrls: ['./courbe-eth.component.css']
})
export class CourbeEthComponent implements OnInit {

  constructor(private apiEth: ApiEthService) { }

  ngOnInit() {
    this.loadDataAndDrawChart();
  }

  loadDataAndDrawChart() {
    this.apiEth.loadData().subscribe(
      (data) => {
        const labels: any[] = [];
        const prices: any[] = [];
        data.Data.Data.forEach(function (item: any) {
          const date = new Date(item.time * 1000);
          const formattedDate = date.toLocaleString('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric' });
          labels.push(formattedDate);
          prices.push(item.close);
        });

        const chartElement = document.getElementById("myChart") as HTMLCanvasElement;
        if (chartElement) {
          const ctx = chartElement.getContext("2d");
          if (ctx) {
            new Chart(ctx, {
              type: "line",
              data: {
                labels: labels,
                datasets: [
                  {
                    data: prices,
                    label: "ETH",
                    borderColor: "#02D6F2",
                    backgroundColor: "#02D6F2",
                    pointBackgroundColor: "#0064F2",
                    pointRadius: 5,
                    pointBorderColor : "#02D6F2",
                    pointBorderWidth: 2,
                    fill: false,
                    borderCapStyle: "round",
                    cubicInterpolationMode: "monotone" //default pour reprendre la courbe normale
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks: {
                      color: "white",
                    },
                    beginAtZero: false,
                    title: {
                      display: true,
                      text: "Prix en EUR",
                      color: "white",
                      font: {
                        size: 18,
                        family: "roboto"
                      }
                    }
                  },
                  x: {
                    ticks: {
                      autoSkip: true,
                      color: "white",
                      maxTicksLimit: 20
                    }
                  }
                },
                plugins: {
                  title: {
                    display: true,
                    text: "Evolution du cours de l'ETH en EUR sur les 7 derniers jours",
                    color: "white",
                    font: {
                      size: 18,
                      family: "roboto"
                    }
                  },
                  legend: {
                    labels: {
                      color: "white",
                      font: {
                        family: "roboto"
                      }
                    }
                  }
                }
              }
            });
          } else {
            console.error("Failed to get 2D context for canvas element.");
          }
        } else {
          console.error("Element with ID 'myChart' not found.");
        }
      }
    );
  }
}