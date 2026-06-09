export default function formatCurrency(amount: number): string {
  const formatter = Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(amount);
}
