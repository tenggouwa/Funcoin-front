import React, { Component } from 'react'
import Header from '@/components/header'
import Banner from '@/components/banner'
import './home.scss'

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
            <div>
                <Header />
                <Banner />
                123
            </div>
        )
    }
}
