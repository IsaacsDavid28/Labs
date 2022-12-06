let main = require('./main')

describe('a word starting with a vowel will have way added to the end', () => {
test('apple returns appleway', () => {
    let test = main.translate('apple')
    expect(test).toBe('appleway')
})
test('else returns elseway', () => {
    let test = main.translate('else')
    expect(test).toBe('elseway')
})
test('ipod returns ipodway', () => {
    let test = main.translate('ipod')
    expect(test).toBe('ipodway')
})
test('on returns onway', () => {
    let test = main.translate('on')
    expect(test).toBe('onway')
})
test('under returns underway', () => {
    let test = main.translate('under')
    expect(test).toBe('underway')
})

})

describe('a word that starts with a consenant will have every character before the vowel removed and added to the end along with ay', () => {

test('partner returns artnerpay', () => {
    let test = main.translate('partner')
    expect(test).toBe('artnerpay')
})
test('fiddle returns iddlefay', () => {
    let test = main.translate('fiddle')
    expect(test).toBe('iddlefay')
})
test('greg returns eggray', () => {
    let test = main.translate('greg')
    expect(test).toBe('eggray')
})
test('string returns ingstray', () => {
    let test = main.translate('string')
    expect(test).toBe('ingstray')
})
test('PaRtNeR returns artnerpay', () => {
    let test = main.translate('PaRtNeR')
    expect(test).toBe('artnerpay')
})

})