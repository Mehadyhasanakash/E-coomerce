import { Search } from '@mui/icons-material';
import React from 'react'
import stlyed from 'styled-components'



const Container = stlyed.div`
height: 60px;


`;
const Language = stlyed.span`
  font-size: 15px;
  cursor: pointer;
`;
const Wrapper = stlyed.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
const Left = stlyed.div`
 flex: 1;
 display: flex;
 align-items: center;

`;
const Center = stlyed.div`
flex: 1;
text-align: center;

`;
const Right = stlyed.div`
flex: 1;

`;

const SeachContainer = stlyed.div`
border: 1px solid lightgray;
display: flex;
 align-items: center;
 padding: 5px;
 margin-left: 25px


`;

const Input = stlyed.input`
border: none;
`;
const Logo = stlyed.h1`
    font-weight: blod;
`;

const Register = stlyed.span`
~`;


const Navber = () => {



    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language> Eng </Language>
                        <SeachContainer>
                            <Input/>
                            <Search/>
                        </SeachContainer>
                    </Left>
                    <Center><Logo>E-commerce</Logo></Center>
                    <Right>Right</Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navber
