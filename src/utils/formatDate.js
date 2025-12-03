/*
untuk menampilkan tanggal
*/
export function formatDate(dateString) {
  if (!dateString) return "-";

  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
