<?php

return [

	'transforms' => [

		'render' => function ($node) {

			$options = [];

			if ($titleElement = $node->props['title_element']) {
				$options['titleElement'] = $titleElement;
			}

			foreach (["2xl", "xl", "l", "m", "s"] as $breakpoint) {
				if ($radius = $node->props["radius_$breakpoint"]) {
					$options["radius"][$breakpoint] = $radius;
				}
			}

			$tagCloudAttrs = [
				'options' => $options,
				'items' => array_map(fn ($child) => [
					"title" => $child->props['title'],
					"icon" => $child->props['icon']
				], $node->children)
			];

			$node->props['tagcloud_attrs'] = json_encode($tagCloudAttrs);

		},

	]

];
