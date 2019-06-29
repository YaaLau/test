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
            date: "7月5日"
        }, {
            name: "哥斯拉2",
            score: "8.4",
            img: "../../imgs/mpic03.png"

        }, {
            name: "最好的我们",
            score: "8.4",
            img: "../../imgs/mpic04.png"
        }, {
            name: "蜘蛛侠：英雄远征",
            score: "9.5",
            img: "../../imgs/mpic05.png"
        }, {
            name: "千与千寻",
            score: "9.4",
            img: "../../imgs/mpic06.png"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png"
        }],

        wonderful: [{
                name: "李云迪",
                user: "钢琴演奏会",
                img: "../../imgs/bpic01"
            },
            {
                name: "爱有引力",
                user: "超感体验展",
                img: "../../imgs/bpic01"
            },
            {
                name: "蔡琴",
                user: "温柔发声",
                img: "../../imgs/bpic01"
            }

        ]


    },

    target: function() {
        wx.navigateTo({
            url: '../movie2/movie2',
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