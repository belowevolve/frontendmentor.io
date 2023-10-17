import html2canvas from 'html2canvas';

const captureDOM = async (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const canvas = await html2canvas(element, {
      imageTimeout: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      logging: false,
    });
    return canvas.toDataURL();
  }
  return '';
};

export default captureDOM;
