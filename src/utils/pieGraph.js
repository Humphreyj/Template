export const pieChartOptions = {
    
    chart: {
        width: 400,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 280
        },
        legend: {
            position: 'right',
            labels: {
                colors: '#ffffff',
                useSeriesColors: false
            },
            
            
        }
        }
    }]  
};
export const pieSeries = {
    name: 'series-1',
    data: [44, 55, 41, 17, 15]
}