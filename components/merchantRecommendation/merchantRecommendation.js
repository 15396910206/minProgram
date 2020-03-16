// components/merchantRecommendation/merchantRecommendation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperList: [{
        list: [{
            src: '../../image/16pic_4679363_b.jpg'
          },
          {
            src: '../../image/Cg-4WVE4lvyIHszpAABsHDCstNAAAFjeQAVpiMAAGw0289.jpg'
          },
          {
            src: '../../image/Cg-4WVE4lvyIHszpAABsHDCstNAAAFjeQAVpiMAAGw0289.jpg'
          }
        ]
      },
      {
        list: [{
            src: '../../image/16pic_4679363_b.jpg'
          },
          {
            src: '../../image/Cg-4WVE4lvyIHszpAABsHDCstNAAAFjeQAVpiMAAGw0289.jpg'
          },
          {
            src: '../../image/Cg-4WVE4lvyIHszpAABsHDCstNAAAFjeQAVpiMAAGw0289.jpg'
          }
        ]
      }
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetails(){
      wx.navigateTo({
        url: '/pages/details/details',
      })
    }
  }
})