

  const chart04 = () => {
    const chartFourOptions = {
          series: [{
            data: [{
              x: 'M',
              y: 168
            },
             {
              x: 'T',
              y: 385
            },
             {
              x: 'W',
              y: 201
            },
            {
              x:'Th',
              y:298
            },
           {x:'F',
            y:187
           },
           {
            x:'S',
            y:195
           },
           {
            x:'Su',
            y:291
           }]
          }],
      color: [ "#3C50E1"],
      chart: {
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
  
      responsive: [
        {
          breakpoint: 1500,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 0,
                columnWidth: "15%",
              },
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          columnWidth: "25%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      dataLabels: {
        enabled: false,
      },
  
      xaxis: {
        categories: ["M", "T", "W", "Th", "F", "S", "Su"],
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",
  
        markers: {
          radius: 99,
        },
      },
      fill: {
        opacity: 2,
      },
    };
  
    const chartSelector = document.querySelectorAll("#chartFour");
  
    if (chartSelector.length) {
      const chartFour = new ApexCharts(
        document.querySelector("#chartFour"),
        chartFourOptions
      );
      chartFour.render();
    }
  };
  
  document.addEventListener("DOMContentLoaded", chart04);
  