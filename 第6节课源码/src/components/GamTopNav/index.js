import styles from './style.less';
import  React , {Component} from 'react'
import { connect } from "dva";
import { Tabs, WhiteSpace } from 'antd-mobile';
import router from 'umi/router';

class TopNav extends Component{
    render(){
        const tabs = [
            { title: '全部' ,url:'/gam'},
            { title: '我的关注' ,url:'/gam/two'},
            { title: '官方发布' ,url:'/gam/three'},
            { title: '贷款产品' ,url:'/gam/four'},
            { title: '同行转单' ,url:'/gam/five'},
            { title: '同行交流会',url:'/gam/six' },
            { title: '经验分享',url:'/gam/seven' },
            { title: '一起跑同行',url:'/gam/eight' },
            { title: '招聘信息',url:'/gam/nine' },
        ];
        return(
            <Tabs
                tabs={tabs}
                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
                onChange={(a,b)=>{
                    router.push(a.url);
                }}
            >
            </Tabs>
        )
    }
}

export default TopNav