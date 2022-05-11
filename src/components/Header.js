import React, { useState } from 'react' ;
import styled from 'styled-components';
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';
import { Close } from '@styled-icons/ionicons-outline/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';



function Header() {
    const [burgerStatus,  setBurgerState] = useState(false);
    const cars = useSelector(selectCars);
// * TS - 2:09    
  return (
    <Container>
        <a href="#">
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car, index)=>(
            <a key={index} href="#">{car}</a>
            ))}
        </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerState(true)}/> 
                {/* used styled-icons instead of material ui */}
            
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerState(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index)=>(
                 <li key={index} ><a href="#">{car}</a></li>
            ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-betweenove;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
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

    @media(max-width: 768px) {
        display: none;
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
 
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5 s;  
        li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);

            a {
                font-weight: 600;
            }
        }
`
const CustomClose = styled(Close)`
        height: 25px;
        cursor: pointer;
        font-weight: 600;
        
`
const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;

`