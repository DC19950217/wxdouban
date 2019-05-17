import { network } from "../../utils/network.js";
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var type = options.type;
    var id = options.id;
    that.setData({
      id:id,
      type:type
    });
      // console.log(id);
    network.getItemDetail({
      type:type,
      id:id,
      success:function(item){
        console.log(item);
        var genres = item.genres;
        genres = genres.join("/");
        item.genres=genres;
        //演员
        var actors = item.actors;
        var actorNames = [];
        if(actors.length>3){
          actors = actors.slice(0,3);
        }
       for(var i = 0;i<actors.length;i++){
         var actor = actors[i];
         actorNames.push(actor.name);
       }
       actorNames = actorNames.join("/");
        //导演
        var director = item.directors;
        var directors = [];
        for(var i =0;i<director.length;i++){
          directors.push(director[i].name);
        }
        directors = directors.join("/");
        var authors = directors + "(导演)/" + actorNames +"/(演员)";
        item.authors = authors;
        that.setData({
          item:item,
        });
      }
    });
    //标签
    network.getItemTags({
      type:type,
      id:id,
      success:function(tags){
        // console.log(tags);
        that.setData({
          tags:tags
        })
      }
    });
    //评论
    network.getItemComments({
      type:type,
      id:id,
      success:function(data){
        console.log(data);
        var totalComment = data.total;
        var comments = data.interests;
        that.setData({
          totalComment: totalComment,
          comments: comments
        });
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
    wx.pageScrollTo({
      scrollTop: 0,
    });
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