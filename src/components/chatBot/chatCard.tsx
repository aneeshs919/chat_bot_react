import React, { ReactNode } from 'react'
import bzLogo from '@src/assets/bz_logo.svg'
import user from '@src/assets/user.png'

interface ChatCardType {
  children: ReactNode
  isBot: boolean
}

const ChatCard: React.FC<ChatCardType> = ({ children, isBot }) => {
  return (
    <div className={`${isBot ? 'bg-transparent animate-wiggle' : 'bg-[#dfe9eb] px-10'} py-10 flex gap-4 items-center`}>
      {isBot ? (
        <div className='rounded-full w-20 h-20 p-3 bg-slate-400 flex justify-center items-center'>
          <img src={bzLogo} alt='logo' />
        </div>
      ) : (
        <div className='rounded-full w-20 h-20 p-3 bg-[#ced8da] flex justify-center items-center'><img src={user} alt='default_user' /></div>
      )}
      <div>{children}</div>
    </div>
  )
}

export default ChatCard
