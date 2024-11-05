export const formatUNF = (value: string) => {
  const cleaned = value.replace(/\D+/g, '');
  const match = RegExp(/^(\d{3})(\d{3})(\d{3})(\d{2})(\d{3})$/).exec(cleaned);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}-${match[4]}-${match[5]}`;
  }
  return value;
};
