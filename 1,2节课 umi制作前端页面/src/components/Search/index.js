import styles from './style.less';
import React, {Component } from 'react'
import { SearchBar } from 'antd-mobile';

class Search extends Component{
    state = {
        value: '',
    };

    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render(){
        return(
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                onChange={this.onChange}
                cancelText={'搜索'}
            />
        )
    }
}

export default Search
