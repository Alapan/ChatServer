import React from 'react';
import {Subscribe} from 'unstated';
import MessageContainer from '../MessageContainer';

export default class ChatContainer extends React.Component {
  render() {
    return (
      <Subscribe to={[MessageContainer]}>
        { messageContainer => (
          <div>
            <div className='jumbotron'>
              <h1 className='display-4'>Send Message</h1>
              <input
                id='name'
                className='form-control'
                placeholder='Name'
                value={messageContainer.state.name}
                onChange={(e) => {
                  messageContainer.setName(e.currentTarget.value)
                }}
              />
              <br/>
              <textarea
                id='message'
                className='form-control'
                placeholder='Your message here'
                value={messageContainer.state.message}
                onChange={(e) => {
                  messageContainer.setMessage(e.currentTarget.value)
                }}
              />
              <br/>
              <button
                type='button'
                className='btn btn-primary'
                onClick={(e) => messageContainer.setText()}
              >Send</button>
            </div>
            <div id='messages'>{messageContainer.state.text}</div>
          </div>
        )}
      </Subscribe>
    );
  }
}
