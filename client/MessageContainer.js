import { Container } from 'unstated';

export default class MessageContainer extends Container {
  state = {
    name: '',
    message: '',
    text: ''
  }

  setName = (name) => {
    this.setState({
      name
    });
  }

  setMessage = (message) => {
    this.setState({
      message
    });
  }

  setText = () => {
    this.setState({
      text: this.state.text + '\n' + this.state.message
    });
  }
}
