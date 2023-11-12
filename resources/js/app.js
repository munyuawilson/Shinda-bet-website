require('./bootstrap');

import ReactDOM from 'react-dom';
import HelloReact from "./components/HelloReact";

//require('./components/HelloReact');
ReactDOM.render(<HelloReact />, document.getElementById('hello'));
