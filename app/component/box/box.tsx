import type { LinksFunction } from "@remix-run/node";
import boxStyle from './style/box.css'

const boxLink: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: boxStyle
  }
]

const ShadowBox = () => {
  return(
    <div data-div1>
      <h2 data-topanime>Final Season</h2>
      <img data-titan alt='attack-on-titan' src='/images/eren.png'/>
      <h1 data-lr1title>Attack On Titan</h1>
      <a href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin" target='_blank' rel='noreferrer'><p data-lr1text>When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks...</p></a>
      <img data-hunter alt='hunter-x-hunter' src='/images/gon.png'/>
      <h1 data-lr2title>Hunter x Hunter</h1>
      <a href="https://myanimelist.net/character/30/Gon_Freecss" target='_blank' rel='noreferrer'><p data-lr2text>Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father...
      </p></a>
      <img alt="black clover" src="/images/asta.png" data-black/>
      <h1 data-lr3title>Black Clover</h1>
      <a href="https://myanimelist.net/character/124731/Asta" target='_blank' rel='noreferrer' ><p data-underline data-lr3text>In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is... </p></a>
    </div>
  )
}



export { boxLink, ShadowBox }