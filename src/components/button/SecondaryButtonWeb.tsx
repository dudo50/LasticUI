import Link from 'next/link'
import { FC } from 'react'

export interface PrimaryButtonProps {
  title?: string
  location?: string
  onClick?: () => void // Optional click handler
  disabled?: boolean
}

const SecondaryButtonWeb: FC<PrimaryButtonProps> = ({
  title = 'Click me',
  location = '/',
  onClick,
  disabled,
}) => {
  // If an onClick prop is provided, return a button element. Otherwise, return a Link component.
  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${disabled ? 'bg-gray-2 text-gray-14 cursor-not-allowed' : ' bg-gradient-to-r from-purple-4 to-primary-5  hover:bg-pink-300 text-white cursor-pointer'} rounded-ful font-syne font-black rounded-2xl text-md inline-flex items-center justify-center px-12 py-3 mr-3 text-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-3`}
      >
        {title}
      </button>
    )
  } else {
    return (
      <Link
        href={location}
        className="rounded-ful font-syne font-black rounded-2xl hover:bg-gradient-to-r  hover:from-pink-5 hover:to-purple-6 border border-gray-16 text-md inline-flex items-center justify-center px-12 py-3 mr-3 text-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-3"
      >
        {title}
      </Link>
    )
  }
}

export default SecondaryButtonWeb
