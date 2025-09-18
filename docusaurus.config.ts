import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import social from './data/social'
import type { GiscusConfig } from './src/components/Comment'

const config: Config = {
  title: 'Lillian',
  url: 'https://blog-lillian.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Lillian',
  projectName: 'blog',
  customFields: {
    bio: '天道酬勤',
    description:
      '是一个由Lillian创建的个人博客，该网站是基于 React 驱动的静态网站生成器 Docusaurus 构建。',
  },

  themeConfig: {
    image: 'img/og.png',

    metadata: [
      {
        name: 'author',
        content: 'Lillian',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, react',
      },
    ],

    navbar: {
      logo: {
        alt: 'Lillian',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        { label: '博客', position: 'right', to: 'blog' },
        { label: '项目', position: 'right', to: 'project' },
        { label: '关于', position: 'right', to: 'about' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '项目', to: 'project' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: social.github.href },
          ],
        },
        {
          title: '更多',
          items: [
            {
              html: `
                <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                </a>
                `,
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} Lillian. | Built with Docusaurus.</p>`,
    },

    algolia: {
      appId: '89FWMM9HJO',
      apiKey: 'b5bb639ed2131cbbb53a5c49b5a73fdb',
      indexName: 'Lillian',
    },

    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },

    giscus: {
      repo: 'Yang0107-liyyy/blog',
      repoId: 'R_kgDOPwq9EQ',
      category: 'General',
      categoryId: 'DIC_kwDOPwq9Ec4Cvfhh',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    liveCodeBlock: { playgroundPosition: 'top' },

    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },

  } satisfies Preset.ThemeConfig,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        theme: {
          customCss: [
            './src/css/tweet-theme.css',
            './src/css/custom.css',
          ],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-EBPRY53LFN',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogDescription: '生活是诗，代码是笔，一同写下属于我的故事',
        blogSidebarCount: 10,
        blogSidebarTitle: '近期博文',
        postsPerPage: 9,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Lillian个人博客',
          description: '生活是诗，代码是笔，一同写下属于我的故事',
          copyright: `Copyright © ${new Date().getFullYear()} Lillian Built with Docusaurus.`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
                  (${function () {
                    console.log(
                      `%c Lillian Blog %c https://github.com/Yang0107-liyyy/blog`,
                      'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
                      'margin: 1em 0; padding: 5px 0; background: #efefef;',
                    )

                    const motto = `
                      This Webisite Powered By Lillian Blog.
                      Written by Docusaurus, Coding with Love.
                      --------
                      Love what you do and do what you love.
                      `

                    if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
                      document.prepend(document.createComment(motto))
                    }
                  }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Lillian个人博客',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
  onBrokenLinks: 'warn',
  future: {
    v4: true,
    experimental_faster: true,
  },
}

export default config
