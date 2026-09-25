export const openExternal = (url) => {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
};
