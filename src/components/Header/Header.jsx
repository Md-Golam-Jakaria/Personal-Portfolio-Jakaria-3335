import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';

const Header = () => {
	const [menus, setMenus] = useState([]);

	useEffect(() => {
		fetch('menus.json')
			.then((res) => res.json())
			.then((data) => setMenus(data));
	}, []);
	console.log(menus);
	return (
		<nav>
			{menus.map((menu) => (
				<Menu key={menu.id} menu={menu}></Menu>
			))}
		</nav>
	);
};

export default Header;
