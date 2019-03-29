import styles from './index.less';
import React, {Component } from 'react'
import FooterNav from '../components/FooterNav'

class BasicLayout extends Component{
    render(){
        return(
            <div className={styles.wrap}>
                <div className={styles.content}>
                    {this.props.children}
                </div>
                <div className={styles.footer_nav}>
                    <FooterNav/>
                </div>
            </div>
        )
    }
}

export default BasicLayout;
