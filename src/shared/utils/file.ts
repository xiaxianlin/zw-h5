import domtoimage from "dom-to-image";

export const loadImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = url;
  });
};

export const downloadFile = (url: string, filename?: string, target?: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.style.display = "none";
  if (target) link.target = target;

  if (filename) {
    const downloadFilename = decodeURIComponent(filename);
    link.setAttribute("download", downloadFilename);
  }

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadElement = async (dom: HTMLElement | null, filename: string) => {
  if (dom === null) {
    return;
  }

  try {
    const url = await domtoimage.toPng(dom);
    downloadFile(url, filename);
  } catch (_) {}
};
