import styled from "styled-components"
import React from "react"

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: white;
`

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface SpanProps {
  index: number
  backgroundColor: string
}

const Span = styled.span.attrs<SpanProps>(({ index, backgroundColor }) => {
  return {
    style: {
      transform: `rotate(${90 * index}deg)`,
      background: backgroundColor,
    }
  }
}) <SpanProps>`
  position: absolute;
  width: 250px;
  height: 250px;
  display: block;
  border-radius: 50%;
  transform-origin: 125px 0;
  filter: blur(80px);
  opacity: 0.75;
`

const Glass = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 1px solid #fff;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transform: skewX(345deg);
  }

  & h2 {
    padding: 20px;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.2);
    color: #333;
    text-align: end;
    width: 100%;
  }

  & h2 i {
    font-weight: 300;
    font-size: 0.75em;
    font-style: normal;
  }
`

function GlassEffectCard() {
  const colorRef = React.useRef<string[]>([
    '#01b2fe', '#ff008c', '#ffcd00', '#00c456'
  ])

  return (
    <Body>
      <Card>
        {
          [...Array(4).keys()].map((e, i) => {
            return <Span index={i} backgroundColor={colorRef.current[i]}></Span>
          })
        }
        <Glass>
          <h2>Muhammad Irshad<br></br><i>+91 987 654</i></h2>
        </Glass>
      </Card>
    </Body>
  )
}

export default GlassEffectCard