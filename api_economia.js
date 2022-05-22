const request = require ('request')

//https://docs.awesomeapi.com.br/

const moedas = "USD-BRL,EUR-BRL,BTC-BRL"

const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    hearders: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'

    }
}
const callback_todas_cotacoes = function (erro, res, body){
    let json = JSON.parse(body)
    console.log(json)
}

const callback_dolar = function(erro,res,body){
    let json = JSON.parse(body)
    cotacao = json.USDBRL ['bid']
    dia = json.USDBRL ['create_date']
    console.log('DOLAR = R$'+cotacao + ' dia: '+dia)
}

const callback_euro = function (erro,res, body){
    let json = JSON.parse(body)
    cotacao = json.EURBRL['bid']
    dia = json.EURBRL ['create_date']
    console.log('EURO = R$ '+cotacao + ' dia '+dia)
}
const callback_bitcoin = function (erro,res, body){
    let json = JSON.parse(body)
    cotacao = json.BTCBRL['bid']
    dia = json.EURBRL ['create_date']
    console.log('BITCOIN = R$ '+cotacao + ' dia '+dia)
}
//request (option, callback)

request(options, callback_bitcoin)