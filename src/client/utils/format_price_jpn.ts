export const format = (price: number) => {
  return '\u00A5' + String(price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}