const axios = require('axios')

const cfg = require('./config.js')

const domain = 'https://www.pathofexile.com'

function path_fetch(arr, query) {
    let path = '/api/trade/fetch/'
    for(let i = 0; i < 7; i++) {
        path += arr[i] + ','
    }
    path += `?query=${query}`
    return domain + path
}

const path_search = domain + '/api/trade/search/Standard'
const path_www = id => domain + '/trade/exchange/Standard/' + id

const body = {
    query:{
        status: {
            option: "any",
        },
        filters: {
            trade_filters: cfg.only_me,
            type_filters: cfg.ring,
        }
    },
}


const search = {
    url: path_search + `?source=${JSON.stringify(body)}`,
    method: 'get',
}


axios(search)
    .then( res => {
        return {
            query_id : res.data.id,
            fetch    : res.data.result,
            total    : res.data.total
        }
    })
    .then( res => {
        const api = path_fetch(res.fetch, res.query_id)
        axios(api)
            .then(res_items => {
                const result = res_items.data.result
                result.map( (el, idx) => {
                    if(!el) { return }
                    console.log('--------------------------------')
                    const all = {
                        item: el.item.name + ' ' + el.item.typeLine,
                        implicit_mods: el.item.implicitMods,
                        explicit_mods: el.item.explicitMods,
                        stash: el.listing.stash,
                        account: el.listing.account.name,
                    }
                    console.log(all)
                })
                const url = path_www(res.query_id)
                return {url: url, total: res.total}
            })
            .then(res => {
                console.log('++++++++++++++++++')
                console.log('total: ', res.total)
                console.log(res.url)
                console.log('++++++++++++++++++')
            })
            .catch(err=>console.log(err) )
    })
    .catch(err=>console.log(err) )

