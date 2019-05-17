//index.js
import {network} from "../../utils/network.js";
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that =this;
    //请求电影数据
    network.getMovieList({
      success: function (movies){
        // console.log(movies);
        that.setData({
          movies: movies
        })
      }
    });
    // wx.request({
    //   url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=7',
    //   success:function(res){
    //     var movies = res.data.subject_collection_items;
        
    //     that.setData({
    //       movies:movies
    //     });
    //   }
    // }),
    //请求电视剧数据
    network.getTvList({
      success: function (tvs) {
        that.setData({
          tvs: tvs
        });
      }
    });
      // wx.request({
      //   url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=7',
      //   success: function (res) {
      //     var tvs = res.data.subject_collection_items;
      //     console.log(tvs);
      //     that.setData({
      //       tvs: tvs
      //     });
      //   }
      // }),
    //请求综艺数据
    network.getShowList({
      success: function (shows) {
        that.setData({
          shows: shows
        });
      }
    });
      // wx.request({
      // url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=7',
      //   success: function (res) {
      //     var shows = res.data.subject_collection_items;
      //     console.log(shows);
      //     that.setData({
      //       shows: shows
      //     });
      //   }
      // })


  },
  getUserInfo: function(e) {
 
  }
})
