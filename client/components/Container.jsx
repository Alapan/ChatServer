import React from 'react';

export default class Container extends React.Component {
  render() {
    const v = 6;
    return (
      <div>
	      <div className='jumbotron'>
	        <h1 className='display-4'>Send Message</h1>
	      </div>
	      <input
	        id='name'
	        className='form-control'
	        placeholder='Name'
	      />
        <br/>
	      <textarea
	        id='message'
	        className='form-control'
	        placeholder='Your message here'
	      />
        <br/>
        <button
          type='button'
          className='btn btn-primary'
        >Send</button>
      </div>
    );
  }
}
