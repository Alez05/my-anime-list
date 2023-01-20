import type { LinksFunction } from '@remix-run/node'
import { headerLink, HeadEr, ButtOns, buttonLink } from '~/component'
import { globalLink } from '~/component/global/global'

export const links: LinksFunction = () => [
  ...headerLink(),
  ...globalLink(),
  ...buttonLink(),
]

const myAnimeList = () => {
  return(
    <div>
      <HeadEr data-header>
        <ButtOns>
        <button data-signin-btn>Sign In
        {/* <img alt="user" src="/user.svg" data-user-icon></img>Sign In */}
      </button>
        <img data-crunch-icon alt="crunch icon" src="/images/crunchyrolls.png"/>
        <hr data-hr-line></hr>
        </ButtOns>
      </HeadEr>

    </div>
  )
}


export default myAnimeList