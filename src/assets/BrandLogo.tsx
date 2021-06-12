import React from 'react'

import TJImage from './tj.png'
import KYImage from './ky.png'
import { Brand } from '../constants'

interface BrandLogoProps {
  brand: Brand
  size?: number
}

const BrandImageMap = {
  [Brand.TJ]: TJImage,
  [Brand.KY]: KYImage,
}

function BrandLogo({
  brand,
  size = 24,
}: BrandLogoProps) {
  return (
    <img
      src={BrandImageMap[brand]}
      alt={brand}
      width={size}
      height={size}
    />
  )
}

export default BrandLogo
