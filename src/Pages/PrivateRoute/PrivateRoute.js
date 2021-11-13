import React from 'react';
import preloader from '../../img/preloader.gif';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { loggedInUser, isLoading } = useAuth();
	if (isLoading) { return <div className="loading">
								<img src={preloader} alt={preloader} className="img-fluid"/>
							</div> }
    return (
        <Route
			{...rest}
			render={({ location }) =>
				loggedInUser.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
    );
};

export default PrivateRoute;