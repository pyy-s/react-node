import CompanyDetailTopNav from '../../../components/CompanyDetailTopNav'
import styles from './style.less'

function BasicLayout(props) {
    return (
        <div>
            <CompanyDetailTopNav />
            {props.children}
        </div>
    );
}

export default BasicLayout;
