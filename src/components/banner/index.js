import React, { Component } from 'react'
import './index.scss'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="banner" id="banner">
                <div className="banner-main">
                    <div className="banner-main-content">
                        <p>个人创业者、个体户</p>
                        <p>微信、支付宝支付即时到账收款平台</p>
                        <span>自身不做收单和清算，只做微信、支付宝支付个人接口对接的技术服务</span>
                        <div>立即开通</div>
                    </div>
                </div>
            </div>
        )
    }
}
