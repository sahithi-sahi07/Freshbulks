export const USD_TO_INR = 83.12; // Current exchange rate

export function convertToINR(usdPrice: number): number {
  return usdPrice * USD_TO_INR;
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}