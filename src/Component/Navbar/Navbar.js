import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logoutUser } from 'Store/Feature/auth'

const Navbar = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

	return (
		<React.Fragment>
			<NavLink to="/">Home</NavLink> | {isAuthenticated ? <NavbarAuth /> : <NavbarDefault />}
		</React.Fragment>
	)
}

const NavbarDefault = () => (
	<React.Fragment>
		<NavLink to="/register">Register</NavLink> | <NavLink to="/login">Login</NavLink>
	</React.Fragment>
)

const NavbarAuth = () => {
	const dispatch = useDispatch()
	const details = useSelector((state) => state.user.details)

	return (
		<React.Fragment>
			<button
				type="button"
				onClick={() => {
					dispatch(logoutUser())
				}}
			>
				Logout
			</button>
			<span>{details.email}</span>
		</React.Fragment>
	)
}

export default Navbar
