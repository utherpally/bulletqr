---
name: Library/utherpally/bulletqr/PLUG
tags: meta/library
files:
- bulletqr.plug.js
---

Generate QR Code images from text data.

## Usage

Setup default options using space-lua (optional)
```lua
config.set {
  bulletqr = {
    typeNumber = 5,
    errorCorrectionLevel = "H",
    -- Other options here
  }
}
```

Basic usage:
```
${bulletqr.qrcode("https://example.com")}
```

With options (this will merge with default options):
```
${bulletqr.qrcode("Hello World", {cellSize: 5, margin: 2})}
```


## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `typeNumber` | 0-40 | 4 | QR code version (0 = auto) |
| `errorCorrectionLevel` | "L", "M", "Q", "H" | "L" | Error correction level |
| `cellSize` | number | 3 | Size of each cell in pixels |
| `margin` | number | - | Margin around the QR code |
| `mode` | "Numeric", "Alphanumeric", "Byte", "Kanji" | "Byte" | Encoding mode |

## Examples

URL:
```
${bulletqr.qrcode("https://silverbullet.md")}
```

WiFi credentials:
```
${bulletqr.qrcode("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")}
```

High error correction with larger cells:
```
${bulletqr.qrcode("Important data", {errorCorrectionLevel: "H", cellSize: 6})}
```
