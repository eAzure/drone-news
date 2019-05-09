Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle:[{
      name:"热帖"
    },
    {
      name:"新发表"
    },
    {
      name:"精华"
    }],
    navbar: [{
      name:"热帖",
      authorImage:"/images/个人中心.png",
      date:"2018.9.3",
      title:"你好啊",
      image:"/images/新闻1.jpg",
      content:"哈哈",
      likeImage:"/images/爱看.png",
      collectImage:"/images/收藏.png",
      reading:"11",
      collection:"22"
      },
      {
        name:"新发表",
        authorImage: "/images/个人中心.png",
        date: "2018.9.3",
        title: "你好啊",
        image: "/images/新闻1.jpg",
        content: "哈哈",
        likeImage: "/images/爱看.png",
        collectImage: "/images/收藏.png",
        reading: "11",
        collection: "22"
      },
      {
        name: "精华", 
        authorImage: "/images/个人中心.png",
        date: "2018.9.3",
        title: "你好啊",
        image: "/images/新闻1.jpg",
        content: "哈哈",
        likeImage: "/images/爱看.png",
        collectImage: "/images/收藏.png",
        reading: "11",
        collection: "22"
      }
    ]
  },
  //点击实现写圈子界面跳转的操作
  publishCilck:function(){
    wx.navigateTo({
      url: '/pages/writeCircle/writeCircle',
    })
  },
  /**
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },

  /**
   * 
   */
  onBindAnimationFinish: function ({ detail }) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  }
})