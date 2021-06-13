import { Profile } from "./Persona"
import Dino from '../../assets/Dino.jpg'
import Yourssu from '../../assets/Yourssu.png'

const CreditList: Profile[] = [
  {
    imgSrc: Dino,
    name: '한도협',
    role: 'Engineer',
    urls: [
      {
        name: 'GitHub',
        url: 'https://github.com/dinohan',
      }
    ]
  },
  {
    imgSrc: Yourssu,
    name: '김예빈',
    role: 'Designer',
  },
  {
    imgSrc: Yourssu,
    name: '김봉균',
    role: 'Designer',
  },
  {
    imgSrc: Yourssu,
    name: '박수현',
    role: 'Designer',
  },
]

export default CreditList
