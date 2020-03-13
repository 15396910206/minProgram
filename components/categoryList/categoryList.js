// components/categoryList/categoryList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: "全部商品"
      },
      {
        name: "新品上架"
      },
      {
        name: "女装区"
      }, {
        name: "男装区"
      }, {
        name: "童装区"
      }, {
        name: "棉服"
      }, {
        name: "羽绒服"
      }, {
        name: "清仓专区"
      }, {
        name: "美容护肤"
      }, {
        name: "鞋履区"
      }, {
        name: "箱包区"
      }, {
        name: "生活家居"
      }
    ],
    selectIndex: 0,
  },
  selectItem(e) {
    console.log(e);
    this.setData({
      selectIndex: e.currentTarget.dataset.index
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