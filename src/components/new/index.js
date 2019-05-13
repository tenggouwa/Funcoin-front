import React, { Component } from 'react'
import Process from '../../assets/img/process.png'
import './index.scss'

export default class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="new" id="new">
                <div className="new-main">
                    <div className="new-main-top">
                        <h2>新手引导</h2>
                    </div>
                    <div className="new-main-content">
                        <img src={Process} alt="" />
                        <br />
                        <div>立即开户</div>
                    </div>
                </div>
            </div>
        )
    }
}
