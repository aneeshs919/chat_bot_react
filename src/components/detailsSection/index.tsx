import { Link } from 'react-router-dom'
import type { HotelDetailsProps } from '@src/interface'
import Button from '../button'

interface RatingComponentType {
  star: number
}

const RatingComponent: React.FC<RatingComponentType> = ({ star }) => {
  const ratingArray = Array.from(Array(5).keys())
  return ratingArray.map(index => {
    if (index < star) {
      return <span key={index}>★</span>
    } else {
      return <span key={index}>☆</span>
    }
  })
}

const DetailsSection: React.FC<HotelDetailsProps> = ({ data }) => {
  const trueFeatures = (
    Object.keys(data?.features || {}) as (keyof typeof data.features)[]
  ).filter(key => data?.features[key])

  const trueEventSpaces = (
    Object.keys(data?.event_spaces || {}) as (keyof typeof data.event_spaces)[]
  ).filter(key => data?.event_spaces[key])

  return (
    <div className='text-sm'>
      <div className='border-b-[1px] pb-3'>
        <div className='text-lg'>{data.name}</div>
        <div>{data.package}</div>
        <div className='flex gap-2'>
          <RatingComponent star={data?.rating?.star} />
          <div>{data?.rating?.count}</div>
        </div>
      </div>
      <div className='border-b-[1px] py-4'>
        <div className='max-h-[100px] overflow-hidden'>{data.description}</div>
      </div>
      <div className='border-b-[1px] py-4 flex justify-between gap-2'>
        <Button text='Video tour' />
        <Button text='Latest menu' />
        <Button text='Floor plans' />
      </div>
      <div className='border-b-[1px] py-4 flex justify-between gap-2 flex-col'>
        <div className='bold text-base'>Venue feature</div>
        <div className='flex justify-between flex-wrap'>
          {trueFeatures?.map(item => (
            <div className='w-1/2 capitalize' key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='border-b-[1px] py-4 flex justify-between gap-2 flex-col'>
        <div className='bold text-base'>Event spaces</div>
        <div className='flex justify-between'>
          {trueEventSpaces.map(item => (
            <div key={item} className='capitalize'>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='border-b-[1px] py-4 flex justify-between gap-2'>
        <Link
          to={'/virtual_assistant/SF Customer event'}
          className='py-2 px-4 w-full text-center cursor-pointer hover:opacity-[.5] border-solid border border-gray-600 rounded-md'
        >
          Customize with bonnie{' '}
        </Link>
        <Button text='Book now' primary />
      </div>
    </div>
  )
}

export default DetailsSection
