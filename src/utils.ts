import { Brand, SearchSegment } from './constants'

export function parseBrand(brand: Brand): 'TJ' | 'KY' {
  switch(brand) {
    case Brand.TJ:
    default:
      return 'TJ'
    case Brand.KY:
      return 'KY'
  }
}

export function getIntelligentSegment(
  title: number,
  singer: number,
  number: number,
): SearchSegment {
  if (title <= 0 && singer <= 0 && number > 0) {
    return SearchSegment.Number
  }

  if (singer > title) {
    return SearchSegment.Singer
  }

  return SearchSegment.Title
}

export function toggleBrand(brand: Brand): Brand {
  switch(brand) {
    case Brand.TJ:
      return Brand.KY
    case Brand.KY:
      return Brand.TJ
  }
}
