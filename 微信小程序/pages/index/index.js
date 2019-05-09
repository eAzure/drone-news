//index.js
//获取应用实例
const app = getApp()
//引入本地数据
//var postsData=require('../../data/posts-data.js')
//var postsVideoData=require('../../data/posts-newsVideo.js')
Page({
  data: {
    newsIDid:0,
    newsCollectID:0,
    swiperCurrent:0,
    imgUrls: [
      '/images/无人机.jpg',
      '/images/无人机2.jpg',
      '/images/无人机3.jpg'
    ],
    publicMessages:[
      "标压低压CPU分不清，笔记本核心也要论出身！",
      "锐龙5 3600G比肩GTX1050，甚至超越了",
      "为什么CPU要提高密度，而不是增大面积呢"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 800,       //滑动动画时长
    circular:true,
    links:[
      '../mine/mine',
      '../mine/mine',
      '../mine/mine'
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /*
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
*/
 
 //轮播图处理
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  },
  //点击新闻列表里新闻的图片转到新闻的详情页
  newsClick:function(e){
    console.log(e.target.id)
    //console.log(postsData.postList[e.target.id].date)
    wx.navigateTo({
      //这样实现外来数据堆对应的内容查找,需要在ml那里设置一个id，并且传输参数到具体的详情页那里；
      url: this.data.posts_key[e.target.id].link+"?id="+e.target.id
    })
    //使阅读量加1
    this.likeCount(e.target.id)
  },
  //点击新闻按钮跳转到新闻界面
  newsButtonClick:function(){
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  //点击写新闻按钮跳转到写新闻界面
  writeNewsButtonClick:function(){
    wx.navigateTo({
      url: '/pages/writeNews/writeNews',
    })
  },
  //点击发视频按钮跳转到发视频按钮
  sendVideoButtonClick:function(){
    wx.navigateTo({
      url: '/pages/sendVideo/sendVideo',
    })
  },
  //点击video按钮跳转到视频界面
  videoButtonClick:function(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  //点击视频页跳转到具体的视频界面
  videoClick:function(){

  },
  //点击喜欢按钮，其实是点击新闻后浏览量的代表，应该放在点击新闻的那个事件里
  likeCount:function(idNews){
    this.setData({
      newsIDid:idNews*10/10+1
    });
    console.log(this.data.newsIDid);
    var that=this
    wx.request({
      url: 'http://localhost:8080/user/changeLikeCollect?NewsID=' +that.data.newsIDid,
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success:function(){
        console.log("浏览的新闻ID：" + that.data.newsIDid)
        that.currentFlush()
      }
    })
  },
  //点击收藏按钮，实现收藏功能并实现图标变红的操作，点击取消则取消收藏，因为为测试号，所以并不考虑与用户相关的和实现状态切换的了
  collectCount:function(e){
    //先试试图标变红吧，通过后台来进行改变并且这样还能保持对用户的记忆
    //只需要修改数据库里的内容后，后重新设置数据即可
    //颜色按钮变了，我们现在需要让数值加1了！
    var that=this
    this.setData({
      newsCollectID: e.target.id * 10 / 10 + 1
    })
    app.globalData.collectNewsID=this.data.newsCollectID
    console.log("收藏的新闻ID为：" + app.globalData.collectNewsID)
    //在这里将收藏或取消收藏的新闻赋给全局的collectNews，在这里加个判断，判断图片颜色从而决定是放在收藏列表里还是从收藏列表里删除
    wx.request({
      url: 'http://localhost:8080/user/getCollectNews?NewsID='+app.globalData.collectNewsID,
      method:'GET',
      dataType:'json',
      header:{'content-type':'application/json'},
      success:function(res){
        //判断此时新闻的收藏图片，从而决定是删除还是添加新闻进入收藏列表中
        console.log(res.data)
        console.log(res.data[0].collectImage)
        if(res.data[0].collectImage=='/images/收藏.png'){
          //此时添加新闻到新闻列表中
          console.log("添加至收藏列表")
          wx.request({
            url: 'http://localhost:8080/user/insertCollectNews?NewsID='+res.data[0].newsId+'&NewsTitle='+res.data[0].title+'&NewsContent='+res.data[0].newsContent+'&CoverImage='+res.data[0].coverImage+'&ReadCount='+res.data[0].readCount+'&CreatTime='+res.data[0].creatTime+'&NewsConcreteContent='+res.data[0].newsConcreteContent+'&CollectCount='+res.data[0].collectCount+'&CollectImage='+res.data[0].collectImage+'&ViewImage='+res.data[0].viewImage+'&Link='+res.data[0].link+'&AuthorImage='+res.data[0].authorImage,
            method:'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded'},
            success:function(){
              console.log('新闻成功添加到收藏列表中')
            }
          })
        }else{
          //此时从收藏列表中将其删除
          console.log("从收藏列表中删除")
          wx.request({
            url: 'http://localhost:8080/user/removeCollectNews?NewsID='+res.data[0].newsId,
            method:'GET',
            header:{'content-type':'application/json'},
            success:function(){
              console.log('新闻从收藏列表中取消成功！')
            }
          })
        }
      }
    })

    wx.request({
      url: 'http://localhost:8080/user/changeCollectImage?NewsID='+that.data.newsCollectID,
      method:"GET",
      dataType:'json',
      header: { 'content-type': 'application/json' },
      success:function(){
        console.log(that.data.newsCollectID)
        wx.request({
          url: 'http://localhost:8080/user/changeCollectCount?NewsID='+that.data.newsCollectID,
          method:'GET',
          dataType:'json',
          header:{'content-type':'application/json'},
          success:function(){
            that.currentFlush()
          }

        })
        //onload函数不能实现我们想要的效果，所以我们可能还需要重新访问一遍url
        that.currentFlush()
      }
    })
  },
  
  //实现动态刷新的效果函数
  currentFlush:function(){
   
    var that = this;
    wx.request({
      url: 'http://localhost:8080/user/findAllNews',//具体是哪一个接口方法后期再说
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        wx.setStorageSync("newsStartList", res.data)
        that.setData({
          posts_key: wx.getStorageSync("newsStartList")
        })
      }
    })
  },

  //下拉刷新功能
  onPullDownRefresh: function (){
    this.setData({
      swiperCurrent: 0,
      publicMessages: [
        "标压低压CPU分不清，笔记本核心也要论出身！",
        "锐龙5 3600G比肩GTX1050，甚至超越了",
        "为什么CPU要提高密度，而不是增大面积呢"
      ],
      indicatorDots: true,  //是否显示面板指示点
      autoplay: true,      //是否自动切换
      interval: 3000,       //自动切换时间间隔
      duration: 800,       //滑动动画时长
      circular: true,
      links: [
        '../mine/mine',
        '../mine/mine',
        '../mine/mine'
      ],
    })
    var that=this;
    wx.request({
      url: 'http://localhost:8080/user/findAllNews',//具体是哪一个接口方法后期再说
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        wx.setStorageSync("newsStartList", res.data)
        that.setData({
          posts_key: wx.getStorageSync("newsStartList")
        })
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        //弹出响应成功的操作
        wx.showToast({
          title: '刷新成功',
          icon: 'success',
          duration: 2000
        })
        wx.stopPullDownRefresh();
      }
    })

    //上面是刷新新闻的部分毫无问题，下面是刷新视频的部分，可能会存在问题
    wx.request({
      url: 'http://localhost:8080/user/findAllVideo',//具体是哪一个接口方法后期再说
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        wx.setStorageSync("videoStartList", res.data)
        that.setData({
          posts_VideoKey: wx.getStorageSync("videoStartList")
        })
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        //弹出响应成功的操作
        wx.showToast({
          title: '刷新成功',
          icon: 'success',
          duration: 2000
        })
        wx.stopPullDownRefresh();
      }
    })


  },

  onLoad: function () {

    /*this.setData({
      posts_key:postsData.postList,
      posts_VideoKey: postsVideoData.postVideoList
    })*/
    this.setData({
      posts_key:wx.getStorageSync("newsStartList"),
      //posts_VideoKey: postsVideoData.postVideoList
      posts_VideoKey: wx.getStorageSync("videoStartList")
    })
    


    /*
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })*/
  }

}
)
