import type { DocsLayoutProps } from 'fumadocs-ui/layout';
import { BookIcon, LayoutTemplateIcon } from 'lucide-react';
import { utils } from '@/utils/source';
import { NavChildren, SidebarBanner, Title } from '@/app/layout.client';

export const layoutOptions: Omit<DocsLayoutProps, 'children'> = {
  tree: utils.pageTree,
  nav: {
    transparentMode: 'top',
    title: <Title />,
    children: <NavChildren />,
    githubUrl: 'https://github.com/kuro-js/kurogashi',
  },
  sidebar: {
    defaultOpenLevel: 0,
    banner: <SidebarBanner />,
  },
};
