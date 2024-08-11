import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import alertImg from '../../../../Assets/Images/Lashic/Alert.png';
// import taskImg from '../../../../Assets/Images/Lashic/Task.png';
// import customersImg from '../../../../Assets/Images/Lashic/Customers.png';
// import customerDetailImg from '../../../../Assets/Images/Lashic/CustomerDetail.png';
import SPEAK1 from '../../../../Assets/Images/Lashic/SPEAK1.png';
import SPEAK2 from '../../../../Assets/Images/Lashic/SPEAK2.png';
import SPEAK3 from '../../../../Assets/Images/Lashic/SPEAK3.png';
import SPEAK4 from '../../../../Assets/Images/Lashic/SPEAK4.png';

const LOGIN = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const NEPALI = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const HOME = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const LEARN = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class LashicImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <LOGIN src={SPEAK1} scroll={scrollPercent} alt="Task" />
        <NEPALI src={SPEAK2} scroll={scrollPercent} alt="Alert" />
        <HOME src={SPEAK3} scroll={scrollPercent} alt="customerDetails" />
        <LEARN src={SPEAK4} scroll={scrollPercent} alt="customers" />
      </React.Fragment>
    );
  }
}

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;
