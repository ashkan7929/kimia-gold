import * as htmlToImage from "html-to-image";

type SaveReceiptOptions = {
  fileName?: string;
  backgroundColor?: string;  
  pixelRatio?: number;    
};


export async function downloadElementAsPng(
  el: HTMLElement,
  {
    fileName = "receipt.png",
    backgroundColor = "#fff",
    pixelRatio = 2,
  }: SaveReceiptOptions = {}
) {
  const dataUrl = await htmlToImage.toPng(el, {
    backgroundColor,
    pixelRatio,
    cacheBust: true,
    filter: (node) => {
      return !(
        node instanceof Element && node.hasAttribute("data-hide-when-capture")
      );
    },
  });

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = fileName;
  a.click();
}
