/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

const Validation = ({ msg, color }) => {
  	return (
      	<div>
          	<p className='vmsg'>
				<span className='span-msg' style={{backgroundColor: color}}>{msg}</span>
			</p>
      	</div>
    );
};

export default Validation;