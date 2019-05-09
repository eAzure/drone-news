// pages/newsPage/newsPage.js
//引入本地数据
//var postsData = require('../../data/posts-data.js')
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clearInput:"",
    userInfo: {},
    optionsID:"",
    commentID:"",
    currentTime:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    var that=this;
    this.data.commentID=options.id*10/10+1;
    wx.request({
      url: 'http://localhost:8080/user/findNewsComment?NewsID='+this.data.commentID,
      method:'GET',
      dataType:'json',
      header: { 'content-type': 'application/json' },
      success:function(res){
        console.log(res.data)
        that.setData({
          comment:res.data
        })
        console.log(that.data.comment)
      }
    })
    console.log(options.id),
    this.data.optionsID=options.id,
    this.setData({
      postsData: wx.getStorageSync("newsStartList")
    })
    var postsData=this.data.postsData//用来解决下面如果不定义的话postsData会报错为not defined
    this.setData({
      // title: postsData.postList[options.id].title,
      // date:postsData.postList[options.id].date,
      // imgSrc:postsData.postList[options.id].imgSrc,
      // avatar:postsData.postList[options.id].avatar,
      // content:postsData.postList[options.id].content,
      // concrete_content: postsData.postList[options.id].concrete_content,
      // reading: postsData.postList[options.id].reading,
      // collection: postsData.postList[options.id].collection,
      // view_image: postsData.postList[options.id].view_image,
      // collect_image: postsData.postList[options.id].collect_image
      
      title:postsData[options.id].title,
      date:postsData[options.id].creatTime,
      imgSrc:postsData[options.id].coverImage,
      avatar:postsData[options.id].authorImage,
      content:postsData[options.id].newsContent,
      concrete_content:postsData[options.id].newsConcreteContent,
      reading:postsData[options.id].readCount,
      collection:postsData[options.id].collectCount,
      view_image:postsData[options.id].viewImage,
      collect_image:postsData[options.id].collectImage
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //获取评论内容
  shortcontentGet: function (e) {
    this.setData({
      shortContent: e.detail.value
    })
  },
  //发表评论的方法
  publishClick:function(e){
    var that=this;
    //获取当前时间戳 
    var that = this;
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();
    //获取整个时间的格式，格式是按照mysql数据库里DATE设置的
    var currentTime = Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
    console.log(Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s);
    that.data.currentTime = currentTime;
    //先获取评论的条数
    wx.request({
      url: 'http://localhost:8080/user/findCommentNum',
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success:function(res){
        that.setData({
          commentNum:res.data*10/10+1
        })
        //获取成功后就可以发表评论了，我们在这里需要用户的信息、内容、日期
        wx.request({
          url: 'http://localhost:8080/user/addComment?CommentID=' + that.data.commentNum + '&NewsID=' + that.data.commentID+'&NewsComment='+that.data.shortContent+'&AuthorID='+that.data.userInfo.avatarUrl+'&CommentDate='+that.data.currentTime,
          method:'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
          },
          success:function(res){
            if(res.data!=0){
              console.log("发表评论成功！")
              //在这里更新数据
              wx.request({
                url: 'http://localhost:8080/user/findNewsComment?NewsID=' + that.data.commentID,
                method: 'GET',
                dataType: 'json',
                header: { 'content-type': 'application/json' },
                success: function (res) {
                  console.log(res.data)
                  that.setData({
                    comment: res.data
                  })
                  console.log(that.data.comment)
                }
              })

              //这里为更新数据完成后，出现弹窗提示
              wx.showToast({
                title: '评论发表成功',
                icon: 'success',
                duration: 2000
              })
              //这里为更新数据完成后，将输入框里面的内容清空
              that.setData({
                clearInput:""
              })

            }
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  //点击收藏按钮，收藏加1，并且变红的操作
  //点击收藏按钮，实现收藏功能并实现图标变红的操作，点击取消则取消收藏，因为为测试号，所以并不考虑与用户相关的和实现状态切换的了
  collectCount: function () {
    //先试试图标变红吧，通过后台来进行改变并且这样还能保持对用户的记忆
    //只需要修改数据库里的内容后，后重新设置数据即可
    //颜色按钮变了，我们现在需要让数值加1了！
    var that = this
    this.setData({
      newsCollectID: that.data.optionsID * 10 / 10 + 1
    })
    wx.request({
      url: 'http://localhost:8080/user/changeCollectImage?NewsID=' + that.data.newsCollectID,
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success: function () {
        console.log(that.data.newsCollectID)
        wx.request({
          url: 'http://localhost:8080/user/changeCollectCount?NewsID=' + that.data.newsCollectID,
          method: 'GET',
          dataType: 'json',
          header: { 'content-type': 'application/json' },
          success: function () {
            that.currentFlush()
          }

        })
        //onload函数不能实现我们想要的效果，所以我们可能还需要重新访问一遍url
        that.currentFlush()
      }
    })
  },

  //实现动态刷新的效果函数
  currentFlush: function () {
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
          postsData: wx.getStorageSync("newsStartList")
        })
        var postsData = that.data.postsData//用来解决下面如果不定义的话postsData会报错为not defined
        that.setData({
          // title: postsData.postList[options.id].title,
          // date:postsData.postList[options.id].date,
          // imgSrc:postsData.postList[options.id].imgSrc,
          // avatar:postsData.postList[options.id].avatar,
          // content:postsData.postList[options.id].content,
          // concrete_content: postsData.postList[options.id].concrete_content,
          // reading: postsData.postList[options.id].reading,
          // collection: postsData.postList[options.id].collection,
          // view_image: postsData.postList[options.id].view_image,
          // collect_image: postsData.postList[options.id].collect_image

          title: postsData[that.data.optionsID].title,
          date: postsData[that.data.optionsID].creatTime,
          imgSrc: postsData[that.data.optionsID].coverImage,
          avatar: postsData[that.data.optionsID].authorImage,
          content: postsData[that.data.optionsID].newsContent,
          concrete_content: postsData[that.data.optionsID].newsConcreteContent,
          reading: postsData[that.data.optionsID].readCount,
          collection: postsData[that.data.optionsID].collectCount,
          view_image: postsData[that.data.optionsID].viewImage,
          collect_image: postsData[that.data.optionsID].collectImage
        })
      }
    })
  },






  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})