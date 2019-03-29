import React, { Component } from 'react'
import styles from './style.less';
import Condition from '../../components/Condition'
import { NoticeBar, Icon } from 'antd-mobile';
import CompanyItem from '../../components/CompanyItem'
import Search from  '../../components/Search'

class IndexPage extends Component{
    render(){
        return(
            <div>
                <Search/>
                <Condition/>
                <NoticeBar mode="link" action={<span>添加</span>}>
                    如您的公司还没有加入，请点右方
                </NoticeBar>
                <NoticeBar mode="link" action={<span>添加</span>}  marqueeProps={{ loop: true }}>
                    为方便沟通反馈与建议，请点击右方添加客服微信
                </NoticeBar>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/><CompanyItem/><CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>


            </div>
        )
    }
}
export default IndexPage