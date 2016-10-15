
import React from 'react';
import Link from './Link-component';
import renderer from 'react-test-renderer';

test('Link renders correctly', () => {
	const tree = renderer.create(
		<Link page="http://www.facebook.com">Facebook</Link>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
