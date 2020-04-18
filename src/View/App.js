import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from 'View/Home'
import Register from 'View/Register'
import PasswordReset from 'View/PasswordReset'
import Login from 'View/Login'

import Navbar from 'Component/Navbar'

const App = () => {
	const { isLoggingIn, isLoggingOut, isVerifying, isAuthenticated } = useSelector((state) => state.auth)
	const { isCreating, isLoading } = useSelector((state) => state.user)

	if (isLoggingIn) {
		return (
			<React.Fragment>
				<h1>Logging in</h1>
			</React.Fragment>
		)
	}
	if (isLoggingOut) {
		return (
			<React.Fragment>
				<h1>Logging out</h1>
			</React.Fragment>
		)
	}
	if (isVerifying) {
		return (
			<React.Fragment>
				<h1>Verifying</h1>
			</React.Fragment>
		)
	}
	if (isCreating) {
		return (
			<React.Fragment>
				<h1>Creating user</h1>
			</React.Fragment>
		)
	}
	if (isLoading) {
		return (
			<React.Fragment>
				<h1>Loading</h1>
			</React.Fragment>
		)
	}

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/register">{isAuthenticated ? <Redirect to="/" /> : <Register />}</Route>
				<Route path="/passwordreset">{isAuthenticated ? <Redirect to="/" /> : <PasswordReset />}</Route>
				<Route path="/login">{isAuthenticated ? <Redirect to="/" /> : <Login />}</Route>
				<Route path="/">{isAuthenticated ? <Redirect to="/dashboard" /> : <Home />}</Route>
			</Switch>
		</Router>
	)
}

export default App
