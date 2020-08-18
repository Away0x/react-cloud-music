import React, { useState, useCallback, forwardRef, useRef, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Header from 'components/Header';

import { StyledCSSTransitionSubPage } from './style';

import { SubPageProps, SubPageHandlers } from './type';

const CSSTransitionSubPage = forwardRef<SubPageHandlers, SubPageProps>(
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
        <StyledCSSTransitionSubPage>
          {header ? (
            header
          ) : (
            <Header ref={headerRef} style={headerStyle} onBackButtonClick={handleBackButtonClick} {...rest}>
              {title}
            </Header>
          )}

          {children}
        </StyledCSSTransitionSubPage>
      </CSSTransition>
    );
  },
);

export default React.memo(CSSTransitionSubPage);
