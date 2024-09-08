export const componentStyles = {
    cardStyles: {
        containerClass:
            'border bg-white rounded-lg border-gray-300 shadow shadow-gray w-full  dark:bg-cardBackgroundDark dark:border-gray-600 ',
        cardTitleText: 'w-fit text-2xl dark:text-white',
        cardContentText: '',
    },
    buttons: {
        defaultButton:
            'border border-gray-700 rounded-lg bg-primary-500 dark:bg-blue-600 text-white dark:text-gray-100 py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        dangerButton:
            'border border-gray-700 rounded-lg bg-red-500 text-white py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        disabledButton:
            'border border-gray-700 rounded-lg bg-gray-200 text-gray-500 py-1 px-2 shadow drop-shadow opacity-75 disabled cursor-not-allowed',
    },
    sidebar: {
        backdropClass:
            'absolute w-screen h-screen md:hidden z-[5] bg-black opacity-45',
        containerClass:
            'w-max min-w-40 h-screen absolute md:relative bg-sidebarBackground dark:bg-sidebarBackgroundDark py-3 px-2 z-10 border-r',
        titleClass: 'primary-text font-bold font-display text-xl mb-4',
        navContainerClass: 'flex-col-is-js gap-2',
        navLinkClass:
            'text-lg text-gray-800 dark:text-gray-200 font-display min-w-32 p-1 rounded-md hover:bg-gray-300 hover:dark:bg-gray-500 hover:bg-opacity-70',
    },
    textInput: {
        containerClass: 'flex-col-is-js w-full ',
        labelClass:
            'font-bold text-gray-900 mb-1 dark:text-white dark:opacity-95',
        inputClass:
            'border p-1 border-gray-700 dark:border-gray-600 shadow-md rounded-md w-full dark:bg-gray-700 text-lg primary-text dark:shadow-slate-900',
    },
    textBlock: {
        containerClass: 'flex-col-ic-jc w-full',
        labelClass:
            'font-bold primary-text dark:opacity-95 text-center dark:text-white',
        contentClass: 'font-semibold dark:text-white',
    },

    metricCard: {
        cardContainerClass:
            'w-full cursor-pointer drop-shadow-md hover:drop-shadow-lg',
        contentContainerClass:
            'gap-2 py-4 pl-2 pr-1 min-h-32 min-w-40 flex-col-is-js',
        cardTitleClass: 'text-lg font-semibold font-display drop-shadow-sm',
        cardContentClass: 'mb-1 text-3xl font-bold font-content',
    },
}
