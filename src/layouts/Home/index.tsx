import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { RecommondRoutePath, SingersRoutePath, RankRoutePath } from 'constants/router';
import Drawer from 'components/Drawer';

import StyledHome, { Top, Tab, TabItem } from './style';
import DrawerContent from './DrawerContent';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <StyledHome>
      <Drawer width={250} show={showDrawer} onClose={() => setShowDrawer(false)}>
        <DrawerContent />
      </Drawer>

      <Top>
        <span className="iconfont menu" onClick={() => setShowDrawer(true)}>
          &#xe65c;
        </span>
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
