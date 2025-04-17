export const formatCurrency = (value: string): string => {
  const numeric = value.replace(/\D/g, '');
  const withDots = numeric.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp ${withDots}`;
};
