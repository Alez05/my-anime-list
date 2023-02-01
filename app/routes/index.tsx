import type { LinksFunction } from '@remix-run/node'
import { headerLink, HeadEr, ButtOns, buttonLink, ShadowBox, boxLink, BodyBox, bodyLink, footerLink, Footer } from '~/component'
import { globalLink } from '~/component/global/global'

export const links: LinksFunction = () => [
  ...headerLink(),
  ...globalLink(),
  ...buttonLink(),
  ...boxLink(),
  ...bodyLink(),
  ...footerLink(),
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
      <Footer></Footer>
    </>
  )
}


export default myAnimeList