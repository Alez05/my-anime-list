import type { LinksFunction } from '@remix-run/node'
import { headerLink, HeadEr, ButtOns, buttonLink, ShadowBox, boxLink, BodyBox, bodyLink } from '~/component'
import { globalLink } from '~/component/global/global'

export const links: LinksFunction = () => [
  ...headerLink(),
  ...globalLink(),
  ...buttonLink(),
  ...boxLink(),
  ...bodyLink(),
]

const myAnimeList = () => {
  return(
    <>
      <HeadEr>
        <ButtOns>
        </ButtOns>
      </HeadEr>
      <ShadowBox></ShadowBox>
      <BodyBox></BodyBox>
    </>
  )
}


export default myAnimeList