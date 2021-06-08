import axios from 'axios'
import { Brand, SearchType, SongType } from '../types'

export async function getRecentSongs(brand: Brand) {
  const link = `https://api.manana.kr/karaoke.json?brand=${brand}`
  const { data } = await axios.get(link)
  return data as SongType[]
}

export interface getSearchSongsProps {
  keyword: string
  type: SearchType
  brand: Brand
}

export async function getSearchSongs({keyword, type, brand}: getSearchSongsProps) {
  const  link = `https://api.manana.kr/karaoke/${type}/${keyword}.json?brand=${brand}`
  let { data } = await axios.get(link)
  return data
}
