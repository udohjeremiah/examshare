import generateColor from "./generateColor";

export default function generateAvatar(fullName) {
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  const hexColor = generateColor(fullName).hex;

  return `<svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="50%" fill="${hexColor}" />
      <text
        x="50%"
        y="50%"
        dy="0.1em"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="10"
      >
        ${initials}
      </text>
    </svg>`;
}
