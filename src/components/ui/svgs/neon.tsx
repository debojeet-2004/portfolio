import type { SVGProps } from "react";

const Neon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M18 10H46V50L38 42V54L18 34V10Z"
      stroke="#00FFA3"
      strokeWidth="4"
      strokeLinejoin="miter"
      strokeLinecap="square"
      fill="none"
    />
  </svg>
);

export { Neon };