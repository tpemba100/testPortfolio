import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fastRetailingUQImg from '../../../../Assets/Images/FastRetailing/UQ.png';
import fastRetailingGUImg from '../../../../Assets/Images/FastRetailing/GU.png';
import fastRetailingPLSTImg from '../../../../Assets/Images/FastRetailing/PLST.png';
import fastRetailingGU2Img from '../../../../Assets/Images/FastRetailing/GU2.png';
import eyepTabletImg from '../../../../Assets/Images/Eyep/Tablet.png';
import HSAPhone from '../../../../Assets/Images/FastRetailing/HSAPhone.png';
import HSATablet from '../../../../Assets/Images/FastRetailing/HSATablet.png';
import HSALaptop from '../../../../Assets/Images/FastRetailing/HSALaptop.png';

const FastRetailingPhoneUQ = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 14}%)`,
  }),
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  top: 90vh;
  left: 0vw;
  /* border: 1px dashed red; */
  height: 80vh;
`;

const FastRetailingPhoneGU = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  top: 45vh;
  right: 2vw;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.6px);
`;

const FastRetailingPhonePLST = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(1.2)`,
  }),
})`
  transition: transform 0.2s ease-out;
  top: 75vh;
  right: 0vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.8px);
`;
// const FastRetailingPhonePLST = styled.img.attrs({
//   style: ({ scroll }) => ({
//     transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
//   }),
// })`
//   transition: transform 0.2s ease-out;
//   top: 75vh;
//   left: 2vw;
//   position: absolute;
//   /* border: 1px dashed red; */
//   height: 80vh;
//   filter: blur(0.8px);
// `;


const FastRetailingPhoneGU2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
  transition: transform 0.2s ease-out;
  top: 55vh;
  right: 5vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(1.2px);
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.94)`,
  }),
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  top: 60vh;
  right: 0.5vw;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.6px);
`;

const FastRetailingImages = ({
  boxHeight,
  index,
  screenHeight,
  scrollHeight,
  scrollPercent,
}) => {
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <React.Fragment>
      {/* <FastRetailingPhoneUQ src={fastRetailingUQImg} scroll={adjustedScrollPercent} alt="fastRetailingUQ" /> */}
      <FastRetailingPhoneUQ src={HSAPhone} scroll={adjustedScrollPercent} alt="fastRetailingUQ" />
      {/* 2 */}
      {/* <FastRetailingPhoneGU src={fastRetailingGUImg} scroll={adjustedScrollPercent} alt="fastRetailingGU" /> */}
      <Tablet src={HSATablet} scroll={adjustedScrollPercent} alt="eyepTablet" />
      {/* 3 */}
      <FastRetailingPhonePLST src= {HSALaptop} scroll={adjustedScrollPercent} alt="fastRetailingPLST" /> 
      {/* <FastRetailingPhonePLST src={fastRetailingPLSTImg} scroll={adjustedScrollPercent} alt="fastRetailingPLST" />  */}
      {/* 4 */}
      {/* <FastRetailingPhoneGU2 src={fastRetailingGU2Img} scroll={adjustedScrollPercent} alt="fastRetailingGU2" /> */}
    </React.Fragment>
  );
};

FastRetailingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FastRetailingImages;
