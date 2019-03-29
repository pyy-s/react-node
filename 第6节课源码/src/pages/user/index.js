import styles from './style.less';
import { Avatar, Icon } from 'antd';
import  React , {Component} from 'react'
import { connect } from "dva";
import global from '../../config'
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: global.iconUrl
});


@connect((state)=>({
    user:state.user
}))
class User extends Component{
    render(){
        return(
            <div className={styles.wrap}>
                <div className={styles.d1}>
                    <Avatar size={50} style={{ backgroundColor: '#87d068' }} icon="user" />
                    <p>username</p>
                    <p>杭州阿里云公司员工</p>
                </div>
                <div className={styles.d2}>
                    <div>
                        <IconFont type="icon-icon-test" style={{ fontSize: '45px'}} />
                        <p>我的资料</p>
                    </div>
                    <div>
                        <IconFont type="icon-wodejifen" style={{ fontSize: '45px'}} />
                        <p>我的积分</p>
                    </div>
                    <div>
                        <IconFont type="icon-shangcheng1" style={{ fontSize: '45px'}} />
                        <p>我的商城</p>
                    </div>
                    <div>
                        <IconFont type="icon-vip" style={{ fontSize: '45px'}} />
                        <p>VIP会员</p>
                    </div>
                </div>
                <div className={styles.d3}>
                    <div>我关注的公司<Icon type="right" /></div>
                    <div>我关注的同行<Icon type="right" /></div>
                    <div>每日签到赚积分<Icon type="right"/></div>
                    <div>我的签到记录<Icon type="right"/></div>
                    <div>邀请好友赚积分<Icon type="right" /></div>
                    <div>我的邀请记录<Icon type="right" /></div>
                    <div>添加客户赚积分<Icon type="right" /></div>
                    <div>我的客户列表<Icon type="right" /></div>
                    <div>发布信息赚积分<Icon type="right" /></div>
                    <div>我的信息列表<Icon type="right"/></div>
                </div>
            </div>
        )
    }
}

export default User