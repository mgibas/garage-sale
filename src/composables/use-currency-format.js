export default function useCurrencyFormat () {
  const currency = (value, curr = 'PLN') => {
    return Intl.NumberFormat('pl-PL', { style: 'currency', currency: curr })
      .format(value ? value / 100 : 0)
  }
  return { currency }
}
