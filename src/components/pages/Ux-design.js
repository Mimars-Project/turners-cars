import React, {useState} from 'react';
import '../../App.css';

function Uxdesign() {
  const [business, setBusiness] = useState(false);

  const setButton = () => {
    setBusiness(!business);
    let carUsage = document.querySelectorAll('#business:not(.active)')[0].value
    console.log(carUsage);
  }

  return (
    <div className='uxdesign'>
      <div className='rectangle'>
        <h1>CAR INSURANCE</h1>
        <p className='subtext'>Helping protect you from bumps in the road.</p>
        <form>
          <label for='reg-no' className='label'>Car registration number</label><br/>
          <input name='reg-no' className='btn-small' /><br/>

          <label for='business' className='label'>Do you use your car for business?</label><br/>
          <input type='button' value='YES' id='business' className={business ? 'btn-small active' : 'btn-small'} onClick={ !business ? setButton : undefined} />
          <input type='button' value='NO' id='business' className={!business ? 'btn-small active' : 'btn-small'} onClick={ business ? setButton : undefined} /><br/>
          
          <label className='label'>When would you like your policy to start?</label><br/>
          <input type='date' name='policy' className='btn-small' /><br/>

          <input type='submit' value='GET A FREE QUOTE' className='btn-large' />
        </form>
        
      </div>
    </div>
  );
}

export default Uxdesign;
