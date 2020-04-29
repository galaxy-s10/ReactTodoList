import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    // 组件第一次存在于dom中，函数是不会被执行的
    // 如果函数已经存在与dom中，函数才会执行
    /* componentWillReceiveProps() {
        console.log('componentWillReceiveProps-----------------组件接受props前触发执行');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount-----------------组件将要被删除的时候执行');
    } */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('性能优化', nextProps.list, this.props.list)
        if (this.props.list !== nextProps.list) {
            return true
        } else {
            return false
        }
    }
    render() {
        console.log('child----------render挂载中');
        return (
            <li onClick={this.delItem}>{this.props.avname}为你服务-{this.props.list}</li>
        );
    }
    delItem = () => {
        console.log(this.props.index)
        this.props.delItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    list: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func
}
XiaojiejieItem.defaultProps = {
    avname: '嘻嘻嘻'
}
export default XiaojiejieItem;