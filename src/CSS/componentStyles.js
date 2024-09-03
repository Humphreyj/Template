export const componentStyles = {
    cardStyles: {
        containerClass:
            'border bg-white rounded-lg border-gray-300 shadow shadow-gray w-full  dark:bg-cardBackgroundDark',
        cardTitleText: 'w-fit text-2xl dark:text-white',
        cardContentText: '',
    },
    navLink: {
        textClass:
            'text-lg text-gray-700 dark:text-gray-200 font-content min-w-32 p-1 rounded-md hover:bg-gray-200 hover:dark:bg-gray-500 hover:bg-opacity-70',
    },
    buttons: {
        defaultButton:
            'border border-gray-700 rounded-lg bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-100 py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        dangerButton:
            'border border-gray-700 rounded-lg bg-red-500 text-white py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        disabledButton:
            'border border-gray-700 rounded-lg bg-gray-200 text-gray-500 py-1 px-2 shadow drop-shadow opacity-75 disabled cursor-not-allowed',
    },
    sidebar: {
        backdropClass:
            'absolute w-screen h-screen md:hidden z-[5] bg-black opacity-45',
        containerClass:
            'w-max min-w-40 h-screen absolute md:relative bg-white dark:bg-sidebarBackgroundDark py-3 px-2 z-10 border-r',
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
}
