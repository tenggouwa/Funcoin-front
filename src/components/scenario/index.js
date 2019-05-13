import React, { Component } from 'react'
import './index.scss'

export default class Scenario extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const renderList = [{
            image: '',
            title: '论坛社区',
            content: '平台点卡、积分充值等'
        },
        {
            image: '',
            title: '游戏领域',
            content: '网游、手机游戏、棋牌等'
        },
        {
            image: '',
            title: '娱乐领域',
            content: '直播、微信小程序等'
        },
        {
            image: '',
            title: '电商领域',
            content: '微商、电商等'
        }]
        return (
            <div className="scenario" id="scenario">
                <div className="scenario-main">
                    <div className="scenario-main-top">
                        <h2>全场景支付</h2>
                        <p>提供支付接入方案，可在各种场景中流畅交易</p>
                    </div>
                    <div className="scenario-main-content">
                        {
                            renderList.map(item => (
                                <div className="scenario-main-item">
                                    <div className="scenario-img">
                                        {item.image}
                                    </div>
                                    <p>{item.title}</p>
                                    <span>{item.content}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
