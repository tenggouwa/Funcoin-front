import React, { Component } from 'react'
import Apply from '../../assets/img/alipay.jpg'
import Weixin from '../../assets/img/weixin.jpg'
import './index.scss'

export default class Payexperence extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="payexperence" id="payexperence">
                <div className="payexperence-main">
                    <div className="payexperence-main-top">
                        <h2>支付体验</h2>
                        <p>体验接入后您用户的付款流程，收款码会变成您个人的收款码，款项直接进入您的支付宝微信账户，并且付款后立即回调</p>
                    </div>
                    <div className="payexperence-main-content">
                        <div className="payexperence-main-item">
                            <img src={Apply} alt="" />
                            <div className="payexperence-pay">
                                <p>支付宝体验</p>
                                <span>5分钱回调体验</span>
                                <div>立即支付</div>
                            </div>
                        </div>
                        <div className="payexperence-main-item">
                            <img src={Weixin} alt="" />
                            <div className="payexperence-pay">
                                <p>支付宝体验</p>
                                <span>5分钱回调体验</span>
                                <div>立即支付</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
