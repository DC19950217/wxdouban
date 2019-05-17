import {
  globalUrls
} from "urls.js";
//封装网络请求
const network = {
  //获取电影列表
  getMovieList: function(params) {
    params.type = "movie";
    this.getItemList(params);
  },
  //获取电视剧列表
  getTvList: function(params) {
    params.type = "tv";
    this.getItemList(params);
  },
  //获取综艺列表
  getShowList: function(params) {
    params.type = "show";
    this.getItemList(params);
  },
  //获取列表
  getItemList: function(params) {
    var url = "";
    if (params.type === 'movie') {
      url = globalUrls.movieList;
    } else if (params.type === 'tv') {
      url = globalUrls.tvList;
    } else {
      url = globalUrls.showList;
    }
    var count = params.count ? params.count : 7;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function(res) {
        var items = res.data.subject_collection_items;
        var itemsCount = items.length;
        var left = itemsCount % 3;
        if (left === 2) {
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },

  //获取详情页数据
  getItemDetail: function(params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieDetail + id;
    } else if (type === "tv") {
      url = globalUrls.tvDetail + id;
    } else if (type === "show") {
      url = globalUrls.showDetail + id;
    } else {
      return;
    }
    wx.request({
      url: url,
      success: function(res) {
        var item = res.data;
        if (params.success) {
          params.success(item);
        }
      }
    })
  },
  //获取影视标签
  getItemTags: function(params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieTags(id);
    } else if (type === "tv") {
      url = globalUrls.tvTags(id);
    } else if (type === "show") {
      url = globalUrls.showTags(id);
    } else {
      return;
    }
    wx.request({
      url: url,
      success:function(res){
        var tags = res.data.tags;
        if(params.success){
          params.success(tags);
        }
      }
    })
  },
  getItemComments: function (params){
    var type = params.type;
    var id = params.id;
    var start = params.start?params.start:0;
    var count = params.count?params.count:3;
    var url="";
    if (type === "movie") {
      url = globalUrls.movieComments(id,start,count);
    } else if (type === "tv") {
      url = globalUrls.tvComments(id, start, count);
    } else if (type === "show") {
      url = globalUrls.showComments(id, start, count);
    } else {
      return;
    }
    wx.request({
      url: url,
      success:function(res){
        var data = res.data;
        if(params.success){
          params.success(data);
        }
      }
    })
  }
}
export {
  network
}