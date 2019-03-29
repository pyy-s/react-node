import React, { Component } from 'react';
import styles from './style.less';
import { Avatar } from 'antd';
import { Tag } from 'antd-mobile';

class CompanyItem extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.left_body}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size={50}/>
                </div>
                <div className={styles.right_body}>
                    <div>公司：阿里云</div>
                    <div>规模：10-20人</div>
                    <div>业务：云服务，淘宝，蚂蚁金服</div>
                    <div>地址：杭州阿里大楼</div>
                    <div>描述：阿里云这里是描述休尼希，阿里云这里是描述休尼希阿里云这里是描述休尼希</div>
                    <div>
                        标签：<Tag onClose={() => {console.log('onClose');}}>产品 2 &</Tag>
                        <Tag onClose={() => {console.log('onClose');}}>关注 2 &</Tag>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyItem;