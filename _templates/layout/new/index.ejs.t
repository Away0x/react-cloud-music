---
to: src/layouts/<%= name %>/index.tsx
---

import React from 'react';

import Styled<%= name %> from './style';

interface <%= name %>LayoutProps {
  children?: React.ReactNode;
}

function <%= name %>Layout({
  children,
  ...rest
}: <%= name %>LayoutProps) {
  return (
    <Styled<%= name %> {...rest}>
      {children}
    </Styled<%= name %>>
  );
}

export default React.memo(<%= name %>Layout);
