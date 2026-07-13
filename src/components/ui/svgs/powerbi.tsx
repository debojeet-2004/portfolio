import type { SVGProps } from "react";

const PowerBI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    {/* Left Bar */}
    <rect
      x="2.5"
      y="9"
      width="5"
      height="11"
      rx="1.3"
      fill="#F9E27D"
    />

    {/* Middle Bar */}
    <rect
      x="8.8"
      y="5"
      width="5.4"
      height="15"
      rx="1.3"
      fill="#F6D44A"
    />

    {/* Right Bar */}
    <rect
      x="15.3"
      y="2"
      width="6.2"
      height="18"
      rx="1.3"
      fill="#EFB700"
    />
  </svg>
);

export { PowerBI };