import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import s from './Timer.styl'
import Button from '../Button/Button.jsx'

export default class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isWorking: false,
            time: '00:23:40',
            timeout: undefined
        }

        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }

    render() {
        return (
            <section className={s.wrapper}>
                <div className={s.time}>{this.state.time}</div>

                <div>
                    {
                        !this.state.isWorking ? 
                        <Button 
                            icon="play_arrow" 
                            onClick={this.handleStart} 
                        />
                        : 
                        <Button 
                            icon="pause" 
                            onClick={this.handleStop} 
                        />
                    }
                    
                    <Button icon="refresh" />
                    <Button icon="edit"/>
                </div>
            </section>
        )
    }
    
    handleStart() {
        this.setState({ isWorking: true })

        let time = this.state.time.split(':')
        let arr = []

        time.map((item, i) =>{
            arr[i] = Number(item)
        })

        let [h, m, s] = arr

        if (s == 0) {
            if (m == 0) {
                if (h == 0) {
                    alert("Время вышло")
                    //window.location.reload()
                    return
                }
                h--
                m = 59

                if (h < 10) h = "0" + h
            }
            m--
            if (m < 10) m = "0" + m
            s = 59
        } else s--
        if (s < 10) s = "0" + s
        if (h < 10) h = "0" + h
        if (m < 10) m = "0" + m

        let result = [h, m, s].join(':')
        this.setState({ time: result })

        const t = setTimeout(this.handleStart, 1000)

        this.setState({ timeout: t })
    }

    handleStop() {
        clearTimeout(this.state.timeout)
        this.setState({ isWorking: false })
    }

}