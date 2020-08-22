import React from 'react';

import ScaleInWrapper from 'components/ScaleInWrapper';

import StyledLogin, { LogoContainer, LogoImg } from './style';

function Login() {
  return (
    <ScaleInWrapper
      fromScale={0.6}
      duration={150}
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
      }}>
      <StyledLogin>
        <LogoContainer>
          <div>
            <LogoImg />
          </div>
        </LogoContainer>
      </StyledLogin>
    </ScaleInWrapper>
  );
}

export default React.memo(Login);
