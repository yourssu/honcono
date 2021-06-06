import { Brand } from "./types";

export function parseBrand(brand: Brand): 'TJ' | 'KY' {
  switch(brand) {
    case Brand.TJ:
    default:
      return 'TJ'
    case Brand.KY:
      return 'KY'
  }
}
