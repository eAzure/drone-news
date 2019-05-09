// pages/manager/manager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex:0,
    navbarTitle:[
      "新闻添加",
      "新闻删除",
      "视频添加",
      "视频管理"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 点击导航栏
   */
  onNavBarTap:function(event){
    //获取点击的navbar的index
    let navbarTapIndex=event.currentTarget.dataset.navbarIndex
    //设置data属性中的navbarActiveIndex为当前点击的navbarIndex
    this.setData({
      navbarActiveIndex:navbarTapIndex
    })
  },
  onBindAnimationFinish:function({detail}){
    this.setData({
      navbarActiveIndex:detail.current
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