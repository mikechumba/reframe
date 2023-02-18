export const formatAmount = (amount) => {
  return `£${(Math.round(Number(amount || 0) * 100) / 100).toFixed(2)}`;
}