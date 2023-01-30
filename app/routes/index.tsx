import type { LinksFunction } from '@remix-run/node'
import { headerLink, HeadEr, ButtOns, buttonLink, ShadowBox, boxLink } from '~/component'
import { globalLink } from '~/component/global/global'

export const links: LinksFunction = () => [
  ...headerLink(),
  ...globalLink(),
  ...buttonLink(),
  ...boxLink(),
]

const myAnimeList = () => {
  return(
    <>
      <HeadEr>
        <ButtOns>
        </ButtOns>
      </HeadEr>
      <ShadowBox></ShadowBox>
    </>
  )
}


export default myAnimeList