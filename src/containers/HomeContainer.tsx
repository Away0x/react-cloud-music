import React from 'react';

import RecommendContainer from 'containers/RecommendContainer';
import SingersContainer from 'containers/SingersContainer';
import RankContainer from 'containers/RankContainer';
import SearchContainer from 'containers/SearchContainer';
import PlayerContainer from 'containers/PlayerContainer';

interface HomeContainerProps {
  children: React.ReactNode;
}

/** 首页 tab 依赖的 containers */
function HomeContainer({ children }: HomeContainerProps) {
  return (
    <PlayerContainer.Provider>
      <RecommendContainer.Provider>
        <SingersContainer.Provider>
          <RankContainer.Provider>
            <SearchContainer.Provider>{children}</SearchContainer.Provider>
          </RankContainer.Provider>
        </SingersContainer.Provider>
      </RecommendContainer.Provider>
    </PlayerContainer.Provider>
  );
}

export default HomeContainer;
