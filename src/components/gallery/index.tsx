import verticalPhoto from '@src/assets/verticalPhoto.jpeg'
import eventImage from '@src/assets/event.jpeg'
const EVENT_IMAGE = [eventImage, eventImage, eventImage, eventImage]

const Gallery = () => {
  return (
    <>
      <div className='w-4/6	'>
        <img className='rounded-md' src={verticalPhoto} width={'100%'} />
      </div>
      <div className='w-2/6	 flex flex-col gap-4'>
        {EVENT_IMAGE.map((item, index) => (
          <img className='h-[149px] rounded-md' key={`${item + index}`} src={item} />
        ))}
      </div>
    </>
  )
}

export default Gallery
