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
    <div data-general1>
      <p data-topanime>Final Season</p>
      <img data-titan alt='attack-on-titan' src='/images/eren.png'/>
      <h1 data-lr1title>Attack On Titan</h1>
      <p data-lr1text>When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks...</p>
      <img data-hunter alt='hunter-x-hunter' src='/images/gon.png'/>
      <h1 data-lr2title>Hunter x Hunter</h1>
      <p data-lr2text>Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father...
      </p>
      <img alt="black clover" src="/images/asta.png" data-black/>
      <h1 data-lr3title>Black Clover</h1>
      <p data-lr3text>In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is... </p>
    </div>
  )
}



export { boxLink, ShadowBox }