import React, { Component } from 'react'
import  styles from './style.less'
import { Avatar, Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class UserPage extends Component{
    render(){
        return(
            <div className={styles.wrap}>
                <div className={styles.d1}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size={50}/>
                    <p>username</p>
                    <p>杭州阿里云公司员工</p>
                </div>
                <div className={styles.d2}>
                    <div><IconFont type="icon-icon-test"  /><p>我的资料</p></div>
                    <div><IconFont type="icon-wodejifen"  /><p>我的积分</p></div>
                    <div><IconFont type="icon-shangcheng1" /><p>我的商城</p></div>
                    <div><IconFont type="icon-vip" /><p>VIP会员</p></div>
                </div>
                <div className={styles.d3}>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                    <div>我关注的公司 <Icon type="right" /></div>
                </div>
            </div>
        )
    }
}

export default UserPage