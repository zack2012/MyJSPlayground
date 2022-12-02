import styled from "styled-components"

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(45deg, #fbda61, #ff5acd);
`

const Card = styled.div`
  position: relative;
  width: 350px;
  height: 190px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  transition: 0.5s;
  &:hover {
    height: 450px;
  }
`

const ImageBox = styled.div`
  position: absolute;
  left: 50%;
  top: -50px;
  z-index: 1;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  transition: 0.5s;
  overflow: hidden;

  ${Card}:hover & {
    width: 250px;
    height: 250px;
  }

  &::before {
    content: "";
    background: linear-gradient(0deg, transparent, red, red);
    width: 100%;
    height: 100%;
    position: absolute;
    left: -50%;
    top: -50%;
    transform-origin: right bottom;
    animation: rotation 6s linear infinite;
  }

  &::after {
    content: "";
    background: linear-gradient(0deg, transparent, red, red);
    width: 100%;
    height: 100%;
    position: absolute;
    left: -50%;
    top: -50%;
    transform-origin: right bottom;
    animation: rotation 6s linear -3s infinite; 
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

const ImgDiv = styled.div`
  position: absolute;
  background-color: gray;
  inset: 2px;
  z-index: 1;
  border-radius: 10px;
`

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`

const Details = styled.div`
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  
  & h2 {
    font-size: 1.25em;
    font-weight: 600;
    color: #555;
    line-height: 1.2em;
  }

  & h2 span {
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.5;
  }
  transform: translateY(150px);

  ${Card}:hover & {
    transform: translateY(0);
  }
`

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  & h3 {
    font-size: 1em;
    color: #555;
    line-height: 1.2em;
    font-weight: 600;
  }

  & h3 span {
    font-size: 0.85em;
    font-weight: 400;
    opacity: 0.5;
  }
`

const ActionButton = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
    background: #ff5f95;
    color: #fff;
    cursor: pointer;
  }

  & button:nth-child(2) {
    border: 1px solid #999;
    color: #999;
    background: #fff;
  }
`

function BeautifulCard() {
  return (
    <Body>
      <Card>
        <ImageBox>
          <ImgDiv>
            <Img src={process.env.PUBLIC_URL + '/logo192.png'} />
          </ImgDiv>
        </ImageBox>
        <Content>
          <Details>
            <h2>Alina Smith</h2><br></br><span>Senior UX/UI Designer</span>
            <Data>
              <h3>342<br></br><span>Posts</span></h3>
              <h3>120k<br></br><span>Followers</span></h3>
              <h3>285<br></br><span>Following</span></h3>
            </Data>
            <ActionButton>
              <button>Follow</button>
              <button>Message</button>
            </ActionButton>
          </Details>
        </Content>
      </Card>
    </Body>
  )
}

export default BeautifulCard