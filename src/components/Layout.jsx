import { Layout as LayoutTwo } from 'antd';
import 'antd/dist/antd.css';
import './Layout.css';
import MenuNavigation from './MenuNavigation';

const { Header, Footer, Sider, Content } = LayoutTwo;

function Layout({ children }) {
    return (
        <LayoutTwo>
                <MenuNavigation />
            <Sider>
                Sider
            </Sider>
            <LayoutTwo>
                <Header>Header</Header>
                <Content>
                    {children}
                </Content>
                <Footer>Footer</Footer>
            </LayoutTwo>
        </LayoutTwo>
    )
}

export default Layout;
