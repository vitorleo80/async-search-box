
const Suggestion = ({ item }) => {
    switch (item.placeType) {
        case 'A':
            return `Airport: ${item.name} (${item.iata}) ${item.city}, ${item.country}`
        case 'C':
            return `City: ${item.name}, ${item.region}, ${item.country}`
        case 'D':
            return `City: ${item.name}, ${item.city}, ${item.country}`
        case 'T':
            return `City: ${item.name}, ${item.city}, ${item.region}, ${item.country}`

        default:
            return item.name
    }


}

export default Suggestion