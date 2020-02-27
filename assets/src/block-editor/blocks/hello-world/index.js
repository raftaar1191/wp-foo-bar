/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './edit.css';

export const name = 'foo-bar/hello-world';

export const settings = {
	title: __( 'Hello World', 'foo-bar' ),
	icon: 'smiley',
	category: 'common',

	edit() {
		return <h2>{ __( 'Hello Editor', 'foo-bar' ) }</h2>;
	},

	save() {
		return <h2>{ __( 'Hello Website', 'foo-bar' ) }</h2>;
	},
};
