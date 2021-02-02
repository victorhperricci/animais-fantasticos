export default function initFetchBitcoin() {
  async function getBitcoin(url) {
    try {
      // Se resolve primeiro o que está em entre parenteses,
      // nisso, me retorna a 'Response', após irá retornar o JSON completo
      // com o await e .json() fora dos parenteses

      const responseBitcoin = await (await fetch(url)).json();
      const btcPreco = document.querySelector(".btc-preco");
      const btcBRL = (1000 / responseBitcoin.BRL.sell).toFixed(4);

      btcPreco.innerHTML = btcBRL;
    } catch (error) {
      console.log(error);
      const btcLi = document.querySelector(".btc-li");
      btcLi.innerHTML = "Não foi possível pegar os dados de Bitcoins";
    }
  }

  getBitcoin("https://blockchain.info/ticker");
}
