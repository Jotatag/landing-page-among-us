import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';

import { device } from '../../../../styles/theme/devices';

import backgroud from '../../../../assets/images/background-buy-section.png';

export const BuySection = styled(Section)`
  background-image: url('${backgroud}');
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;
`

export const BuyContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  position: relative;

  @media ${device.laptopL} {
    gap: 0;
  }

  @media ${device.laptop} {
    flex-direction: column;
    margin-top: 195px;
  }
`

export const BuyMascot = styled.img`
  margin-top: 60px;
  margin-left: -100px;

  @media ${device.laptopM} {
    width: 700px;
  }

  @media ${device.laptopS} {
    margin-left: -50px;
    width: 600px;
  }

  @media ${device.laptop} {
    width: 400px;
    position: absolute;
    top: -200px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
  }
`

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  @media ${device.laptop} {
    margin-top: 270px;
    padding: 0 20px;
  }

  h2 {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 96px;
    font-weight: 700;
    line-height: 78px;

    @media ${device.laptopL} {
      font-size: 76px;
    }

    @media ${device.laptopS} {
      font-size: 68px;
    }

    @media ${device.laptop} {
      font-size: 48px;
      line-height: 50px;
    }
  }

  h3 {
    color: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 48px;
    font-weight: 700;

    @media ${device.laptopL} {
      font-size: 36px;
    }

    @media ${device.laptopS} {
      font-size: 28px;
    }

    @media ${device.laptop} {
      font-size: 24px;
    }
  }

  span {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 24px;
    font-weight: 500;
    margin-top: 45px;
    max-width: 570px;

    @media ${device.laptopL} {
      font-size: 20px;
    }

    @media ${device.laptopS} {
      font-size: 18px;
    }

    @media ${device.laptop} {
      font-size: 16px;
    }
  }
`

export const BuyButtons = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    button {
      margin: 0 !important;
      width: 250px;
    }
  }
`
