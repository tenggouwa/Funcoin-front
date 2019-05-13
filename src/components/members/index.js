import React, { Component } from 'react'
import Swiper from '@/components/swiper'
import './index.scss'

export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="member" id="member">
                <div className="member-main">
                    <Swiper />
                </div>
            </div>
        )
    }
}
