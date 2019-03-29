import React, { Component } from 'react'
import styles from './style.less';
import { Switch } from 'antd';

class CompanyDetailInfoPage extends Component{
    onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }
    render(){
        return(
            <div className={styles.wrap}>
                <div className={styles.d1}>
                    <div>点击右边按钮关注我们</div>
                    <div><Switch  onChange={this.onChange} /></div>
                </div>
                <div className={styles.d2}>
                    <div>
                        <div className={styles.d1}>公司名称：</div>
                        <div className={styles.d2}>阿里云</div>
                    </div>
                    <div>
                        <div className={styles.d1}>联 系 人 ：</div>
                        <div className={styles.d2}>马云</div>
                    </div>
                    <div>
                        <div className={styles.d1}>联系电话：</div>
                        <div className={styles.d2}>17777777777</div>
                    </div>
                    <div>
                        <div className={styles.d1}>公司地址：</div>
                        <div className={styles.d2}>杭州苏州阿西里州</div>
                    </div>
                    <div>
                        <div className={styles.d1}>公司业务：</div>
                        <div className={styles.d2}>淘宝，支付，共享单车</div>
                    </div>
                    <div>
                        <div className={styles.d1}>公司简介：</div>
                        <div className={styles.d2}>公司成立于0000年，是战神白起所创，后经历2000年，传给马云，，，</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CompanyDetailInfoPage