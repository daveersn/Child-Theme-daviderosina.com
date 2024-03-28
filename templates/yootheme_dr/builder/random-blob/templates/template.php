<?php

// Element
$el = $this->el('div', [
	'class'                 => [
		'random-blob-container'
	],
	'random-blob-container' => true
]);

?>

<?= $el($props, $attrs) ?>

<?php foreach ($children as $child) : ?>
	<?= $builder->render($child, ['element' => $props]) ?>
<?php endforeach ?>

<?= $el->end() ?>
