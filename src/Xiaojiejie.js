import React, { Component, Fragment } from 'react'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['按摩', '推背', '沐足']
        }
    }
    /* componentWillMount() {
        console.log('1-componentWillMount----------将要挂载')
    }
    componentDidMount() {
        console.log('3-componentDidMount-----------挂载完成');
    }
    shouldComponentUpdate() {
        console.log('4-shouldComponentUpdate----组件更新前触发')
        return true
    }
    componentWillUpdate() {
        console.log('5-componentWillUpdate----组件更新了')
    }
    componentDidUpdate() {
        console.log('6-componentWillUpdate----组件更新完成');
    } */
    componentDidMount() {
        console.log('3-componentDidMount-----------挂载完成');
        axios.get('https://www.zhengbeining.com/api/article/typelist').then(res => {
            console.log(res)
        })
    }
    render() {
        console.log('2-render------------挂载中')
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange} ref={(input) => { this.input = input }} />
                    <button onClick={this.addList}>增加服务</button>
                </div>

                <ul ref={(ul) => { this.ul = ul }}>
                    {this.state.list.map((item, index) => {
                        return (
                            <XiaojiejieItem list={item} index={index} delItem={this.delItem} key={index}></XiaojiejieItem>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
    inputChange = () => {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList = () => {
        this.setState({ list: [...this.state.list, this.state.inputValue], inputValue: '' }, () => {
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
    delItem = (index) => {
        console.log(index);
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }

}

export default Xiaojiejie