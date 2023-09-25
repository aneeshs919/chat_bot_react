import Gallery from '@src/components/gallery'
import DetailsSection from '@src/components/detailsSection'
import type { HotelDetailsType } from '@src/interface'
import { useEffect, useState } from 'react'

const Loader = () => {
  return 'loading ...'
}

const App = () => {
  const [data, setData] = useState<HotelDetailsType>({})
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://run.mocky.io/v3/a3e5465b-0d1c-4de8-91c5-79a87891b7bf'
      )
      const data = await res.json()
      setData(data.data)
    }
    fetchData()
  }, [])
  if (!Object.keys(data).length)
    return (
      <div className='max-w-[1200px] m-auto flex p-10 gap-5'>
        <Loader />
      </div>
    )

  return (
    <div className='max-w-[1200px] m-auto flex p-10 gap-5'>
      <div className='w-3/5 flex gap-4'>
        <Gallery />
      </div>
      <div className='w-2/5'>
        <DetailsSection data={data as HotelDetailsType} />
      </div>
    </div>
  )
}

export default App
