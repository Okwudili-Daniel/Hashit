import React from "react";
import styled from "styled-components";
import long from "../../asset/waitlist-a41208d5.png"
const Hero = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <h1>Supercharge Your Mobile Life with <span>HashIT!</span></h1>
                    </Top>
                    <Buttom>
                        <Img src = {long}/>
                    </Buttom>
                    <Text>
                        <p>Level up your mobile experience with Hashit! Send money, buy airtime, pay utilities, save, earn, learn, connect with friends, explore our vibrant marketplace, advertise your biz, and win exciting giveaways - all in one place.</p>
                    </Text>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Hero;
const Text = styled.div`
text-align: center;
width: 60%;
margin-top:20px;

p{
    font-size: 30px;
}
`
const Img = styled.img`
    width: 100%;
`

const Buttom = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Top = styled.div`
width: 75%;
text-align: center;

h1{
    font-size: 90px;
    font-weight: 600;

    span{
        color:#ec5a24;
    }
}
`

const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #eeeeee;
`