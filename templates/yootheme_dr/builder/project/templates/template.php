<?php

// Element
$el = $this->el('div', [
	'class' => [
		'projects-element'
	]
]);

// Slider
$slider = $this->el('div', [
	//'uk-slider' => 'velocity: 0.5; autoplay: true; autoplay-interval: 5000',
  'uk-slider' => true,
]);

?>

<?= $el($props, $attrs) ?>
  <?= $slider() ?>
    <div class="uk-position-relative">
      <div class="uk-slider-container">
        <ul class="uk-slider-items uk-grid uk-grid-medium">
		    <?php foreach ($children as $child) : ?>
              <li class="uk-width-1-3@m uk-width-4-5"><?= $builder->render($child, ['element' => $props]) ?></li>
		    <?php endforeach ?>
        </ul>
      </div>
      <a class="uk-slidenav-previous uk-slidenav uk-position-center-left-out" uk-slider-item="previous" uk-icon="heroicons-outline--arrow-long-right"></a>
      <a class="uk-slidenav-next uk-slidenav uk-position-center-right-out" uk-slider-item="next" uk-icon="heroicons-outline--arrow-long-right"></a>
    </div>
  <?= $slider->end() ?>
<?= $el->end() ?>
