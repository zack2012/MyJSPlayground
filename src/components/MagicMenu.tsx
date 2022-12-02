import { useRef, useState } from "react"
import styled from "styled-components"
import {
  homeOutline,
  personOutline,
  chatbubbleOutline,
  cameraOutline,
  settingsOutline
} from "ionicons/icons"
import { IonIcon } from '@ionic/react'

const clr = '#222327'

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vh;
  background-color: ${clr};
`

const Navivation = styled.div`
  width: 400px;
  height: 70px;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  & ul {
    display: flex;
    width: 350px;
  }
`

const Li = styled.li`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;

  & a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }
`

interface ActiveProps {
  active: boolean
}

const IconSpan = styled.span.attrs<ActiveProps>(props => (
  {
    style: {
      transform: props.active ? `translateY(-35px)` : null
    }
  }
))<ActiveProps>`
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: ${clr};
`

const TextSpan = styled.span.attrs<ActiveProps>(props => (
  {
    style: {
      transform: `translateY(${props.active ? 10 : 20}px)`,
      opacity: props.active ? 1 : 0,
    }
  }
))<ActiveProps>`
  position: absolute;
  color: ${clr};
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
`

const Indicator = styled.div.attrs<{index: number}>(({index}) => ({
  style: {
    left: `${25 + 70 * index}px`
  }
}))<{index: number}>`
  position: absolute;
  top: -50%;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: #29fd53;
  border: 6px solid ${clr};
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 ${clr};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    right: -20px;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 ${clr};
  }
`

export default function MagicMenu() {
  const textsRef = useRef<string[]>([
    'Home', 'Profile', 'Message', 'Photos', 'Settings'
  ])

  const iconsRef = useRef<string[]>([
    homeOutline, personOutline, chatbubbleOutline, cameraOutline, settingsOutline
  ])

  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <Body>
      <Navivation>
        <ul>
          {
            [...Array(5).keys()].map((e, i) => {
              return (
                <>
                  <Li key={i} onClick={() => {
                    setSelectedIndex(i)
                  }}>
                    <a href="#">
                      <IconSpan active={i === selectedIndex}>
                        <IonIcon icon={iconsRef.current[i]}></IonIcon>
                      </IconSpan>
                      <TextSpan active={i === selectedIndex}>{textsRef.current[i]}</TextSpan>
                    </a>
                  </Li>
                </>
              )
            })
          }
          <Indicator index={selectedIndex}/>
        </ul>
      </Navivation>
    </Body>
  )
}