function split_array(arr, bulk_size) {
    const number_of_full_arrays = Math.floor(arr.length / bulk_size)
    const arrays = new Array(number_of_full_arrays)

    // store bulks of eight items
    for(let i = 0; i < number_of_full_arrays; i++) {
        const eight = arr.splice(0, bulk_size)
        arrays[i] = eight
    }
    // last bulk can have less than 8 items, but you dont want to loose it
    arrays.push(arr)
    return arrays
}
module.exports.split_array = split_array



function path_fetch(arr, query, domain) {
    let path = '/api/trade/fetch/'
    let urls = []
    const size = 9

    split_array(arr, size).map( arr => {
        for(let i = 0; i < arr.length; i++) {
            path += arr[i] + ','
        }
        path += `?query=${query}`
        urls.push(domain + path)
    })

    return urls
}
module.exports.path_fetch = path_fetch
