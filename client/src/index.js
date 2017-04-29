import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Button } from 'semantic-ui-react'
import './index.css';
import '../semantic/dist/semantic.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const ButtonExampleButton = (
  <Button>
    Click Here
  </Button>
)

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {temperature: ''};

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     // this.setState({temperature: e.target.value});
//     this.props.onTemperatureChange(e.target.value)
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
//         {ButtonExampleButton}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );


// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {temperature: ''};

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'coconut'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   } 

//   handleChange(event) {
//     this.setState({value: event.target.value})
//   } 

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// <textarea value={this.state.value} />
// <input type="text" placeholder="Enter your name..." value={this.state.value} onChange={this.handleChange} />

/*
 Blog with posts 
*/
// function Blog(props) { 
//   const sideBar = ( 
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   ) 
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   )
//   return (
//     <div>
//       {sideBar}
//       <hr />
//       {content}
//     </div>
//   )
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ]

// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// )

/*
  ListItems
*/

// function ListItem(props) {
//   return <li>{props.value}</li>  
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => 
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1,2,3,4,5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
