import axios from 'axios'
import { SearchReducer, SongType } from '../types'

export async function getTjIndex() {
  const link = 'https://api.manana.kr/karaoke.json?brand=tj'
  const { data } = await axios.get(link)
  return data as SongType[]
}

export async function getKyIndex() {
  const link = 'https://api.manana.kr/karaoke.json?brand=kumyoung'
  const { data } = await axios.get(link)
  return data as SongType[]
}

export async function getSearchSongs({keyword, type, brand}: SearchReducer) {
  const  link = `https://api.manana.kr/karaoke/${type}/${keyword}.json?brand=${brand}`
  let { data } = await axios.get(link)
  return data
}
