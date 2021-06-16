export const PAGE_SIZE = 40
export const SCROLL_TRIGGER_INDEX = 10

export const DEBOUNCE_DELAY = 400

export const LOCAL_STORAGE = 'yourssu_honcono'

export enum Brand {
  TJ = 'tj',
  KY = 'kumyoung',
}

export const BrandNameMap = {
  [Brand.TJ]: '태진',
  [Brand.KY]: '금영',
}

export enum SearchSegment {
  Title = 'song',
  Singer = 'singer',
  Number = 'no',
}

export const SearchSegmentMap = {
  [SearchSegment.Title]: '곡명',
  [SearchSegment.Singer]: '가수명',
  [SearchSegment.Number]: '번호',
}
