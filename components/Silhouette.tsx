export default function Silhouette() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="200" height="250" fill="#f3f4f6" />
      
      {/* Head */}
      <circle cx="100" cy="70" r="30" fill="#d1d5db" />
      
      {/* Body/shoulders */}
      <path
        d="M 70 100 Q 70 110 80 130 L 120 130 Q 130 110 130 100"
        fill="#d1d5db"
      />
      
      {/* Torso */}
      <path
        d="M 80 130 L 75 200 L 85 200 L 90 160 L 110 160 L 115 200 L 125 200 L 120 130"
        fill="#d1d5db"
      />
    </svg>
  )
}
