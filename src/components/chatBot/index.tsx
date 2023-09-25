import React, { useRef, useState, useEffect } from 'react'
import { CHAT_DATA, SET_NO_RESULT_OBJECT } from '@src/constants'
import type {
  MessageType,
  ResponseItem,
  ChatObj,
  RenderChatType
} from '@src/interface'
import ChatCard from './chatCard'
import send from '@src/assets/send.png'

// const setNoResultObj: MessageType = {
//   isBot: true,
//   responses: [
//     {
//       sender: 'bot',
//       message: `Pardon me i didn't understand the message , plz try again`
//     }
//   ]
// }

// interface RenderChatType {
//   chatObj: MessageType
//   onCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void
// }

const RenderChat: React.FC<RenderChatType> = ({ chatObj, onCheckChange }) => {
  if (chatObj.isBot) {
    return (
      <div className='bot-message'>
        {chatObj?.responses?.map((item: ResponseItem, index) => {
          if (item.message) return <div key={index}>{item.message}</div>
          if (item.options) {
            return (
              <div className='my-4 flex gap-1 flex-wrap' key={index}>
                {item.options.map((option, optionIndex) => {
                  if (option.text.toLowerCase().startsWith('-')) {
                    return (
                      <div key={optionIndex}>
                        <input
                          type='checkbox'
                          onChange={onCheckChange}
                          value={option.value}
                        />
                        {option.text}
                      </div>
                    )
                  }
                  if (option.text.toLowerCase().startsWith('@')) {
                    return (
                      <div key={optionIndex}>
                        <div className='flex gap-2 capitalize'>
                          <input
                            type='checkbox'
                            onChange={onCheckChange}
                            value={option.value}
                          />
                          {option.value}
                        </div>
                        <img
                          src={option.text.split('@').join('')}
                          width={150}
                        />
                      </div>
                    )
                  } else {
                    return (
                      <div
                        className=' grow   shrink-0	 basis-full	'
                        key={optionIndex}
                      >
                        {option.text}
                      </div>
                    )
                  }
                })}
              </div>
            )
          }
          return <div key={index}>{chatObj.text}</div>
        })}
      </div>
    )
  }
  return (
    <div className='overflow-auto'>
      <div>{chatObj.text}</div>
    </div>
  )
}

// Setting default message when there is no response from bot
const setDefaultMessage = (data: { defaultMessage: string | null }) => {
  const lastBotChat: MessageType = {
    isBot: true,
    responses: [
      {
        sender: 'bot',
        message: data?.defaultMessage || ''
      }
    ]
  }
  return data?.defaultMessage ? lastBotChat : SET_NO_RESULT_OBJECT
}

const Chatbot = () => {
  const chatBoxRef = useRef<HTMLInputElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [userMessage, setUserMessage] = useState('')
  const [messages, setMessages] = useState<MessageType[]>([
    {
      ...CHAT_DATA[0],
      isBot: true
    }
  ])

  useEffect(() => {
    chatBoxRef.current?.scrollIntoView()
  }, [messages])

  // Handle input type
  const handleUserMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value)
  }

  // Handle send message to store
  const findLastCurrentItem = useRef<ChatObj | null>(null)
  const handleSendMessage = () => {
    setUserMessage('')
    const textUserMessage = userMessage
    const data = CHAT_DATA.find(item => {
      return item.triggers?.some(subItem => {
        return textUserMessage.split(' ').includes(subItem)
      })
    })
    setTimeout(() => {
      if (!data?.name) {
        setMessages(prevSelectedValues => [
          ...prevSelectedValues,
          { text: textUserMessage, isBot: false, defaultMessage: null },
          setDefaultMessage(findLastCurrentItem.current)
        ])
      } else {
        setMessages(prevSelectedValues => [
          ...prevSelectedValues,
          { text: textUserMessage, isBot: false, defaultMessage: null },
          { ...data, isBot: true }
        ])
        findLastCurrentItem.current = data
      }
    }, 1000)
  }

  // handle on enter key press
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      handleSendMessage()
    }
  }

  //Handle check input select
  const handleCheckInputSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target
    searchInputRef.current?.focus()
    if (checked) {
      setUserMessage(prevSelectedValues => {
        const save = [prevSelectedValues, value]
        return `${save.toString().split(',').join(' ')}`
      })
    } else {
      setUserMessage(prevSelectedValues =>
        prevSelectedValues.replace(value, '')
      )
    }
  }

  return (
    <div className='flex justify-end h-[100vh] flex-col pb-16 pt-16'>
      <div className='pr-10 overflow-auto'>
        {messages?.map((chatObj, index) => (
          <ChatCard key={index} isBot={chatObj.isBot}>
            <RenderChat
              chatObj={chatObj}
              onCheckChange={handleCheckInputSelect}
            />
          </ChatCard>
        ))}
        <div ref={chatBoxRef} />
      </div>
      <div className='absolute bottom-0 right-0 w-full'>
        <input
          className='m-0 w-full resize-none border-0 bg-white p-6 rounded-md shadow-md'
          type='text'
          placeholder='Type your message...'
          value={userMessage}
          onChange={handleUserMessageChange}
          onKeyDown={handleEnter}
          ref={searchInputRef}
        />
        <div className='absolute right-5 top-5' onClick={handleSendMessage}>
          <img src={send} alt='send_icon' width='35' height='35' />
        </div>
      </div>
    </div>
  )
}

export default Chatbot
