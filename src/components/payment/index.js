import React, { Component } from 'react'
import './index.scss'

export default class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="payment" id="payment">
                <div className="payment-main">
                    <div className="payment-main-left">
                        <p>个人即时到账支付接口</p>
                        <span>
                            免签约，不需要企业帐号，不托管资金、收款直接到达您的支付宝和微信帐户，100%安全。付款后立即回调，无需等待，流程顺畅。
                            <br />
                            打造最佳个人收款接口，为您创业助力！
                        </span>
                    </div>
                    <div className="payment-main-right">
                        <div>立即体验</div>
                    </div>
                </div>
            </div>
        )
    }
}
