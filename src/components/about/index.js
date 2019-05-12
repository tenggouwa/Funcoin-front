import React, { Component } from 'react'
import Img from '@/assets/img/about.png'
import './index.scss'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="about" id="about">
                <div className="about-main">
                    <div className="about-main-left">
                        <img src={Img} alt="" />
                    </div>
                    <div className="about-main-right">
                        <h3>无需签约支付宝、微信支付</h3>
                        <p>小叮当支付通过独创的移动端APP推送消息探测手段，用户付款后立即回调API接口，资金直接进入您的支付宝或微信个人账号，安全可靠。不需企业资质，不需备案操作，一切从简。</p>
                        <p>您只需有支付宝、微信个人账户，就可以对接完成即时到帐接口。</p>
                        <p>并能实时通知到您的自定义网址，从用户付款到您后台收到付款通知，过程只需1秒。</p>
                    </div>
                </div>
            </div>
        )
    }
}
