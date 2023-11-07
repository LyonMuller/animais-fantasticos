export default function initFetchAnimais() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((bitcoin) => {
      const spanBTC = document.querySelector(".btc-preco");
      spanBTC.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
