// pages/writeNews/writeNews.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    "newsTitle":"",
    "imgSrc":"",
    "shortContent":"",
    "content":"",
    "currentTime":"",
    "newsID":""
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
//获取标题栏的内容
  titleGet:function(e){
    this.setData({
      newsTitle:e.detail.value
    })
  },
//获取照片来源
  imgGet:function(e){
    this.setData({
      imgSrc:e.detail.value
    })
  },
//获取新闻简介
  shortcontentGet:function(e){
    this.setData({
      shortContent:e.detail.value
    })
  },
//获取新闻内容
  contentGet:function(e){
    this.setData({
      content:e.detail.value
    })
  },

  publishClick:function(){
    
    var that = this;
    wx.request({
      url: 'http://localhost:8080/user/findNewsNum',
      method: "GET",
      dataType: 'json',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          "newsID": res.data + 1
        })
        console.log("新闻序号：" + that.data.newsID + "新闻标题：" + that.data.newsTitle + "照片来源：" + that.data.imgSrc + "新闻简介：" + that.data.shortContent + "新闻内容：" + that.data.content + "作者头像：" + that.data.userInfo.avatarUrl)
        that.publicInnerClick()
      }
    })
    

  },
    publicInnerClick:function(){
    //获取当前时间戳 
    var that=this;
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
    //获取整个时间的格式
    var currentTime = Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
    console.log(Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s);
    that.data.currentTime=currentTime;
    

    /**
     * 发送网络请求
     */
    wx.request({
      url: 'http://localhost:8080/user/addNews?NewsID=' + that.data.newsID + '&NewsTitle=' + that.data.newsTitle + '&NewsContent=' + that.data.shortContent + '&CoverImage=' + that.data.imgSrc + '&ReadCount=' + 0 + '&CreatTime=' + that.data.currentTime + '&NewsConcreteContent=' + that.data.content + '&CollectCount=' + 0 + '&CollectImage=' + '/images/收藏.png' + '&ViewImage=' + '/images/爱看.png' + '&Link=' + '/pages/newsPage/newsPage' + '&AuthorImage=' + that.data.userInfo.avatarUrl,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success:function(res){
        console.log(res.data)
        wx.showToast({
          title: '新闻发表成功',
          icon: 'success',
          duration: 2000
        })
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