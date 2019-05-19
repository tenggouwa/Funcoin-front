import React, { Component } from 'react'
import Header from '@/components/header'
import Payment from '@/components/payment'
import About from '@/components/about'
import Payexperence from '@/components/payexperence'
import Product from '@/components/product'
import Scenario from '@/components/scenario'
import Fee from '@/components/fee'
import Members from '@/components/members'
import New from '@/components/new'
import Footer from '@/components/footer'
import './home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeList: [{
                id: 'payment',
                index: 1,
                dom: <Payment />,
                active: false,
            },
            {
                id: 'about',
                index: 2,
                dom: <About />,
                active: false,
            },
            {
                id: 'payexperence',
                index: 3,
                dom: <Payexperence />,
                active: false,
            },
            {
                id: 'product',
                index: 4,
                dom: <Product />,
                active: false,
            },
            {
                id: 'scenario',
                index: 5,
                dom: <Scenario />,
                active: false,
            },
            {
                id: 'fee',
                index: 6,
                dom: <Fee />,
                active: false,
            },
            {
                id: 'member',
                index: 7,
                dom: <Members />,
                active: false,
            },
            {
                id: 'new',
                index: 8,
                dom: <New />,
                active: false,
            }]
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        for (let i = 0; i < this.state.homeList.length; i += 1) {
            if (this.filterScroll(this.state.homeList[i].id)) {
                this.state.homeList[i].active = true
            } else {
                this.state.homeList[i].active = false
            }
        }
    }
    filterScroll = (id) => {
        const rect = document.getElementById(id).getBoundingClientRect()
        console.log(rect)
        if (rect.top < window.innerHeight && rect.bottom > 0 &&
            rect.left < window.innerWidth && rect.right > 0) {
            return true
        }
        return false
    }
    render() {
        return (
            <div className="home">
                <Header />
                {
                    this.state.homeList.map(item => (
                        <React.Fragment key="item.index">
                            {item.dom}
                        </React.Fragment>
                    ))
                }
                {/* <Payment />
                <About />
                <Payexperence />
                <Product />
                <Scenario />
                <Fee />
                <Members />
                <New /> */}
                <Footer />
            </div>
        )
    }
}
