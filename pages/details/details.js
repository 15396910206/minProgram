// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
        src: '../../image/16pic_4679363_b.jpg'
      },
      {
        src: '../../image/Cg-4WVE4lvyIHszpAABsHDCstNAAAFjeQAVpiMAAGw0289.jpg'
      }
    ],
    isShow: false,
    tuList: [{
        name: '图文详情'
      },
      {
        name: '热卖推荐'
      },
    ],
    tuIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '快鱼xxx商品',
    })
  },
  selectTu(e) {
    this.setData({
      tuIndex: e.currentTarget.dataset.index
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