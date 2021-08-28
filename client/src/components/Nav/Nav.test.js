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

	it('It should render three <Link />', () => {
		expect(wrapper.find(Link)).toHaveLength(3);
	});
	it('The first link should be part of the logo must have the text "Pokemon Companion App" and lead to /home', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
		expect(wrapper.find(Link).at(0).text()).toEqual('Pokemon Companion App');
	});
	it('The second link must have the text "HOME" and lead to /home', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');

		expect(wrapper.find(Link).at(1).text()).toEqual('HOME');
	});
	it('The third link should contain the text "CREATE POKEMON" and change the path to /create', () => {
		expect(wrapper.find(Link).at(2).prop('to')).toEqual('/create');

		expect(wrapper.find(Link).at(2).text()).toEqual('CREATE POKEMON');
	});
});
