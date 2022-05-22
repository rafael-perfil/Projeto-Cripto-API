const request = require ('request')
//https://www.mercadobitcoin.net/api/BTC/ticker/

const options = {
        url: `https://www.mercadobitcoin.net/api/BTC/ticker/`,
        method: 'GET',
        headsers:{
        'Accept': 'application/json',
        'Accept-Charset' : 'utf-8'

        }
}

const callback_todas_cotacoes = function (erro, res, body){
        let json = JSON.parse(body)
        console.log(json)
}
const callback_bitcoin = function (erro, res, body){
        let json = JSON.parse(body)
        cotacao = json.ticker ['sell']
        dia = json.ticker ['date']
        console.log('Bitcoin = R$ '+cotacao + ' data '+dia)
}

request(options,callback_bitcoin)
