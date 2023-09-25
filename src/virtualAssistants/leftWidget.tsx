import { useNavigate, useParams } from 'react-router-dom'

import user from '@src/assets/user.png'

const LeftWidget = () => {
  const navigate = useNavigate()
  const matches = useParams();
  return (
    <div className='bg-[#ced8da] w-[30%] p-8 flex flex-col justify-between'>
      <div className='flex flex-col gap-10'>
        <div className='text-2xl flex justify-between items-center'>
          Bonnie
          <div
            className='w-8 h-8 rounded-full bg-[#e9eff0] flex justify-center items-center cursor-pointer'
            onClick={() => navigate(-1)}
          >
            &#8672;
          </div>
        </div>
        <div>
          <div className='text-lg mb-3'>Events</div>
          <div>{matches.type}</div>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='w-12 h-12 rounded-full bg-white p-3'>
          <img src={user} />
        </div>
        <div>User Name</div>
      </div>
    </div>
  )
}

export default LeftWidget
