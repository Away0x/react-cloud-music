import React from 'react';
import { NavLink } from 'react-router-dom';

import { RecommondRoutePath, SingersRoutePath, RankRoutePath } from 'constants/router';

import StyledHome, { Top, Tab, TabItem } from './style';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

function HomeLayout({ children, ...rest }: HomeLayoutProps) {
  return (
    <StyledHome {...rest}>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">云音乐</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to={RecommondRoutePath.Root} activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to={SingersRoutePath.Root} activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to={RankRoutePath.Root} activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      {children}
    </StyledHome>
  );
}

export default React.memo(HomeLayout);
