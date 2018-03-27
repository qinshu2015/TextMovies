// pages/movies/movies.js
//接收传递过来的本地数据  require  --->postwords 用于下面引用
// 引入数据文件
var postwords = require('../../wordsDate/date.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //wordkey:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 展示页面数据  设置data值
    this.setData({
      wordkey: postwords.postlist
    })
      console.log(this.data)
  },
  // 点击跳转详情页  注意：不要写在onLoad函数里面
  // event表示接收事件
    OnpostData: function (event) {
      var postid = event.currentTarget.dataset.postid;
     // console.log(event.currentTarget.dataset)
      wx.navigateTo({
        url: 'words_detail/words_detail?id=' + postid
      })
  }
    
})