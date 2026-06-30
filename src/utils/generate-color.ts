export function generateColor(string_: string) {
  let hash = 0;

  for (let index = 0; index < string_.length; index++) {
    hash = string_.codePointAt(index)! + ((hash << 5) - hash);
  }

  // Introduce a random factor to the hash
  const randomFactor = Math.random() * 0.5 + 0.5;
  hash *= randomFactor;

  // Generate RGB values based on the hash
  const r = (hash & 0xff_00_00) >> 16;
  const g = (hash & 0x00_ff_00) >> 8;
  const b = hash & 0x00_00_ff;

  // Convert RGB to HEX
  const hexColor = `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)}`;

  // Return RGB and HEX values
  return {
    hex: hexColor,
    rgb: `rgb(${r},${g},${b})`,
  };
}
