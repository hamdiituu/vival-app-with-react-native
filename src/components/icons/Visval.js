import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function SvgVisval(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 74 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#visval_svg__pattern0)" d="M0 0h74v17H0z" />
      <Defs>
        <Pattern
          id="visval_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#visval_svg__image0"
            transform="matrix(.00806 0 0 .0351 0 -.009)"
          />
        </Pattern>
        <Image
          id="visval_svg__image0"
          width={124}
          height={29}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAdCAYAAABotghBAAAFKElEQVRo3u2aT1LjRhTGf1CsVeYCidloOWVOEPsCgbkAgy8wwF41LlLaG+YCdrgAzgnQ5AK4stTGylwAly6QWfRTSph+3S3ZhkrwV+UCW63u9/fr10/aY4f/HaI4uVYuLQ7eWrgdtoIvyu/Z/ltLtsPrYufwd4adw98Zdg5/Z9g5/J1h5/B3hoMoTrpAV7lelHla+CbxzLEs83QeOHZe5ukyYL0e0Ad+BnrausBfwELmnfvmfU1EcdIR2QfAT4pN5sDfQLYp+Q+AU2CsXJ8BHwPmGQHnyrUbEbzCEP2cOAAyh5HOgQt0J6/itHZvUebp0cp8E5fcZZ5e+RaI4uQBE3w2XJV5elMb2xGZTuqyOdCv3VsAd2WejgJ1t2IfmGKywWowyUiXwh2H0QBu1xGwts4EmBDu7FXY9Lh2jHfpVMnURXf2EmPbOnqiQ4izbfJ/ieLk0ecTF/aFQr86xgw9c7iEn4ZsCT5EcTImwAFNIbLNlMsdYRQXLjy6e7enFugB95JojVG1VifoNHuGoew2Sq+d3RLNl44hGWbLKOV7tR9WHx9u0YP2Ey+ztI7zDemeAQXwvfbbr+hs1gOucPvFigMwkR7FyVRRoBvFyWmZpy8yQYonTahNFRra/AVw7MoiyYI+8AsK9ZZ5mkVxMlfW6Udx0rWxVBQnp4CWZT5mW2KY5Q+bXQUjse+Dss5n2jpccIsesZ+wU99Ws1tw3PZGCYYZOm3XZZ0o1y4w2WSzSVPdl5gtchZC92WeziURbQzXieKk1zSp9upfPBXnUT1qJXsW2KPvRUVcu+8aR5Ve5mm2Mr6PiXIbCgwdfhdZCjFURkNEcbLAvgUsyzw9XBnblfVsyMo8HTRdf0XfAfAB4wvXXj2w6RrFyT+abKuPR2/RHT7kOYW4KM1V/TZF4bjWxcJKUZxU/87l863M06lnnTvsgdixbGmuQjaY2SxbTtsTSDCeddpEqUIZe7byXaO0ikY3AmGVm5a39zABMYniZCHZo2GMfjxd1fVMGVc49mTAsEMUJ5dRnDwCT8A9hrK37mywt1a17OxKoeI7f37d9HFEGiDTNafpAg+a02v7vQ3/9iPEBl1lnMpsUZx0pJewwARXiIPnOBpRbWBz+Aw90k/kr6tYG7MFlHk6xHT91mUPV2Xr2ooqGj9Rri+1bUOo+wF/LyEDfsPszXtlnh6z2e3xpcM9jZhzT2dtW82GSrZZmacfgUNMYXMlBroRY2W493wwR62OMn+BHlBnHt1dzasR7p7/EDgs83RQ5umoTdEZCu2dtjF6JT3mdYo1AKI4ucecV6fVbxJUGe6++yU62/Qc92qNmC5udnAx27nj2sBztGpd8dtgfTwqBp02FD7bRBvVgg6m6HqK4mQc2keuP7RoAsmurKHuPmbTEsTZnJLGy+fWlrPA9dbqNc361xvP7hV0MNXspXTGMuAbpjJ+ZjQJCvXoFECZv2MvSjfNbH2teSJ9fBebtoLqcGm3ZujVeB3zbe47FlQt3UsxTpN7vUVfmafTKE5GhPXiZwHMprVuAR7Fzn8CUU23EEc3DgbfGy+hkbupNuq2scTeJl1Hp5BxvjF9TM10ycvuWua4r3Hb2elwydrCM0cR0MVaB7cBMoSgwBRIoXNN0Y+nFYKYTewzbSFzRtgLKMEIeafNl+V3mxRoFXIUO8JUq1OaO3+OyerjJg8aPIVrhWBmkz7CMFD+AhjKMc0VdB8a2uL5w5P/CmrvxbmOLA8EviP3BvL3Fdmf2OD7azb8AGzz/U+P2hoCAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default SvgVisval;
