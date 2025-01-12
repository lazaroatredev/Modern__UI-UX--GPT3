import './brand.css'
import { google,slack,atlassian,dropbox,shopify } from '../../assets'

function Brand() {
  return (
    <div className='gpt3__brand section section__padding'>
        <div>
          <img src={google} alt="Img Brand" />
        </div>
        <div>
          <img src={slack} alt="Img Brand" />
        </div>
        <div>
          <img src={atlassian} alt="Img Brand" />
        </div>
        <div>
          <img src={dropbox} alt="Img Brand" />
        </div>
        <div>
          <img src={shopify} alt="Img Brand" />
        </div>
    </div>
  )
}

export default Brand