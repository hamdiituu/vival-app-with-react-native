import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMenu(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill="#000"
        d="M0 0h5v5H0zM14 0h5v5h-5zM0 13h5v5H0zM14 13h5v5h-5z"
      />
    </Svg>
  );
}

export default SvgMenu;
