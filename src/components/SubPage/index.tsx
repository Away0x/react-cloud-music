import React, { useState, useCallback, forwardRef, useRef, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Header, { HeaderProps } from 'components/Header';

import StyledSubPage from './style';

interface SubPageProps extends HeaderProps {
  header?: React.ReactNode;
  title?: string;
  anim?: 'rotate' | 'move';
  children?: React.ReactNode;
  headerStyle?: React.CSSProperties;
}

export interface SubPageHandlers {
  headerDom: HTMLDivElement | null;
  close(): void;
}

const SubPage = forwardRef<SubPageHandlers, SubPageProps>(
  ({ header, title, anim = 'rotate', headerStyle, children, ...rest }, ref) => {
    const history = useHistory();
    const headerRef = useRef<HTMLDivElement>(null);
    const [showPage, setShowPage] = useState(true);

    const handleBackButtonClick = useCallback(() => {
      setShowPage(false);
    }, []);

    const goBack = useCallback(() => {
      history.goBack();
    }, [history]);

    useImperativeHandle(
      ref,
      () => {
        return {
          headerDom: headerRef.current,
          close() {
            handleBackButtonClick();
          },
        };
      },
      [handleBackButtonClick],
    );

    return (
      <CSSTransition in={showPage} timeout={300} classNames={anim} appear={true} unmountOnExit onExited={goBack}>
        <StyledSubPage>
          {header ? (
            header
          ) : (
            <Header ref={headerRef} style={headerStyle} onBackButtonClick={handleBackButtonClick} {...rest}>
              {title}
            </Header>
          )}

          {children}
        </StyledSubPage>
      </CSSTransition>
    );
  },
);

export default React.memo(SubPage);
