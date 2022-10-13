import * as React from "react";
import { SVGProps } from "react";

const Dropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.222 11.333h3.556V9.556H6.222v1.777ZM0 .667v1.777h16V.667H0Zm2.667 6.222h10.666V5.11H2.667V6.89Z"
      fill="#545F7D"
    />
  </svg>
);

export default Dropdown;
