import Button from '@src/components/button'
const TopHeader = () => {
  return (
    <div className='absolute top-0 right-0 w-full bg-white p-4 lg:p-6'>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2'>
        <div>SF Customer Event</div>
        <div className='flex gap-3'>
          <Button text='Chat' primary />
          <Button text='Book' />
          <Button text='Guests' />
        </div>
      </div>
    </div>
  )
}

export default TopHeader
