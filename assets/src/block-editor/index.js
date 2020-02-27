// On running npm run dev, this will compile to assets/js/.

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

const blocks = require.context( './blocks', true, /(?<!test\/)index\.js$/ );

blocks.keys().forEach( modulePath => {
	const { name, settings } = blocks( modulePath );

	registerBlockType( name, settings );
} );
