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
            active: false,
            id: 1,
            h1: '1%',
            mountTrade: '月交易额1万以下',
            content1: '0月费',
            content2: 'API接入技术指导',
            content3: 'API对接安全性检查',
            content4: '7 x 12 小时在线客服',
            content5: '7 x 24 小时紧急电话客服支持'
        },
        {
            active: true,
            id: 2,
            h1: '0.8%',
            mountTrade: '月交易额1万-3万',
            content1: '0月费',
            content2: 'API接入技术指导',
            content3: 'API对接安全性检查',
            content4: '7 x 12 小时在线客服',
            content5: '7 x 24 小时紧急电话客服支持'
        },
        {
            active: false,
            id: 3,
            h1: '0.6%',
            mountTrade: '月交易额3万-7万',
            content1: '0月费',
            content2: 'API接入技术指导',
            content3: 'API对接安全性检查',
            content4: '7 x 12 小时在线客服',
            content5: '7 x 24 小时紧急电话客服支持'
        },
        {
            active: false,
            id: 4,
            h1: '0.4%',
            mountTrade: '月交易额7万元以上',
            content1: '0月费',
            content2: 'API接入技术指导',
            content3: 'API对接安全性检查',
            content4: '7 x 12 小时在线客服',
            content5: '7 x 24 小时紧急电话客服支持'
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
                                <div className="fee-main-item" key={item.id}>
                                    <div className={item.active ? 'fee-item-top fee-item-top-active' : 'fee-item-top'}>
                                        <div>
                                            <p>{item.h1}</p>
                                            <span>{item.mountTrade}</span>
                                        </div>
                                        <p className="mountFee">{item.content1}</p>
                                    </div>
                                    <div className="fee-item-bottom">
                                        <p>{item.content2}</p>
                                        <p>{item.content3}</p>
                                        <p>{item.content4}</p>
                                        <p>{item.content5}</p>
                                        <div>立即加入</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
