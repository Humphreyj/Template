export const barChartOptions = {
    chart: {
        id: 'defaultChartType' // or use a dynamic value if needed
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
            style: {
                colors: '#ffffff',
                fontSize: ''
            }
        }
    },
    yaxis:{
        labels: {
            style: {
                colors: '#ffffff'
            }
        }
    },
    dataLabels: {
        style: {
            colors: ['#ffffff']
        }
    }
};
export const barSeries = [{
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
}]