import React, { Component } from 'react'
import './index.scss'

export default class Product extends Component {
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
            title: '创新',
            content: '通过独创的移动端推送消息探测手段，无官方封号风险，打造最佳个人收款接口。'
        },
        {
            image: '',
            title: '安全',
            content: '不需提供支付宝登录账号及密码，资金直接进入您本人的账号，不需提现操作，无平台跑路风险。'
        },
        {
            image: '',
            title: '极速',
            content: '用户付款后立即回调自定义接口，并跳转至指定页面，全程免人工操作，体验清晰顺畅。'
        },
        {
            image: '',
            title: '低价',
            content: '无任何月费，仅收取低至0.4%交易服务费，没有订单不收取任何费用。'
        },
        {
            image: '',
            title: '便捷',
            content: '个人可直接接入，不需企业资质，不需繁琐的备案操作，接口清晰，应用配置简单，一切从简。'
        },
        {
            image: '',
            title: '稳定',
            content: '全力保障99%以上的超高接口回调成功率，全程免人工操作，绝不在关键的地方掉链子。'
        }]
        return (
            <div className="product" id="product">
                <div className="product-main">
                    <div className="product-main-top">
                        <h2>产品特性</h2>
                        <p>安全可靠，极速稳定</p>
                    </div>
                    <div className="product-main-content">
                        {
                            renderList.map(item => (
                                <div className="product-main-item">
                                    <div className="product-icon">
                                        <i className={`iconfont ${item.image}`} />
                                    </div>
                                    <div className="product-content">
                                        <p>{item.title}</p>
                                        <span>{item.content}</span>
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
