<?php

namespace Daviderosina\Portfolio;

use YOOtheme\File;
use YOOtheme\Metadata;

class ThemeListener {
	public static function initHead(Metadata $metadata): void
	{
		if (File::exists('~theme/js/app.min.js'))
		{
			$metadata->set('script:theme-app', ['src' => '~theme/js/app.min.js', 'defer' => true]);
		}

		if (File::exists('~theme/css/app.min.css'))
		{
			$metadata->set('style:theme-app', ['href' => '~theme/css/app.min.css']);
		}
	}
}
