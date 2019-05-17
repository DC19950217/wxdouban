//存放URL
const globalUrls = {
  //首页数据
  movieList:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  showList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  //更多数据
  movieDetail:"https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail:"https://m.douban.com/rexxar/api/v2/tv/",
  showDetail:"https://m.douban.com/rexxar/api/v2/tv/",
  //标签数据
  movieTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/tags?count=8"
  },
  tvTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
  },
  showTags:function(id){
    return this.tvTags(id);
  },
  //短评数据
  movieComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start;
  },
  tvComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },
  showComments: function (id, start = 0, count = 3) {
    return this.tvComments(id, start, count);
  },
  //搜索数据
  searchUrl: function (q) {
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q
  }
}
export { globalUrls}