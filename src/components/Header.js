import React from 'react' ;
import styled from 'styled-components';
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline'

function Header() {

  return (
    <Container>
        <a href="#">
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu/> 
            {/* used styled-icons instead of  material ui */}

        </RightMenu>
    
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap
        cursor: pointer;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuOutline)`
    cursor: pointer;
    width: 25px;
`
 