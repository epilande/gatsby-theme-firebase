import * as React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

const Google: React.FunctionComponent<Props> = ({
  size = 16,
  ...restProps
}) => {
  const aspectRatio = 120 / 118;
  const height = size * aspectRatio;
  return (
    <svg width={size} height={height} viewBox="0 0 118 120" {...restProps}>
      <title>Google</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M117.6 61.3636c0-4.2545-.3818-8.3454-1.091-12.2727H60V72.3h32.291c-1.391 7.5-5.6183 13.8545-11.9728 18.109v15.0546H99.709c11.3454-10.4454 17.8909-25.8272 17.8909-44.1z"
          fill="#4285F4"
        />
        <path
          d="M60 120c16.2 0 29.7818-5.3727 39.709-14.5364L80.3183 90.4091c-5.3727 3.6-12.2455 5.7273-20.3182 5.7273-15.6273 0-28.8545-10.5546-33.5727-24.7364H6.3818v15.5455C16.2545 106.5545 36.5455 120 60 120z"
          fill="#34A853"
        />
        <path
          d="M26.4273 71.4c-1.2-3.6-1.8818-7.4455-1.8818-11.4 0-3.9545.6818-7.8 1.8818-11.4V33.0545H6.3818C2.3182 41.1545 0 50.3182 0 60c0 9.6818 2.3182 18.8455 6.3818 26.9455L26.4273 71.4z"
          fill="#FBBC05"
        />
        <path
          d="M60 23.8636c8.809 0 16.7182 3.0273 22.9364 8.9728l17.209-17.2091C89.7546 5.9455 76.1728 0 60 0 36.5455 0 16.2545 13.4455 6.3818 33.0545L26.4273 48.6C31.1455 34.4182 44.3727 23.8636 60 23.8636z"
          fill="#EA4335"
        />
        <path d="M0 0h120v120H0V0z" />
      </g>
    </svg>
  );
};

export default Google;
