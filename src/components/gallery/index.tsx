import verticalPhoto from '@src/assets/verticalPhoto.jpeg'
import eventImage from '@src/assets/event.jpeg'
const EVENT_IMAGE = [eventImage, eventImage, eventImage, eventImage]

const Gallery = () => {
  return (
    <div className='overflow-auto flex gap-4'>
      <div className='w-full lg:w-4/6'>
        <img className='rounded-md h-[149px] lg:h-auto' src={verticalPhoto} width={'100%'} />
      </div>
      <div className='w-full lg:w-2/6	 flex flex-row lg:flex-col gap-4'>
        {EVENT_IMAGE.map((item, index) => (
          <img
            className='h-[149px] rounded-md'
            key={`${item + index}`}
            src={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
