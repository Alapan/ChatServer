import React from 'react';
import ReactDOM from 'react-dom';
import ChatContainer from './components/ChatContainer.jsx';
import {Provider} from 'unstated';

ReactDOM.render(
  <Provider>
    <ChatContainer />
  </Provider>,
  document.getElementById('app')
);
