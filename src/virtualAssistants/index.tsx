import Chatbot from '@src/components/chatBot'
import LeftWidget from './leftWidget'
import TopHeader from './topHeader'
const VirtualAssistants = () => {
  return (
    <div className='max-w-[1600px] m-auto flex bg-[#e9eff0]'>
      <LeftWidget />
      <div className='w-[70%] px-10 pr-0 relative'>
        <TopHeader />
        <Chatbot />
      </div>
    </div>
  )
}

export default VirtualAssistants
