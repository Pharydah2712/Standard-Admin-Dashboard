
    const chart11 = () => {
    const chartElevenoptions = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        colors: ['#008FFB'],
    };

    const chartSelector = document.querySelectorAll("#chartEleven");

    if (chartSelector.length) {
        const chartEleven = new ApexCharts(
            document.querySelector("#chartEleven"),
            chartElevenOptions
        );
        chartEleven.render();
    }
};
document.addEventListener("DOMContentLoaded", chart11);

