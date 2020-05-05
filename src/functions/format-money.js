export default function formatMoney(money) {
  return `R$ ${money.toFixed(2).replace(".", ",")}`
}
