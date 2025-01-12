import './header.css';
import  people  from '../../assets/people.png';
import ai from '../../assets/ai.png'


function Header() {
  return (
    <div className='gpt3__header' id='home'>
        <div className="gpt3__header--grid">
          <div className="gpt3__header--content">
            <h1 className='gpt__header--content_tittle gradient__text'>Let's Build Something amazing with GPT-3 OpenAi</h1>
            <p className="gpt3__header--content_text">
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we year to order allow asked .
            </p>
            <form className='gpt3__header--content_form'>
              <label>
                <input type="email" placeholder='Your Email Address'/>
                <button type='submit'>Get Started</button>
              </label>
            </form>
            <div className="gpt3__header--content_people">
              <img src={people} alt="People Image" />
              <p>1.600 people requested access a visit in last 24 hours</p>
            </div>
          </div> 
          <div className="gpt__header--im">
              <img src={ai} alt="Imagen AI" />
          </div>
        </div>
    </div>
  )
}

export default Header