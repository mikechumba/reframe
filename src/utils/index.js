export const formatAmount = (amount) => {
  const num = (Math.round(Number(amount || 0) * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })
  return `£${num}`;
}

export const commarize = (num) => {
  return Number(num | 0).toLocaleString('en-US');
}

export const hiphenate = (str) => {
  return str && str.toLowerCase().replace(/\s/g, '-');
}