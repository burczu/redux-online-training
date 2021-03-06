import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
          </li>
        </ul>

        <Route exact path="/" component={Events} />
        <Route path="/details/:eventId" component={Details} />
        <Route path="/about" render={() => <p>Ta super strona zawiera super wydarzenia z branży IT!</p>} />
      </div>
    </Router>
  )
}

export default App;
