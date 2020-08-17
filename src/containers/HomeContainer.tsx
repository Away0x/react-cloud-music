import React from 'react';

import RecommendContainer from 'containers/RecommendContainer';
import SingersContainer from 'containers/SingersContainer';
import RankContainer from 'containers/RankContainer';
import PlayerContainer from 'containers/PlayerContainer';

interface HomeContainerProps {
  children: React.ReactNode;
}

/** 首页 tab 依赖的 containers */
function HomeContainer({ children }: HomeContainerProps) {
  return (
    <RecommendContainer.Provider>
      <SingersContainer.Provider>
        <RankContainer.Provider>
          <PlayerContainer.Provider>{children}</PlayerContainer.Provider>
        </RankContainer.Provider>
      </SingersContainer.Provider>
    </RecommendContainer.Provider>
  );
}

export default HomeContainer;
