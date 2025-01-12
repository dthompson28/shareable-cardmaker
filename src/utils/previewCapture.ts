import html2canvas from "html2canvas";

export const capturePreview = async (element: HTMLElement): Promise<string> => {
  const canvas = await html2canvas(element);
  return canvas.toDataURL('image/jpeg');
};