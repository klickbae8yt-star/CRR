# Teal Smile Icons

This directory contains the extension icons.

## Icon Files Needed

The extension requires PNG icons in the following sizes:
- `icon16.png` - 16x16 pixels
- `icon48.png` - 48x48 pixels  
- `icon128.png` - 128x128 pixels

## Generating PNG Icons

An SVG template (`icon.svg`) is provided with the Teal Smile design:
- Teal-to-darker-teal gradient background
- Gold border
- Cute blushing smiley face
- Rounded square shape

### Option 1: Using ImageMagick (if installed)

```bash
# Install ImageMagick if not already installed
# Ubuntu/Debian: sudo apt-get install imagemagick
# macOS: brew install imagemagick

# Generate PNG icons from SVG
convert -background none icon.svg -resize 16x16 icon16.png
convert -background none icon.svg -resize 48x48 icon48.png
convert -background none icon.svg -resize 128x128 icon128.png
```

### Option 2: Using Inkscape (if installed)

```bash
inkscape icon.svg --export-filename=icon16.png --export-width=16 --export-height=16
inkscape icon.svg --export-filename=icon48.png --export-width=48 --export-height=48
inkscape icon.svg --export-filename=icon128.png --export-width=128 --export-height=128
```

### Option 3: Using Online Tools

1. Open https://cloudconvert.com/svg-to-png or similar
2. Upload `icon.svg`
3. Set output dimensions
4. Download PNG files

### Option 4: Using Node.js (sharp library)

```bash
npm install sharp
node generate-icons.js
```

## Placeholder Icons

For testing purposes, you can temporarily use any 128x128 PNG image renamed as the required files. The extension will still function, just with different visuals.

## Design Specifications

- **Primary Color**: Teal (#14b8a6 to #0d9488 gradient)
- **Accent Color**: Gold (#fbbf24)
- **Shape**: Rounded square (20px border radius at 128px size)
- **Icon**: Blushing smiley face with gold sparkle
- **Border**: 4px gold border around the edge
