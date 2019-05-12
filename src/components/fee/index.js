import React, { Component } from 'react'
import './index.scss'

export default class Fee extends Component {
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
            <div className="fee" id="fee">
                <div className="fee-main">
                    <div className="fee-main-top">
                        <h2>阶梯费率</h2>
                        <p>无任何月费，没有交易不收取任何费用。本月费率按上个自然月交易额每月1号自动计算，避免因交易额波动频繁更改套餐。</p>
                    </div>
                    <div className="fee-main-content">
                        {
                            renderList.map(item => (
                                <div className="fee-main-item">
                                    <div className="fee-img">
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
