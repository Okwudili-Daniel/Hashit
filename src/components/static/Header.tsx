import styled from "styled-components"
import react from "react"
import img from "../../asset/logo-black-12822108.svg"
import right from "../../asset/light-mode-btn-8c3556bd (1).svg"

const Header = () =>{
  return(
    <div>
      <Container>
        <Wrapper>
          <Log>
            <Img src = {img}/>
          </Log>
          <Right>
            <Img src = {right}/>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header;
const Img = styled.img``
const Right = styled.div`
/* width: 20%; */
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;`

const Log = styled.div`
  /* width: 20%; */
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;

/* background-color: #030303; */
`

const Container = styled.div`
width: 100%;
height: 70px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
/* background-color: green; */
padding: 20px 0px;
`