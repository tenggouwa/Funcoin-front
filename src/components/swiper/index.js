/* eslint-disable */
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Img from '@/assets/img/message/1.png'
import './index.scss'
const coinList = [
  {
      index: 0,
      name: '且听风吟#在线社区创始人',
      image: Img,
      content: '我考察了很多个人收款方案，最终选择了小叮当。 小叮当支付不需要我输入支付宝的用户名和密码，交易资金不经过平台中转直接到我的账上，无需提现，让人非常放心。',
  },
  {
      index: 1,
      name: '且听风吟#在线社区创始人',
      image: Img,
      content: '我考察了很多个人收款方案，最终选择了小叮当。 小叮当支付不需要我输入支付宝的用户名和密码，交易资金不经过平台中转直接到我的账上，无需提现，让人非常放心。',
  },
  {
      index: 2,
      name: '且听风吟#在线社区创始人',
      image: Img,
      content: '我考察了很多个人收款方案，最终选择了小叮当。 小叮当支付不需要我输入支付宝的用户名和密码，交易资金不经过平台中转直接到我的账上，无需提现，让人非常放心。',
  },
  {
      index: 3,
      name: '且听风吟#在线社区创始人',
      image: Img,
      content: '我考察了很多个人收款方案，最终选择了小叮当。 小叮当支付不需要我输入支付宝的用户名和密码，交易资金不经过平台中转直接到我的账上，无需提现，让人非常放心。',
  }
]
export default class Example extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      var swiper = new Swiper('.swiper-container', {
        // loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
      });
  }
  filterUpDown = (amount) => {
      return amount.indexOf('-') !== -1
  }

  render() {
    return(
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
              coinList.map((item) => (
                  <div key={item.index} className="swiper-slide">
                      <div>
                          <img src={item.image} />
                      </div>
                      <p>{item.name}</p>
                      <span>{item.content}</span>
                  </div>
              ))
          }
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    )
  }
}