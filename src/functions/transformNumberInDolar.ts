export function tranformNumberInDollar(number: number): string {
  return number.toFixed(2).replace('.', ',')
}
