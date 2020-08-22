import React, { useState, useRef } from 'react';

import AuthContainer from 'containers/AuthContainer';
import ScaleInWrapper from 'components/ScaleInWrapper';
import CheckBox from 'components/CheckBox';

import StyledLogin, { LogoContainer, LogoImg, Button, FormWrapper } from './style';

function Login() {
  const { loginAction } = AuthContainer.useContainer();

  const checkboxRef = useRef<HTMLDivElement>(null);
  const [checked, setChecked] = useState(false);

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
        <FormWrapper>
          <Button
            onClick={() => {
              if (!checked) {
                if (checkboxRef.current) {
                  checkboxRef.current.classList.add('shake-anim');
                  setTimeout(() => {
                    checkboxRef.current!.classList.remove('shake-anim');
                  }, 500);
                }
                return;
              }

              loginAction({ username: 'Away0x', password: '123456' });
            }}>
            MOCK LOGIN
          </Button>
          <CheckBox ref={checkboxRef} name="secret" checked={checked} onChange={(s) => setChecked(s)}>
            <span>同意{'<<隐私政策>>'}</span>
          </CheckBox>
        </FormWrapper>
      </StyledLogin>
    </ScaleInWrapper>
  );
}

export default React.memo(Login);
