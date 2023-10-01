import React from 'react'
import { styled } from 'styled-components';
import {GoPerson} from "react-icons/go"
import {HiOutlineMail} from "react-icons/hi"
import {BiLogoFacebookCircle} from "react-icons/bi"

const Join = () => {
  return (
    <div>
      <ConTainer>
        <Wrapper>
          <TextBox>
            <h1>Join the waitlist for <span>HashIT!</span>
</h1>
          </TextBox>
          <SigIn>
            <Icon><GoPerson/></Icon>
            <Input type="Name" placeholder='Full Name'/>
    {/* <input type="Name" placeholder='Name' /> */}
          </SigIn>
          <SigIn>
            <Icon><HiOutlineMail/></Icon>
            <Input type="Name" placeholder='Email Address'/>
    {/* <input type="Name" placeholder='Name' /> */}
          </SigIn>

          <Div>
                Get Notify when HashIT is alive
          </Div>

          <Iconholder>
                <BiLogoFacebookCircle/>
          </Iconholder>

        </Wrapper>
      </ConTainer>
    </div>
  )
}

export default Join;
const Iconholder = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Div = styled.div`
width: 20%;
height: 50px;
background-color: black;
padding: 10px 0px;
display: flex;
color: white;
align-items: center;
justify-content: center;
border-radius: 10px;
`

const Input = styled.input`
border: none;
flex: 1;
margin-left: 10px;

/* border: 1px solid gray; */
/* background-color: green; */
`

const Icon=styled.div`
  
`
const SigIn=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 67px;
width: 500px;
border: 1px solid gray;
margin-bottom:20px;
  /* background-color: green; */
  
input{
  height: 80%;
  width:80%;
  border-radius: 5px;
  /* border:none; */
}
`
const TextBox=styled.div`
font-size: 40px;
font-weight: 400;
text-align: center;
span{
 color:  #EC5A24;
}
`
const Wrapper=styled.div`
height: 500px;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const ConTainer=styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`