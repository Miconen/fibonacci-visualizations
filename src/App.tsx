import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Form from './Form';
import Blocks from './scripts/sequences/blocks';
import Spiral from './scripts/sequences/spiral';
import FourOFour from './FourOFour';
import './styles/layout/transitions.scss';

function App() {
	const location = useLocation();
	const nodeRef = React.useRef(null);
	return (
		<TransitionGroup>
			<CSSTransition
				timeout={300}
				classNames="fade"
				key={location.key}
				ref={nodeRef}
			>
				<div ref={nodeRef} className="Component">
					<Switch location={location}>
						<Route path="/" exact component={Form}></Route>
						<Route path="/blocks" exact component={Blocks} />
						<Route path="/spiral" exact component={Spiral} />
						<Route path="/" component={FourOFour} />
					</Switch>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default App;
