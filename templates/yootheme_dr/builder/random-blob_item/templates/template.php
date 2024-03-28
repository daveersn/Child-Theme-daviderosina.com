<?php

$randomBlobAttrs = [
	"top"    => $props['top'] ?? false,
	"bottom" => $props['bottom'] ?? false,
	"left"   => $props['left'] ?? false,
	"right"  => $props['right'] ?? false,
	"width"  => $props['width'] ?? false,
	"height" => $props['height'] ?? false,
	"bg"     => [$props['background_gradient_1'], $props['background_gradient_2']],
];

// Element
$el = $this->el('div', [
	'class'       => [
		'random-blob'
	],
	'random-blob' => json_encode(array_filter($randomBlobAttrs))
]);

?>

<?= $el($props, $attrs) ?><?= $el->end() ?>
