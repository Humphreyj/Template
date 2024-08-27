export function format(input) {
    let text = input
    return {
        title: function () {
            // This function should take a string like `user_name`
            // and transform it to 'User Name'
            text = text.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            console.log('format title: ', text)
            return text
        },
        phone: function () {
            // This function should take a string like `1233331232`
            // and transform it to `123-333-1232`
            var cleaned = ('' + text).replace(/\D/g, '');
            var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                text = match[1] + '-' + match[2] + '-' + match[3];
            }
            console.log('format phone', text)
            return text
        },
        ssn: function () {
            // This function should take a string like `123333123`
            // and transform it to `123-33-1232`
            let cleaned = ('' + text).replace(/\D/g, '');
            let match = cleaned.match(/^(\d{3})(\d{2})(\d{4})$/);
            if(match){
                text = match[1] + '-' + match[2] + '-' + match[3];
            }
            console.log('format ssn', text)
            return text
        },
        date: function () {
            // This function should take a string like `2024-08-27T17:35:58.946Z`
            // and transform it to `08/27/2024 12:36 pm`
            // it should take a prop that determines whether or not
            // to show the time.
            const options = {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
              
            text = new Intl.DateTimeFormat('en-US', options).format(text);
            console.log('format date', text)
            
            return text
        },
    }
}

// export function format() {

// }
