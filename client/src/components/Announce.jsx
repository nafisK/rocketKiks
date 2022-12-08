import { React, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    'bg-[#0268FF] font-bold text-white flex items-center justify-center'
  )

  const handleClose = () => {
    setAnnounceStyle(announceStyle + ' hidden')
  }

  return (
    <div className={announceStyle}>
      Hurry up 50% off Sale!
      <CloseIcon className='cursor-pointer' onClick={handleClose} />
    </div>
  )
}

export default Announce
