/**
 * Not Found
 *
 * This is the page we show when Any App Error comes
 */

import React from 'react';
import { Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { APP_ROUTES } from 'utils/constants';
import NFImg from 'images/NotFound/img.svg'
import messages from './messages';
import './style.scss';

export default function NotFound(props) {
  return (
    <div className='not_found_cont'>
        <div className='alt_img'>
           <img src={NFImg}/>
        </div>
        <div className="text_nf">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>You came on wrong path
          </p>
        {/* <button style="display:none;" class="btn green">HOME</button> */}
      </div>
    </div>
  );
}
