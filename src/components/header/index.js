import React, { Component } from 'react'
import './index.scss'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            menuList: [
                {
                    index: 0,
                    name: '首页',
                    jump: 'payment',
                    link: '',
                    active: true
                },
                {
                    index: 1,
                    name: '支付体验',
                    jump: 'payexperence',
                    link: '',
                    active: false
                },
                {
                    index: 2,
                    name: '产品特性',
                    jump: 'product',
                    link: '',
                    active: false
                },
                {
                    index: 3,
                    name: '新手引导',
                    jump: 'new',
                    link: '',
                    active: false
                },
                {
                    index: 4,
                    name: 'API接口',
                    jump: '',
                    link: 'www.baidu.com',
                    active: false
                },
                {
                    index: 5,
                    name: 'APP下载',
                    jump: '',
                    link: 'www.baidu.com',
                    active: false
                },
                {
                    index: 6,
                    name: '常见问题',
                    jump: '',
                    link: 'www.baidu.com',
                    active: false
                }
            ]
        }
    }
    componentDidMount() {
    }
    jumpToView = (id, index, link) => {
        if (id) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            })
            this.setState({ activeIndex: index })
        } else {
            window.open(link)
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-logo">logo</div>
                <ul className="header-menu">
                    {
                        this.state.menuList.map(item => (
                            <li
                                key={item.index}
                                className={this.state.activeIndex === item.index ? 'active' : ''}
                                onClick={() => { this.jumpToView(item.jump, item.index, item.link) }}
                            >
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
