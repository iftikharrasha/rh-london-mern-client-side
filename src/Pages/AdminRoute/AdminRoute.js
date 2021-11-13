import React from 'react';
import preloader from '../../img/preloader.gif';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { loggedInUser, admin, isLoading } = useAuth();
	if (isLoading) { return <div className="loading">
								<img src={preloader} alt={preloader} className="img-fluid"/>
							</div> }
    return (
        <Route
			{...rest}
			render={({ location }) =>
				loggedInUser.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/not-found',
							state: { from: location }
						}}
					/>
				)}
		/>
    );
};

export default AdminRoute;