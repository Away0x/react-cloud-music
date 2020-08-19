import React from 'react';

import { HeaderProps } from 'components/Header';

export interface SubPageProps extends HeaderProps {
  header?: React.ReactNode;
  title?: string;
  loading?: boolean;
  anim?: 'rotate' | 'move';
  children?: React.ReactNode;
  headerStyle?: React.CSSProperties;
}

export interface SubPageHandlers {
  headerDom: HTMLDivElement | null;
  close(): void;
}
