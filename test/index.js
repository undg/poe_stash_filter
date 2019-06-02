const {
    split_array,
    path_fetch,
} = require('../helpers.js')
const expect = require('chai').expect


describe('split_array()', ()=>{
    const arr = [
        0  , 1  , 2  , 3  , 4  , 5  , 6  , 7  , 
        8  , 9  , 10 , 11 , 12 , 13 , 14 , 15 ,
        16 , 17 , 18 , 19 , 20 ,
    ]
    const test = split_array(arr, 8)
    it('should have length 3', () => {
        expect(test).to.has.lengthOf(3)
    })
    it('should have length 8', () => {
        expect(test[0]).to.has.lengthOf(8)
    })
    it('should have length 8', () => {
        expect(test[1]).to.has.lengthOf(8)
    })
    it('should have length 8', () => {
        expect(test[2]).to.has.lengthOf(5)
    })
})



describe('path_fetch()', ()=>{
    const fetch = ['sd', 'ersdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'zxczxc', 'qweqwe', 'dfldf', 'pdfp', 'xas', 'vc', 'we']
    const query_id = "idRandomStr"
    const domain = "https://www.pathofexile.com"

    const test = path_fetch(fetch, query_id, domain)
    it('should be ok', () => {
        expect(test).to.be.ok
    })
    it('should have 2 arrays', () => {
        expect(test).to.has.lengthOf(2)
    })
})



describe('test', ()=>{
    const test = true
    it('should have length 3', () => {
        expect(test).to.be.ok
    })
})
