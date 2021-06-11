import React from 'react'

import TJ from './tj.png'
import KY from './ky.png'
import { Brand } from '../types'

interface BrandLogoProps {
  brand: Brand
  size?: number
}

const BrandImageMap = {
  [Brand.TJ]: TJ,
  [Brand.KY]: KY,
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
