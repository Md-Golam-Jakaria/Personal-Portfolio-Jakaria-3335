import React from 'react';

const ActiveNavLink = () => {
	return (
		<NavLink
			to={{ to }}
			className={({ isActive }) => (isActive ? 'active' : '')}
		>
			{children}
		</NavLink>
	);
};

export default ActiveNavLink;
