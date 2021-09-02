import React from 'react';
import {Link} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Nav from './index';

Enzyme.configure({adapter: new Adapter()});

describe('<Nav />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Nav />);
	});

	it('Debe tener tres <Link />', () => {
		expect(wrapper.find(Link)).toHaveLength(3);
	});
	it('El primer enlace debe ser parte del logotipo, debe tener el texto "Henry Pokemon" y correr en la ruta /', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
		expect(wrapper.find(Link).at(0).text()).toEqual('Henry Pokemon');
	});
	it('El segundo texto debe tener "HOME" y corre en la ruta /home', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');

		expect(wrapper.find(Link).at(1).text()).toEqual('HOME');
	});
	it('El tercer texto debe tener "CREAR POKEMON" y cambiar la ruta a /create', () => {
		expect(wrapper.find(Link).at(2).prop('to')).toEqual('/create');

		expect(wrapper.find(Link).at(2).text()).toEqual('CREAR POKEMON');
	});
});
