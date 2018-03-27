// pages/words_detail/words_detail.js
// 加载外部数据
var postwords = require('../../../wordsDate/date.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 就收当前传递的id值
    var postId = options.id;

    var postData = postwords.postlist[postId];
    //console.log(postData)
    this.setData({
      postData: postData,
      currentPostId: postId
    })
    this.panduan();

  },

  panduan:function(){
    // 加载时判断是否收藏过该商品
    wx.getStorage({
      key: 'key',
      success: function (res) {
        console.log(res.data)
        // var that = this;
        // var judge = res.data;
        // console.log(that.data)
        // judge = !judge
      }
    })
  },

  // 收藏按钮
  // 点击更换图片，是否收藏
  collecTion: function (event){
    // 提示语
    this.showModaled();
    // 确定按钮
    
  },


  // 收藏 —— 提示
  showModaled:function(){
    var that = this
    wx.showModal({
      title: '收藏',
      content: this.data.judge ?"取消收藏该文章？":"收藏该文章",
      success: function (res) {
        if (res.confirm) {
          // 确定按钮
         that.setData({
           judge: !that.data.judge
         })
        //  如果收藏有值  做一个本地储存
         if (that.data.judge){
           wx.setStorage({
             key: "key",
             data: "疲惫生活中的英雄梦想！"
           })
         }
        } else if (res.cancel) {
          // 取消按钮
        }
      }
    })
  },

  // 分享
  shares:function(){
    this.onShareAppMessage(res);
  }


})