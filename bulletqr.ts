import QRCode from "qrcode-generator";

// Copy from qrcode-generator types
type TypeNumber =
  | 0 // Automatic type number
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40;

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

type Mode = "Numeric" | "Alphanumeric" | "Byte" /* Default */ | "Kanji";

interface QRCodeOptions {
  typeNumber?: TypeNumber;
  errorCorrectionLevel?: ErrorCorrectionLevel;
  cellSize?: number;
  margin?: number;
  mode?: Mode;
}

function makeQR(
  text: string,
  options?: QRCodeOptions,
): string {
  const {
    typeNumber = 4,
    errorCorrectionLevel = "L",
    cellSize = 3,
    margin,
    mode,
  } = options ?? {};
  const qr = QRCode(typeNumber, errorCorrectionLevel);
  qr.addData(text, mode);
  qr.make();
  return qr.createImgTag(cellSize, margin);
}

type Widget = {
  _isWidget: true;
  html: string;
};

export function qrcode(
  text: string,
  options?: QRCodeOptions,
): Widget {
  return {
    _isWidget: true,
    html: makeQR(text, options),
  };
}
