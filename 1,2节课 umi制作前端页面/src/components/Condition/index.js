import styles from './style.less';
import React, { Component } from 'react';
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
const operation = Modal.operation;

class Condition extends Component{
    render(){
        return(
            <div  className={styles.wrap}>
                <div
                    onClick={() => operation([
                        { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
                        { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
                        { text: '33333', onPress: () => console.log('置顶聊天被点击了') },
                    ])}
                >区域位置</div>
                <div
                    onClick={() => operation([
                        { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
                        { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
                    ])}
                >办公写字楼</div>
                <div>公司规模</div>
                <div>公司业务</div>
            </div>
        )
    }
}

export default Condition