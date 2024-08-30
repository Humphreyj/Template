export function format(input) {
    let text = input
    return {
        title: function () {
            // This function should take a string like `user_name`
            // and transform it to 'User Name'
            text = text
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            return text
        },
        phone: function () {
            let cleaned = ('' + text).replace(/\D/g, '')

            if (cleaned.length > 3) {
                text = cleaned.slice(0, 3) + '-' + cleaned.slice(3, 6)
                if (cleaned.length > 6) {
                    text += '-' + cleaned.slice(6, 10)
                }
            } else {
                text = cleaned
            }

            return text
        },
        ssn: function () {
            // This function should take a string like `123333123`
            // and transform it to `123-33-1232`
            let cleaned = ('' + text).replace(/\D/g, '')
            let match = cleaned.match(/^(\d{3})(\d{2})(\d{4})$/)
            if (match) {
                text = match[1] + '-' + match[2] + '-' + match[3]
            }

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
                hour12: true,
            }

            text = new Intl.DateTimeFormat('en-US', options).format(text)

            return text
        },
    }
}

export const handleFormat = (input, type) => {
    const formatText = format(input)
    let result
    switch (type) {
        case 'phone':
            result = formatText.phone()
            break
        case 'date':
            result = formatText.date()
            break
        case 'ssn':
            result = formatText.ssn()
            break
        default:
            return input
    }
    return result
}
