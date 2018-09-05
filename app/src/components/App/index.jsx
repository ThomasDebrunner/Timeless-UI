import React, {Component} from 'react'
import s from './style.css'
import Clock from '../Clock'

export default class App extends Component {
    render() {
        return (
            <div className={s['main-layout']}>
                <Clock nRows={9} nCols={15} />
            </div>
        )
    }
}
