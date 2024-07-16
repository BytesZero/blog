import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'BytesZero',
  description: '红尘赐我两滴墨，不敢直书亏为人',
  icon: '/favicon.ico',
  themeConfig: {
    search: false,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/BytesZero' },
      { icon: 'juejin', mode: 'link', content: 'https://juejin.cn/user/764915820276439' },
    ],
    footer: {
      message: '© BytesZero 陕ICP备2023020053号-1',
    },
    prevPageText: '上一篇',
    nextPageText: '下一篇',
  },
});
