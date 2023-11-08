export default function fetchBitCoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const spanBTC = document.querySelector(target);
      spanBTC.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
