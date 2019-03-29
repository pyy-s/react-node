import styles from './style.less';
import GamTopNav from '../../components/GamTopNav'

function BasicLayout(props) {
    return (
        <div className={styles.wrap}>
            <GamTopNav />
            {props.children}
        </div>
    );
}

export default BasicLayout;
