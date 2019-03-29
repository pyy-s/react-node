import styles from './style.less';
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import router from 'umi/router';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1017556_5h4iql0zj2.js',
});

class FooterNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
    }

    handlePress = (a,b) => {
        this.setState({
            selectedTab: a,
        });
        router.push(b);
    }

    render() {
        return (
            <TabBar
                noRenderContent={true}
            >
                <TabBar.Item
                    title="公司名录"
                    key="Life"
                    icon={<IconFont type="icon-mulu" style={{ fontSize: '24px' }}/>}
                    selectedIcon={<IconFont type="icon-mulu-copy" style={{ fontSize: '24px' }}/>}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.handlePress('blueTab','/')}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<IconFont type="icon-wenjianjia" style={{ fontSize: '24px' }}/>}
                    selectedIcon={<IconFont type="icon-wenjianjia-copy" style={{ fontSize: '24px' }}/>}
                    title="同行名录"
                    key="Koubei"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<IconFont type="icon-shejiao" style={{ fontSize: '24px' }}/>}
                    selectedIcon={<IconFont type="icon-shejiao-copy" style={{ fontSize: '24px' }}/>}
                    title="同行社交"
                    key="Friend"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<IconFont type="icon-shangcheng" style={{ fontSize: '24px' }}/>}
                    selectedIcon={<IconFont type="icon-shangcheng-copy" style={{ fontSize: '24px' }}/>}
                    title="交易商城"
                    key="my"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.handlePress('yellowTab','/mall')}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<IconFont type="icon-gerenzhongxin" style={{ fontSize: '24px' }}/>}
                    selectedIcon={<IconFont type="icon-gerenzhongxin-copy" style={{ fontSize: '24px' }}/>}
                    title="用户中心"
                    key="userCenter"
                    selected={this.state.selectedTab === 'userCenter'}
                    onPress={() => this.handlePress('userCenter','/user')}
                >

                </TabBar.Item>
            </TabBar>
        );
    }
}

export default FooterNav;
