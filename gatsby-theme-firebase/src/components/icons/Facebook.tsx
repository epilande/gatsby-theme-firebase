import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

const Faceboook: React.FunctionComponent<Props> = ({
  size = 16,
  ...restProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" {...restProps}>
      <title>Faceboook</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
          fill="#3A5C98"
        />
      </g>
    </svg>
  );
};

export default Faceboook;
