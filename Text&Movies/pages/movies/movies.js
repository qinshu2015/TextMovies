// pages/movies/movies.js
// 引入文件
var movieData = require('../../wordsDate/movies_data.js')

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
   

    // 展示页面数据  设置data值
    this.setData({
      mpovieskey: movieData.moviesData
    })
   // console.log(mpovieskey)
    console.log(this.data.mpovieskey[0].subjects[0].title)
   // console.log(this.data.mpovieskey[0].subjects[1].title)
   // console.log(this.data.mpovieskey[0].subjects[0].rating.stars)
    var title = this.data.mpovieskey[0].subjects[0].title
    


  },

  // exdata:function(douban){
  //   // 把获取到的数据全部提取出来
  //   var movies = [];
  //   //var idx=1;
  //   //var thisdatas = this.data
  //   for (var idx in douban.thisdatas) {
  //     var subjucts = douban.thisdatas[idx]
  //     var title = subjucts.title   
  //     var temp = {
  //       // stars: util.convertToStarsArray(subject.rating.stars),
  //       title: title,
  //       average: subject.rating.average,
  //       coverageUrl: subject.images.large,
  //       movieId: subject.id
  //     } 
  //     movies.push(temp)
  //   }
  //     movies.push(temp)
  //     console.log(movies)
  // }
 

})