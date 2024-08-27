export function format(input) {
    let text = input
    return {
        title: function () {
            // This function should take a string like `user_name`
            // and transform it to 'User Name'
            console.log('format title', text)
            return text
        },
        phone: function () {
            // This function should take a string like `1233331232`
            // and transform it to `123-333-1232`
            console.log('format phone', text)
            return text
        },
        ssn: function () {
            // This function should take a string like `123333123`
            // and transform it to `123-33-1232`
            console.log('format ssn', text)
            return text
        },
        date: function () {
            // This function should take a string like `2024-08-27T17:35:58.946Z`
            // and transform it to `08/27/2024 12:36 pm`
            // it should take a prop that determines whether or not
            // to show the time.
            console.log('format ssn', text)
            return text
        },
    }
}

// export function format() {

// }
