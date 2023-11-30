export default function generateColor(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Introduce a random factor to the hash
  const randomFactor = Math.random() * 0.5 + 0.5;
  hash *= randomFactor;

  // Generate RGB values based on the hash
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;

  // Convert RGB to HEX
  const hexColor = `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)}`;

  // Return RGB and HEX values
  return {
    rgb: `rgb(${r},${g},${b})`,
    hex: hexColor,
  };
}
