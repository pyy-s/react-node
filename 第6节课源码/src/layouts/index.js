import styles from './index.less';
import FooterNav from '../components/FooterNav';
import GamTopNav from '../components/GamTopNav';
import CompanyDetailTopNav from '../components/CompanyDetailTopNav';

function BasicLayout(props) {

    if(RegExp(/^\/index\/detail/).exec(props.location.pathname)){
        return(
            <div className={styles.wrap}>
                {props.children}
            </div>
        )
    }
    //
    // if(RegExp(/^\/gam/).exec(props.location.pathname)){
    //     return(
    //         <div className={styles.wrap}>
    //             <GamTopNav/>
    //             <div className={styles.content}>
    //                 {props.children}
    //             </div>
    //             <div className={styles.footerNav}>
    //                 <FooterNav/>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.footerNav}>
                <FooterNav/>
            </div>

        </div>
    );
}

export default BasicLayout;
