import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

class GenerateCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: this.props.value}

  }

  render(){
    return(
      <div>
        <h1 className='counterTwo' onClick={()=>this.setState({count: this.state.count + 1})}>{this.state.count}</h1>
      </div>
    );
  }

} // end of component



// render(<App name='react-basic' />, document.querySelector('main'))
render(<div>
  <GenerateCounter name='Rath' value={55} />
  <GenerateCounter name='tom' value={25} id="second"/>

  </div>, document.querySelector('main'))


// console.log('welcome to react-basic')
