import Button from '@src/components/button'
const TopHeader = () => {
  return (
    <div className='absolute top-0 right-0 w-full bg-white p-6'>
      <div className='flex justify-between items-center'>
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
