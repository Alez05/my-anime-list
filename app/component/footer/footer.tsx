import type { LinksFunction } from '@remix-run/node'
import footerStyle from './style/footer.css'

const footerLink:LinksFunction = () => [
  {
    rel:'stylesheet',
    href: footerStyle
  }
]

const Footer = () =>{
  return(
    <div data-footer1>
      <div>
        <img data-crunchyicon alt='crunchyroll icon' src='/images/crunchyroll3.png'/>
      </div>
      <div>
        <h1 data-ftitle> Watch anytime, anywhere</h1>
        <p data-ftext>Stream on desktop, mobile, gaming consoles, and other streaming devices that include iOS, Android, Apple TV, Xbox, Roku, and PS4.</p>
      </div>
      <div>
        <img data-laptop alt='laptop' src='/images/icon/laptop1.svg'/>
        <img data-tablet alt='tablet' src='/images/icon/tablet2.svg'/>
        <img data-phone alt='phone' src='/images/icon/phone2.svg'/>
      </div>
      <div data-socials>
        <img data-playstation alt='playstation' src='/images/icon/playstation.svg'/>
        <img data-xbox alt='xbox' src='/images/icon/xbox.svg'/>
        <img data-samsung alt='samsung' src='/images/icon/samsung.svg'/>
        <img data-roku alt='roku' src='/images/icon/heroku.svg'/>
      </div>
      <div data-footer2>
        <h1 data-f1title>Get more with Premium </h1>
        <p data-f1text>Start watching with 30 days free. Stream on desktop, mobile, gaming consoles, and other streaming devices.</p>
        <button data-f1btn>Start your free trial</button>
      </div>
    </div>
  )
}

export { Footer, footerLink }