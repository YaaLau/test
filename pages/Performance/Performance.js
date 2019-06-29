// pages/Performance/Performance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


    imgUrls: ['../../imgs/performance/轮播图 (1).png', '../../imgs/performance/轮播图 (2).png', '../../imgs/performance/轮播图 (3).png', '../../imgs/performance/轮播图 (4).png', '../../imgs/performance/轮播图 (5).png', '../../imgs/performance/轮播图 (6).png', ],

    // classification: [{
    //     name: "演唱会",
    //     img: "../../imgs/performance/功能分类 (1).png"
    //   }, {
    //     name: "话剧歌剧",
    //     img: "../../imgs/performance/功能分类 (2).png"
    //   },
    //   {
    //     name: "休闲",
    //     img: "../../imgs/performance/功能分类 (3).png"
    //   }, {
    //     name: "音乐会",
    //     img: "../../imgs/performance/功能分类 (4).png"
    //   }, {
    //     name: "戏曲艺术",
    //     img: "../../imgs/performance/功能分类 (5).png"
    //   }, {
    //     name: "音乐节",
    //     img: "../../imgs/performance/功能分类 (6).png"
    //   }, {
    //     name: "亲子/舞蹈",
    //     img: "../../imgs/performance/功能分类 (7).png"
    //   }, {
    //     name: "开心麻花",
    //     img: "../../imgs/performance/功能分类 (8).png"
    //   }, {
    //     name: "周末特价",
    //     img: "../../imgs/performance/功能分类 (9).png"
    //   }, {
    //     name: "更多精彩",
    //     img: "../../imgs/performance/功能分类 (10).png"
    //   }
    // ],
    wonderful: [{
        name: "李云迪",
        user: "钢琴演奏会",
        img: "../../imgs/performance/发现精彩 (1).png"
      },
      {
        name: "爱有引力",
        user: "超感体验展",
        img: "../../imgs/performance/发现精彩 (2).png"
      },
      {
        name: "蔡琴",
        user: "温柔发声",
        img: "../../imgs/performance/发现精彩 (3).png"
      }

    ],

    music: ["../../imgs/performance/推荐 (1).png", "../../imgs/performance/推荐 (2).png", "../../imgs/performance/推荐 (3).png", "../../imgs/performance/推荐 (4).png", "../../imgs/performance/推荐 (5).png", "../../imgs/performance/推荐 (6).png", "../../imgs/performance/推荐 (7).png", "../../imgs/performance/推荐 (8).png", "../../imgs/performance/推荐 (9).png"]
  },




  onmap: function() {
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function(res) {
        wx.openLocation({ //使用微信内置地图查看位置。
          latitude: 30.6417705697, //要去的纬度-地址
          longitude: 104.0665608644, //要去的经度-地址
          name: "成都市武侯区人民南路三段",
          address: '成都市武侯区人民南路三段'
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function(options) {
     let row;
     let that=this;
     wx.request({
       url: 'http://localhost:8888/get',
       method: 'GET',
     

       success: function(res) {
         console.log(res);

         //将后台服务器的数据传递到自定义参数row中
         row=res.data;
        //  打印row图片和文字数据 用于测试
        console.log(row[0].img);
         console.log(row[0].name);
        //将row中的加入到前端的数组classification中
         that.setData({
           classification:row
         })



       },



       fail: function(res) {

         console.log("失败！");
       }
     })


 },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})