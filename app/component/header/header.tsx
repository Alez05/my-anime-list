import type { LinksFunction } from '@remix-run/node';
import headerStyle from './style/header.css';

const headerLink: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: headerStyle
  }
]

const HeadEr= ({children}:any) => {
  return(
    <div data-header>
      {children}
      <img data-luffy alt="luffy" src="/images/onepiece.png"/>
      <img data-banner alt='onepiece' src='/images/banner.png'/>
      <h1 data-title>The World's Largest Anime Collection</h1>
      <p data-subtitle>Stream on desktop, mobile, gaming consoles, and other streaming devices.</p>
      <button data-middle-btn>
          Start Your Free Trial
      </button>
    </div>
  )
}

export {HeadEr, headerLink}