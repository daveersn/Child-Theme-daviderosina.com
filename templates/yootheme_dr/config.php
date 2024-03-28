<?php

use Daviderosina\Portfolio\ThemeListener;

require_once __DIR__ .  '/vendor/autoload.php';

return [

    'events' => [

        'theme.head' => [
            ThemeListener::class => ['initHead', -10]
        ],

        'customizer.init' => [

        ],

        'builder.type' => [

        ]

    ],

];
