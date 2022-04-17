module.exports = {
  theme: 'reco',
  title: '赵灿祥的个人博客',
  description: '专注于前端开发学习总结',
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        title: '关于我',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "一个嗷嗷待哺的前端小白", path: "/" }
        ]
      },
      {
        title: '周总结',
        path: '/week-2022/2022-04',
        children: [
          { title: "2022-04", path: "/week-2022/2022-04" },
          { title: "2022-05", path: "/week-2022/2022-05" },
        ], 
      }
    ]
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}