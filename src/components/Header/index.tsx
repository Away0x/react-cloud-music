import React, { useCallback, forwardRef } from 'react';
import { useHistory } from 'react-router-dom';

import Marquee from 'components/Marquee';

import StyledHeader, { Back } from './style';

interface HeaderProps {
  children?: React.ReactNode | string;
  isMarquee?: boolean; // 是否为走马灯
  style?: React.CSSProperties;
  onBackButtonClick?: () => void;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children = '标题', isMarquee = false, onBackButtonClick, style }, ref) => {
    const history = useHistory();
    const handleBackButtonClick = useCallback(() => {
      if (!onBackButtonClick) {
        history.goBack();
        return;
      }
      onBackButtonClick();
    }, [onBackButtonClick, history]);

    return (
      <StyledHeader ref={ref} style={style}>
        <Back className="iconfont" onClick={handleBackButtonClick}>
          &#xe655;
        </Back>
        {isMarquee ? (
          <h1>
            <Marquee>{children}</Marquee>
          </h1>
        ) : (
          <h1>{children}</h1>
        )}
      </StyledHeader>
    );
  },
);

export default React.memo(Header);
