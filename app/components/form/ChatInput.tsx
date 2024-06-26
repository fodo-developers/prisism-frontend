import { Icon } from '@iconify/react'
import { disassemble } from 'hangul-js'
import { useState } from 'react'
import styled from 'styled-components'
import StartButton from './StartButton'

const Bottom = styled.div`
  background-color: #262626;
  border: 1px solid #313131;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  width: 100%;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    margin: 0;
    border-radius: 0;
    padding: 15px 30px;
  }
`

const Chatinput = styled.input`
  background-color: #262626;
  text-align: left;
  width: 95%;
`

const StyledQuitButton = styled.button`
  text-align: center;
  margin-left: auto;
`

interface Props {
  onSendMessage: ({ content, type }: { content: string; type: string }) => void
  onQuit: () => void
  isChatting: boolean
  onStartChat: () => void
}

export default function Button({ onSendMessage, isChatting, onStartChat, onQuit }: Props) {
  const [value, setValue] = useState('')
  const [isComposing, setComposing] = useState(false)

  const sendToggle = () => {
    if (value.trim() !== '') {
      onSendMessage({ content: value, type: 'MESSAGE' })
      setValue('')
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !isComposing) {
      sendToggle()
    }

    if ((disassemble(value).length + 1) % 12 === 0 || disassemble(value).length === 1) {
      onSendMessage({ content: '', type: 'WRITE' })
    }
  }

  const handleComposition = (e: any) => {
    if (e.type === 'compositionstart') {
      setComposing(true)
    } else if (e.type === 'compositionend') {
      setComposing(false)
    }
  }

  return isChatting ? (
    <Bottom>
      <Chatinput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        placeholder="채팅을 입력해주세요."
      />
      <StyledQuitButton onClick={onQuit}>
        <Icon icon="material-symbols:door-open-outline-rounded" width={24} />
      </StyledQuitButton>
    </Bottom>
  ) : (
    <StartButton onClick={onStartChat} />
  )
}
