import type { LinksFunction } from '@remix-run/node'
import bodyStyle from './style/body.css'

const bodyLink: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: bodyStyle
  }
]

const BodyBox = () => {
  return(
    <div data-row>
      <div data-div2>
        <h2 data-top4>MyAnimeList</h2>
        <img data-img1 alt='one piece' src='/images/onepiece2.png' />
        <img data-img2 alt='one punch man' src='/images/onepunchman.png'/>
        <img data-img3 alt='attack on titan' src='/images/attackontitan.png'/>
        <img data-img4 alt='naruto' src='/images/narutowar.png'/>
      </div>
      <div data-div3>
        <h2 data-crtitle>Favorite Characters</h2>
        <img data-img5 alt='itachi' src='/images/itachi.png'/>
        <img data-img6 alt='luffy' src='/images/luffy.png'/>
        <img data-img7 alt='ichigo' src='/images/ichigo.png'/>
        <img data-img8 alt='erenyeager' src='/images/erenyeager.png'/>
      </div>
      <div data-div4>
        <h2 data-mushtitle>Need to watch</h2>
        <img data-img5 alt='jojo bizarre adventure' src='/images/jojobizzare.png'/>
        <img data-img6 alt='gintama' src='/images/gintama.png'/>
        <img data-img7 alt='full metal alchemist' src='/images/fullmetalalchemist.png'/>
        <img data-img8 alt='overlord' src='/images/overlord.png'/>
      </div>
      <div data-div5>
        <h1 data-ontitle>One Piece</h1>
        <p data-ontext> One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997.</p>
        <img data-img9 alt='onepiece' src='/images/firstarc.png'/>
        <img data-img10 alt='onepiece' src='/images/lasttry.png'/>
      </div>
    </div>
  )
}

export {BodyBox, bodyLink }