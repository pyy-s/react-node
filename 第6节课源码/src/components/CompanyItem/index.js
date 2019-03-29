import React, {Component} from 'react'
import styles from './style.less'
import { Avatar } from 'antd';
import { Tag } from 'antd-mobile';
import router from 'umi/router';
import HeaderImg from '../../assets/img/yay.jpg'

class CompanyItem extends Component {
    handleClick = () => {
        router.push('/index/detail/info');
    }
    render() {
        return (
            <div
                className={styles.wrap}
                onClick={this.handleClick}
            >
                <div className={styles.header_img_wrap}>
                    <Avatar size={50}  style={{ backgroundColor: '#87d068' }} icon="user" />
                </div>

                <div className={styles.rightContent}>
                    <div>公司：阿里云</div>
                    <div>规模：10-20人</div>
                    <div>业务：云服务，淘宝，科技</div>
                    <div>地址：杭州阿里云公司</div>
                    <div>信息：阿里云成立于1999年十月份，马云是ceo，马化腾是国家主席,,,,</div>
                    <div>标签：<Tag >产品 2 &</Tag> <Tag >关注 2 &</Tag></div>
                </div>
            </div>
        )
    }
}

export default CompanyItem