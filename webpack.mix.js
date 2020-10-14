const mix = require( 'laravel-mix' );

mix.js( './collectionView.js', './js/collectionView.min.js' )

if ( mix.inProduction() ) {

    mix.sourceMaps()
        .version();
}

