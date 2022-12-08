import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'

const Footer = () => {
  const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className='bg-[#44546A]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
          <div className='flex-1 flex flex-col flex-wrap p-2'>
            <h1 className='text-[25px] text-white'>ZAINKEEPSCODE</h1>
            <p className=' text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem soluta quis porro eveniet. Nulla modi, quas unde eaque
              vel, quaerat repellendus dignissimos iure itaque architecto
              pariatur quia a eveniet veniam?
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
              <div className={socialStyle + ` bg-blue-700`}>
                <FacebookOutlinedIcon />
              </div>
              <div className={socialStyle + ` bg-purple-900`}>
                <InstagramIcon />
              </div>
              <div className={socialStyle + ` bg-sky-400`}>
                <TwitterIcon />
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
              <LocationOnIcon className='text-[#8a4af3]' />
              <p className='pl-3 text-white'>State of California</p>
            </div>
            <div className='flex m-3'>
              <LocalPhoneIcon className='text-[#521da8]' />
              <p className='pl-3 text-white'>+92 12345678</p>
            </div>
            <div className='flex m-3'>
              <EmailOutlinedIcon className='text-[#8a4af3]' />
              <p className='pl-3  text-white'>Ahmadroa925@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
