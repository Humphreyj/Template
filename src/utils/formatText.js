export function format(input) {
    let text = input
    return {
        title: function () {
            console.log('format title', text)
            return text
        },
    }
}

// export function format() {

// }
