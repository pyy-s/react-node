import styles from './style.less';
import  React , {Component} from 'react'
import { connect } from "dva";
import GamIndexItem from '../../components/GamIndexItem'

class GamPage extends Component{
    render(){

        return(
            <div>
                <GamIndexItem/>
                <GamIndexItem/>
                <GamIndexItem/>
                <GamIndexItem/>
                <GamIndexItem/>
                <GamIndexItem/>
                <GamIndexItem/>
            </div>
        )
    }
}

export default GamPage