import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ menu }) => {
	return (
		<ul>
			<Link to={menu.url}>{menu.title}</Link>
		</ul>
	);
};

export default Menu;
