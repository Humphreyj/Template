import { useDark } from '@vueuse/core'
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
        if (value) {
            ApexCharts.exec(
                'barChart',
                'updateOptions',
                {
                    xaxis: {
                        categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        ],
                        labels: {
                            style: {
                                colors: '#ffffff',
                                fontSize: '',
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#ffffff',
                            },
                        },
                    },
                    dataLabels: {
                        style: {
                            colors: ['#ffffff'],
                        },
                    },
                },
                false,
                true
            )
        } else {
            ApexCharts.exec(
                'barChart',
                'updateOptions',
                {
                    xaxis: {
                        categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        ],
                        labels: {
                            style: {
                                colors: '#000000',
                                fontSize: '',
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#000000',
                            },
                        },
                    },
                    dataLabels: {
                        style: {
                            colors: ['#000000'],
                        },
                    },
                },
                false,
                true
            )
        }
    }
)

export const barChartOptions = {
    chart: {
        id: 'barChart', // or use a dynamic value if needed
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
            style: {
                colors: textColor,
                fontSize: '',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: textColor,
            },
        },
    },
    dataLabels: {
        style: {
            colors: [textColor],
        },
    },
}
export const barSeries = [
    {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
]
