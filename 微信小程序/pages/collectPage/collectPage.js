// pages/collectPage/collectPage.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsClickId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://localhost:8080/user/findNewsFromCollectNews',
      method:'GET',
      header:{'content-type':'application/json'},
      success:function(res){
        that.setData({
          posts_key:res.data
        })
        console.log(that.data.posts_data)
      }
    })
  },
  //点击新闻列表里新闻的图片转到新闻的详情页
  newsClick: function (e) {
    console.log(e.target.id)
    //console.log(postsData.postList[e.target.id].date)
    wx.navigateTo({
      //这样实现外来数据堆对应的内容查找,需要在ml那里设置一个id，并且传输参数到具体的详情页那里；
      url: this.data.posts_key[e.target.id].link + "?id=" + e.target.id
    })
  },
  //点击收藏红后，将该新闻从收藏列表中删除
  collectCount:function(e){
    var that=this;
    this.setData({
      newsClickId:e.target.id*10/10+1
    })
    wx.request({
      url: 'http://localhost:8080/user/removeCollectNews?NewsID='+that.data.newsClickId,
      method:'GET',
      header:{'content-type':'application/json'},
      success:function(){
        console.log("删除收藏新闻成功！")
        //在这里还需要将收藏图标变为无色状态
        wx.request({
          url: 'http://localhost:8080/user/changeCollectImage?NewsID=' + that.data.newsClickId,
          method: "GET",
          dataType: 'json',
          header: { 'content-type': 'application/json' },
          success: function () {
            wx.request({
              url: 'http://localhost:8080/user/changeCollectCount?NewsID=' + that.data.newsClickId,
              method: 'GET',
              dataType: 'json',
              header: { 'content-type': 'application/json' },
              success: function () {
                that.flushFun()
              }

            })
            //onload函数不能实现我们想要的效果，所以我们可能还需要重新访问一遍url
            that.flushFun()
          }
        })


      }
    })
  },
  flushFun:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/user/findNewsFromCollectNews',
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        that.setData({
          posts_key: res.data
        })
        console.log(that.data.posts_data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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