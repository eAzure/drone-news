// pages/mine/mine.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    toolsItem:[
      {
        itemId:0,
        imageSrc:"/images/评论.png",
        itemName:"评论",
        url:""
      },
      {
        itemId:1,
        imageSrc:"/images/帖子.png",
        itemName:"帖子",
        url:""
      },
      {
        itemId:2,
        imageSrc:"/images/收藏.png",
        itemName:"收藏",
        url:""
      },
      {
        itemId:3,
        imageSrc:"/images/足迹.png",
        itemName:"足迹",
        url:""
      }
    ]
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /*跳转界面*/
  toManager:function(){
    wx.navigateTo({
      url: '/pages/manager/manager',
    })
  },
  /*工具跳转界面*/
  toolsClickJudge:function(e){
    if (e.target.id==2){
      //console.log('收藏')
      this.collectToolsCilck()
    }
  },

  //具体的工具跳转页面
  collectToolsCilck:function(){
    wx.navigateTo({
      url: '/pages/collectPage/collectPage',
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