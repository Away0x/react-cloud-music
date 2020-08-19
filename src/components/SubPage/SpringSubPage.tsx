import React, { useState, useCallback, forwardRef, useRef, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';

import Header from 'components/Header';
import { Loading } from 'components/Loading';

import { StyledSpringSubPage } from './style';
import { SubPageProps, SubPageHandlers } from './type';

const SpringSubPage = forwardRef<SubPageHandlers, SubPageProps>(
  ({ header, title, anim = 'rotate', headerStyle, loading, children, ...rest }, ref) => {
    const history = useHistory();

    const headerRef = useRef<HTMLDivElement>(null);
    const [showPage, setShowPage] = useState(true);

    const handleBackButtonClick = useCallback(() => {
      setShowPage(false);
    }, []);

    const goBack = useCallback(() => {
      history.goBack();
    }, [history]);

    const transitions = useTransition(showPage, null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      onDestroyed: (isDestroyed) => {
        isDestroyed && goBack();
      },
    });

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

    const Transitions = transitions.map(
      ({ item: show, key, props }) =>
        show && (
          <StyledSpringSubPage key={key} style={props}>
            {header ? (
              header
            ) : (
              <Header ref={headerRef} style={headerStyle} onBackButtonClick={handleBackButtonClick} {...rest}>
                {title}
              </Header>
            )}

            {children}

            {loading && <Loading full />}
          </StyledSpringSubPage>
        ),
    );

    return <>{Transitions}</>;
  },
);

export default React.memo(SpringSubPage);
