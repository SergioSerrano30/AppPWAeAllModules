import React from 'react';
import logo from '@/General/assets/img/logo.svg';
import soda from  '@/General/assets/img/soda.png';

const Loader = ({ message = 'Cargando, por favor espere un momento. ⌚' }) => {
	return (
		<div className="h-screen flex align-items-center justify-content-center">
			<div className="loader-container mt-4">
				<div className="loader-logo-container">
					<img src={logo} alt="Logo Coca-Cola" />
					<img src={soda} alt="Logo Soda" className="loader-soda" />
				</div>
				<h2 className="text-center loader-message p-2">{message}</h2>
			</div>
		</div>
	);
};

export default Loader;
