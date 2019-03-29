import styles from './style.less';
import  React , {Component} from 'react'
import { connect } from "dva";
import { Tabs, WhiteSpace,  NavBar, Icon  } from 'antd-mobile';
import router from 'umi/router';

class CompanyDetailTopNav extends Component{
    handleBack = () => {
        router.push('/')
    }
    render(){
        const tabs = [
            { title: '介绍' ,url:'/index/detail/info'},
            { title: '产品' ,url:'/index/detail/product'},
            { title: '人员' ,url:'/index/detail/ry'},
            { title: '关注' ,url:'/index/detail/gz'}
        ];
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick = {this.handleBack}
                >公司详情</NavBar>

                <Tabs
                    tabs={tabs}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
                    onChange={(a,b)=>{
                        router.push(a.url);
                    }}
                >
                </Tabs>
            </div>

        )
    }
}

export default CompanyDetailTopNav