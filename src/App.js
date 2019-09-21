import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>Hello World!</div>
//   );
// }

export default class App extends Component{

  constructor(){
    super();

    this.state = {
      value:'',
      user:[]
    }
  }

  setValue = (event)=>{
    let _value = event.target.value;
    this.setState({value:_value});
  }

  includeData=(event)=>{

    if(['Enter','Tab',','].includes(event.key)){
      event.preventDefault();

      let _users = this.state.value.trim();

      if(_users){
        this.setState({user:[...this.state.user,_users],value:''})
      }
    }
  }

  delData=(event)=>{
    let _element = event.target.parentElement.childNodes[0].value;

    let _array = this.state.user.filter(data=>data !== _element);

    this.setState({user:_array})
  }

  render(){
    return(
      <div className="tags-input" data-name="tags-input">
          {this.state.user.map(data=>
            <span className="tags">
              <input type="hidden" value={data} />{data}

              <span className="close" onClick={this.delData}>
              </span>
            </span>)}

          <input className="main-tag"
                  type="text"
                  value = {this.state.value}
                  onChange = {this.setValue}
                  onKeyDown = {this.includeData}
          />
      </div>
    );
  }
}

//export default App;
