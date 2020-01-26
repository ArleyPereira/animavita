import React from 'react';
import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

import {heightPercentageToDP, widthPercentageToDP} from '@animavita/theme';
import {Background, Space} from '@animavita/ui/layout';
import {Typography} from '@animavita/ui/core';
import Images from '@animavita/ui/assets/images';
import {AppleButton, FacebookButton, GoogleButton} from '@animavita/ui/social';

const Wrapper = styled.View`
  ${() =>
    Platform.OS === 'web'
      ? css`
          min-width: 30%;
        `
      : css`
          width: 100%;
          padding: 0 ${widthPercentageToDP('10%')}px;
        `}
`;

const bgStyle = css`
  justify-content: flex-start;
  align-items: center;
`;
const titleStyle = css`
  color: ${({theme}) => theme.greenLight};
`;

const SignUp: React.FC = () => {
  return (
    <Background css={bgStyle}>
      <Wrapper testID="wrapper">
        <Space height={heightPercentageToDP('7%')} />
        <Images.BlackPersonWithDog testID="image" />
        <Space height={heightPercentageToDP('4%')} />
        <Typography variant="title-3" type="bold" css={titleStyle} testID="title">
          Animavita
        </Typography>
        <Typography variant="title-3" type="bold" testID="subtitle">
          Salve uma vida
        </Typography>
        <Space height={heightPercentageToDP('4%')} />
        <FacebookButton testID="fb-btn" />
        <Space height={heightPercentageToDP('1%')} />
        <GoogleButton testID="google-btn" />
        {Platform.OS === 'ios' && (
          <>
            <Space height={heightPercentageToDP('1%')} />
            <AppleButton testID="apple-btn" />
          </>
        )}
      </Wrapper>
    </Background>
  );
};

export default SignUp;
