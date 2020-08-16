import React from 'react';

import { StyledMenu } from './style';

function AlbumDetailMenu() {
  const handleClick = () => {
    alert('开发中...');
  };

  return (
    <StyledMenu>
      <div>
        <i className="iconfont" onClick={handleClick}>
          &#xe6ad;
        </i>
        评论
      </div>
      <div>
        <i className="iconfont" onClick={handleClick}>
          &#xe86f;
        </i>
        点赞
      </div>
      <div>
        <i className="iconfont" onClick={handleClick}>
          &#xe62d;
        </i>
        收藏
      </div>
      <div>
        <i className="iconfont" onClick={handleClick}>
          &#xe606;
        </i>
        更多
      </div>
    </StyledMenu>
  );
}

export default React.memo(AlbumDetailMenu);
