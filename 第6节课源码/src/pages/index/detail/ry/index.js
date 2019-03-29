import React, { Component } from 'react'
import styles from './style.less';
import { Avatar } from "antd";

class CompanyDetailRyPage extends Component{
    render(){
        return(
            <div className={styles.wrap}>
                <div className={styles.item}>
                    <div className={styles.item_d1}>
                        <Avatar size={26} style={{marginRight:'10px'}}  icon="user" />
                        <div>
                            <div>老板</div>
                            <div>李四</div>
                        </div>
                    </div>
                    <div>17777777777</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_d1}>
                        <Avatar size={26} style={{marginRight:'10px'}}  icon="user" />
                        <div>
                            <div>老板</div>
                            <div>李四</div>
                        </div>
                    </div>
                    <div>17777777777</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_d1}>
                        <Avatar size={26} style={{marginRight:'10px'}}  icon="user" />
                        <div>
                            <div>老板</div>
                            <div>李四</div>
                        </div>
                    </div>
                    <div>17777777777</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_d1}>
                        <Avatar size={26} style={{marginRight:'10px'}}  icon="user" />
                        <div>
                            <div>老板</div>
                            <div>李四</div>
                        </div>
                    </div>
                    <div>17777777777</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_d1}>
                        <Avatar size={26} style={{marginRight:'10px'}}  icon="user" />
                        <div>
                            <div>老板</div>
                            <div>李四</div>
                        </div>
                    </div>
                    <div>17777777777</div>
                </div>
            </div>
        )
    }
}
export default CompanyDetailRyPage