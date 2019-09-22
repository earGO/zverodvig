import React from 'react'
import {useDispatch} from 'react-redux';
import styled from "styled-components";
import { Layout, Menu,Anchor } from 'antd';
import * as navigationActions from '../module/RouterModule/actions';

const { Header, Content, Footer } = Layout;
const { Link } = Anchor;


const CustomHeader = styled(Header)`
display: flex;
  justify-content: space-between;
`

const CustomMenu = styled(Menu)`
justify-content: flex-end;
`

const CustomFooter = styled(Footer)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

const LeftCustonLink = styled(Link)`
  margin: 16px;
  font-size: 16px;
`

const ComplaitItem = styled(Menu.Item)`
background-color: red;
`

function AppLayout({children,...props}) {

    const dispatch = useDispatch()

    const changeRoute = newRoute => {
        dispatch(navigationActions.navigationClick('/' + newRoute.keyPath));
    };


    return (
        <Layout className="layout" >
            <CustomHeader style={{ background: 'white' }}>
                <Anchor>
                <LeftCustonLink href="https://t.me/kovro_chat" title="Обсуждение в ковре" />
                </Anchor>
                <CustomMenu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                    onClick={changeRoute}
                >
                    <Menu.Item key="register">Регистрация</Menu.Item>
                    <Menu.Item key="main">Добавить</Menu.Item>
                    <ComplaitItem key="complaint">Жалоба</ComplaitItem>
                </CustomMenu>
            </CustomHeader>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
            </Content>
            <CustomFooter >
                Дубъ — дерево. Роза — цвѣток. Олень — животное. Воробей — птица. Россiя — наше отечество. Права — принадлѣжат правообладателям. ©</CustomFooter>
        </Layout>
    )
}

export default AppLayout
