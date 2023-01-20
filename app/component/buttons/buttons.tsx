import type { LinksFunction } from '@remix-run/node'
import buttonStyle from './style/buttons.css'

const buttonLink: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: buttonStyle
  }
]


const ButtOns = ({children}: any) => {
  return(
    <div>
      {children}
    </div>
  )
}


export { ButtOns, buttonLink }