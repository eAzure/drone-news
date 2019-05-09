// pages/news/news.js
//var postsData = require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsIDid: 0
  },
  //点击新闻列表里新闻的图片转到新闻的详情页
  newsClick: function (e) {
    console.log(e.target.id)
    //console.log(postsData.postList[e.target.id].date)
    wx.navigateTo({
      //这样实现外来数据堆对应的内容查找,需要在ml那里设置一个id，并且传输参数到具体的详情页那里；
      url: this.data.posts_key[e.target.id].link + "?id=" + e.target.id
    })
    this.likeCount(e.target.id)
  },
  //每一次点击新闻后，使阅读量+1
  likeCount:function(idNews){
    this.setData({
      newsIDid: idNews * 10 / 10 + 1
    });
    console.log(this.data.newsIDid);
    var that = this
    wx.request({
      url: 'http://localhost:8080/user/changeLikeCollect?NewsID=' + that.data.newsIDid,
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success: function () {
        console.log("浏览的新闻ID：" + that.data.newsIDid)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_key: wx.getStorageSync('newsStartList')
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