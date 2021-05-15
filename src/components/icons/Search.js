import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={10} cy={10} r={9} stroke="#000" strokeWidth={2} />
      <Path
        d="M16 17l5 5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgSearch;
