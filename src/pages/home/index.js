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
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Header />
                <Payment />
                <About />
                <Payexperence />
                <Product />
                <Scenario />
                <Fee />
                <Members />
                <New />
                <Footer />
            </div>
        )
    }
}
