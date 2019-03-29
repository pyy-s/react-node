import styles from './style.less';
import  React , {Component} from 'react'
import { connect } from "dva";
import { Avatar, Icon } from 'antd';

class GamIndexItem extends Component{
    render(){
        return(
            <div
                className={styles.wrap}
            >
                <div className={styles.headerImg}>
                    <Avatar size={30}  style={{ backgroundColor: '#87d068' }} icon="user" />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>张三</div>
                    <div className={styles.company}><div>腾讯集团</div> <div className={styles.type}>其他</div></div>
                    <div className={styles.des}>
                        产品描述：爱上大叔uahsudhas行货带Iuahsudhaidiask哈速度很快哈撒股东卡三个月开户送快递噶说过的话ad按规定爱上谁打工撒
                    </div>
                    <div className={styles.footer}>
                        <div>2019-2-2</div>
                        <div>评论 <Icon type="heart" /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GamIndexItem