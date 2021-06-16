import axios from 'axios'
import { Brand, SearchSegment } from '../constants'
import { SongType } from '../types'
import { config } from 'dotenv'
import { requestGetYoutubeIDPayload } from './actions'

config()

export async function getRecentSongs(brand: Brand) {
  const link = `https://api.manana.kr/karaoke.json?brand=${brand}`
  const { data } = await axios.get(link)
  return data as SongType[]
}

export interface getSearchSongsProps {
  keyword: string
  type: SearchSegment
  brand: Brand
}

export async function getSearchSongs({keyword, type, brand}: getSearchSongsProps) {
  const  link = `https://api.manana.kr/karaoke/${type}/${keyword}.json?brand=${brand}`
  const { data } = await axios.get(link)
  return data
}

export async function getYoutubeID({title, singer}: requestGetYoutubeIDPayload) {
  const youtubeKeyword = `${title}%20${singer}`;
  const link = `https://www.googleapis.com/youtube/v3/search?part=id&regionCode=KR&q=${youtubeKeyword}&key=${process.env.REACT_APP_API_KEY}&maxResults=1`
  const { data } = await axios.get(link)
  return data
}
