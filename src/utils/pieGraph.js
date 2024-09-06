import { useDark,} from '@vueuse/core'
import { watch, ref } from 'vue'
const isDark = ref(useDark())
const textColor = isDark.value ? '#ffffff' : '#000000'

/*
    Watches the darkMode value to re-render the graphs since they
    take their rules on render
    -> updateOptions merges the options object with the original
        and oly overwrites the changes
*/
watch(
    () => isDark.value,
    (value) => {
        if(value){
            ApexCharts.exec('pieChart', 'updateOptions', {
                title: {
                    text: 'Pie Chart',
                    style: {
                        color: "#ffffff"
                    }
                },
                legend: {
                    position: 'right',
                    labels: {
                        colors: "#ffffff",
                        useSeriesColors: false
                    }, 
                },
            }, false, true)

        } else {
            ApexCharts.exec('pieChart', 'updateOptions', {
                title: {
                    text: 'Pie Chart',
                    style: {
                        color: "#000000"
                    }
                },
                legend: {
                    position: 'right',
                    labels: {
                        colors: "#000000",
                        useSeriesColors: false
                    }, 
                },
            }, false, true)
        }
    }
  )
export const pieChartOptions = {
    
    chart: {
        width: 400,
        type: 'pie',
        id: 'pieChart'
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    
    dataLabels: {
        offsetY: '10px',
        offsetX: 400,
        textAnchor: 'middle',
    },
    title: {
        text: 'Pie Chart',
        style: {
            color: textColor
        }
    },
    legend: {
        position: 'right',
        labels: {
            colors: textColor,
            useSeriesColors: false
        }, 
    },
     
};
export const pieSeries = {
    name: 'series-1',
    data: [44, 55, 41, 17, 15]
}