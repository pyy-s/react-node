import styles from './index.less';
import React, {Component } from 'react'
import  Search from '../../components/Search'
import  Condition from '../../components/Condition'
import { NoticeBar } from 'antd-mobile';
import  CompanyItem from '../../components/CompanyItem'

class IndexPage extends Component{
    render(){
        return(
            <div className={styles.wrap}>
                <Search />
                <Condition/>
                <NoticeBar mode="link" action={<span>添加</span>}>
                    Link demo for `actionText`.
                </NoticeBar>
                <NoticeBar mode="link" action={<span>添加</span>}  marqueeProps={{ loop: true}}>
                    ashdjkhasljdhasjklhdkjashlkdjhasjkhdklas123123123123123
                </NoticeBar>
                <div className={styles.body_wrap}>
                    <CompanyItem/>
                    <CompanyItem/>
                    <CompanyItem/>
                    <CompanyItem/>
                    <CompanyItem/>
                    <CompanyItem/>
                    <CompanyItem/>
                </div>
            </div>
        )
    }
}

export default IndexPage
