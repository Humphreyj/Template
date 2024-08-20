import { ref } from 'vue'
import { twMerge } from 'tailwind-merge'

const componentStyles = {
    cardStyles: {
        containerClass:
            'border bg-white rounded-lg border-gray-600 shadow w-full',
        cardTitleText: 'w-fit text-2xl',
        cardContentText: '',
    },
    navLink: {
        textClass: 'text-lg text-gray-400',
    },
}

export const getStyles = (incoming, element) => {
    let keys = Object.keys(incoming)
    let styles = {}
    keys.forEach((key) => {
        styles[`${key}`] = twMerge(
            componentStyles[`${element}`][`${key}`],
            incoming[`${key}`]
        )
    })

    const classes = ref(styles)
    return classes
}
