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
      <button data-signin-btn>Sign In
        {/* <img alt="user" src="/user.svg" data-user-icon></img> */}
      </button>
        <img data-crunch-icon alt="crunch icon" src="/images/crunchyrolls.png"/>
        <hr data-hr-line></hr>
    </div>
  )
}


export { ButtOns, buttonLink }