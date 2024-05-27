// @ts-check
import createBundleAnalyzer from '@next/bundle-analyzer';
import createMDX from 'fumadocs-mdx/config';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import {
  remarkDocGen,
  remarkInstall,
  fileGenerator,
  typescriptGenerator,
} from 'fumadocs-docgen';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    // Replaced by root workspace command
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.noParse = [/typescript\/lib\/typescript.js/];

    return config;
  },
};

const withMDX = createMDX({
  buildSearchIndex: {
    filter: (v) => {
      return !v.match(/.+\.model\.mdx/);
    },
  },
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      transformers: [
        ...rehypeCodeDefaultOptions.transformers,

      ],
    },
    lastModifiedTime: 'git',
    remarkPlugins: [
      remarkMath,
      [remarkInstall, { Tabs: 'InstallTabs' }],
      [remarkDocGen, { generators: [typescriptGenerator(), fileGenerator()] }],
    ],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});

export default withAnalyzer(withMDX(config));
