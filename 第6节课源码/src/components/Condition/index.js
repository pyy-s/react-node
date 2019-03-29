import React, { Component } from "react";
import styles from'./style.less'
import { Modal } from 'antd-mobile';
const operation = Modal.operation;
class Condition extends Component{
    render(){
        return(
            <div className={styles.Condition_wrap}>
                <ul>
                    <li
                        onClick={() => operation([
                            { text: '二七区', onPress: () => console.log('标为未读被点击了') },
                            { text: '金水区', onPress: () => console.log('置顶聊天被点击了') },
                            { text: '惠济区', onPress: () => console.log('置顶聊天被点击了') },
                            { text: '管城区', onPress: () => console.log('置顶聊天被点击了') },
                            { text: '高新区', onPress: () => console.log('置顶聊天被点击了') },
                            { text: '经开区', onPress: () => console.log('置顶聊天被点击了') },
                        ])}
                    >
                        区域位置
                    </li>
                    <li
                        onClick={() => operation([
                            { text: '高档', onPress: () => console.log('标为未读被点击了') },
                            { text: '低档', onPress: () => console.log('置顶聊天被点击了') }
                        ])}
                    >
                        办公写字楼
                    </li>
                    <li>公司规模</li>
                    <li>公司业务</li>
                </ul>

            </div>
        )
    }
}

export default Condition