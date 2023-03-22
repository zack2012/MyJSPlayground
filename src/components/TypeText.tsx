import React from "react";
import styled from "styled-components";

interface TypeTextProps {
  message: string;
}

const Div = styled.div`
  background-color: #fff;
  color: #000;
  width: 500px;
  min-height: 40px;
`

export const TypeText: React.FC<TypeTextProps> = ({ message }) => {
  const [text, setText] = React.useState<string>('')
  React.useEffect(() => {
    let currentText = ""
    let i = 0
    let timer: NodeJS.Timeout
    timer = setInterval(() => {
      if (i < message.length) {
        const char = message[i++]
        if (char === '\n') {
          
        } else {
          currentText += char
          setText(currentText)
        }
      } else {
        clearInterval(timer)
      }
    }, 30)
    
  }, [message])
  return (
    <Div dangerouslySetInnerHTML={{__html: text}}></Div>
  )
}