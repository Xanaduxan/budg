export const formatDate = (dateStr: string | undefined) => {
  if (!dateStr) {
    return null;
  }
  const date = new Date(dateStr);
  const options: Record<string, string> = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('us-Us', options);
};
