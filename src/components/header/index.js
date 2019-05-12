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
            <div className="header">
                <div className="header-logo">logo</div>
                <ul className="header-menu">
                    <li>首页</li>
                    <li>支付体验</li>
                    <li>产品特性</li>
                    <li>新手引导</li>
                    <li>API接口</li>
                    <li>APP下载</li>
                    <li>常见问题</li>
                </ul>
            </div>
        )
    }
}
