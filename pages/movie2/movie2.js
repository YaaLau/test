// pages/movie/movie.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            '../../imgs/roll1.png',
            '../../imgs/roll2.png',
            '../../imgs/roll3.png',
        ],

        banner: [{
                name: "0元看电影",
                img: "../../imgs/bpic01.png"
            }, {
                name: "签到必领券",
                img: "../../imgs/bpic02.png"
            }, {
                name: "赢PS4",
                img: "../../imgs/bpic03.png"
            }, {
                name: "开心麻花",
                img: "../../imgs/bpic04.png"
            },

        ],

        list: [{
            name: "扫毒",
            score: "8.6",
            img: "../../imgs/mpic01.png",
            date: "7月5日"
        }, {
            name: "绝杀慕尼黑",
            score: "9.6",
            img: "../../imgs/mpic02.png",
            date: "8月9日"

        }, {
            name: "哥斯拉2",
            score: "8.4",
            img: "../../imgs/mpic03.png",
            date: "6月28日"
        }, {
            name: "最好的我们",
            score: "8.4",
            img: "../../imgs/mpic04.png",
            date: "6月30日"
        }, {
            name: "蜘蛛侠：英雄远征",
            score: "9.5",
            img: "../../imgs/mpic05.png",
            date: "6月28日"
        }, {
            name: "千与千寻",
            score: "9.4",
            img: "../../imgs/mpic06.png",
            date: "6月28日"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png",
            date: "6月15日"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png",
            date: "7月16日"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png",
            date: "8月8日"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png",
            date: "7月23日"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png",
            date: "11月6日"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png",
            date: "10月17日"
        }],
    },

    target: function() {
        wx.navigateTo({
            url: '../movie/movie',
        })
    },
    // 地图功能
    map: function() {
        wx.getLocation({ //获取当前经纬度
            type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
            success: function(res) {
                wx.openLocation({ //使用微信内置地图查看位置。
                    latitude: 30.002353, //要去的纬度-地址
                    longitude: 104.661953, //要去的经度-地址
                    
                    name: "忠义镇",
                    address: '王二溪',
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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