/**
 * App Error page
 *
 * This is the page we show when user face any errors
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ErrorImage from 'images/503.jpg'
import './styles.scss';

export default function AppError() {

  return (
    <div className='app_error'>
      <div className='error_box'>
        <h1>
          Oops, Some Error Occured!
        </h1>
        {/* <img className='error_img' src={ErrorImage} /> */}
        <div className='error_action'>
            <button onClick={()=>window.location.reload(true)} >Refresh</button>
        </div>
      </div>
    </div>
  );
}
