import React, { useRef, useEffect } from 'react';

import Scroll from 'components/Scroll';

import StyledHorizenList, { List, ListTitle, ListItem } from './style';

interface HorizenListProps {
  list: Data.HorizenItem[];
  oldVal?: string;
  title?: string;
  onClick?: (t: Data.HorizenItem) => void;
}

function HorizenList({ list, oldVal, title, onClick }: HorizenListProps) {
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let categoryDOM = categoryRef.current;
    if (!categoryDOM) return;

    let tagElems = categoryDOM.querySelectorAll('span');
    let totalWidth = 0;
    Array.from(tagElems).forEach((ele) => {
      totalWidth += ele.offsetWidth + 1;
    });
    categoryDOM.style.width = `${totalWidth}px`;
  }, [list]);

  return (
    <Scroll refresh direction="horizontal">
      <StyledHorizenList ref={categoryRef}>
        <List>
          {title && <ListTitle>{title}</ListTitle>}
          {list.map((item) => {
            return (
              <ListItem selected={oldVal === item.key} key={item.key} onClick={() => onClick && onClick(item)}>
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </StyledHorizenList>
    </Scroll>
  );
}

export default React.memo(HorizenList);
