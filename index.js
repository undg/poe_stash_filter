const axios = require('axios')
const {
    // split_array,
    path_fetch,
} = require('./helpers.js')

const cfg = require('./config.js')

const domain = 'https://www.pathofexile.com'
const path_search = domain + '/api/trade/search/Standard'
const path_www = id => domain + '/trade/search/Standard/' + id




const body = {
    query:{
        status: { option: "any", },
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
        show_resoults(res)
    })
    .catch(err=>console.log(err) )



function show_resoults(res) {
    const apis = path_fetch(res.fetch, res.query_id, domain)
    apis.map( api => {
        axios(api)
            .then(res_items => {
                const result = res_items.data.result
                result.map( (el, idx) => {
                    if(!el) { return }
                    console.log('--------------------------------')
                    const all = {
                        item: el.item.name + ' ' + el.item.typeLine,
                        // implicit_mods: el.item.implicitMods,
                        // explicit_mods: el.item.explicitMods,
                        // stash: el.listing.stash,
                        // account: el.listing.account.name,
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
}
