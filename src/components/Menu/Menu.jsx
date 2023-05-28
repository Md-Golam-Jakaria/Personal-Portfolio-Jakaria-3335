import React from 'react';
import ActiveNavLink from '../ActiveNavLink/ActiveNavLink';
import './Menu.css';
const Menu = ({ menu }) => {
	return (
		<div className="menu-link">
			<ActiveNavLink to={menu.url}>{menu.title}</ActiveNavLink>
		</div>
	);
};

export default Menu;
