<?php

use YOOtheme\Http\Request;
use YOOtheme\Http\Uri;
use function YOOtheme\app;

$isInternalLink = function($link) {
  if (!$link) {
    return true;
  }

	$request = app(Request::class);
	$host = (new Uri($link))->getHost();

  return $request->getUri()->getHost() === $host;
};

// Item
$el = $this->el('div', [
    'class' => [
        'el-item'
    ]
]);

// Title
$title = $this->el($element['title_element'], [
    'class' => [
        'el-title',
    ],
]);

$image = $this->el('image', [
    'class' => [
        'el-image',
    ],
    'src' => $props['image'],
    'alt' => $props['image_alt'],
    'loading' => $element['image_loading'] ? false : null,
    'width' => $element['image_width'],
    'height' => $element['image_height'],
    'focal_point' => $props['image_focal_point'],
    'thumbnail' => true,
]);

// Link
$link = $this->el('a', [
    'class' => [
        'el-link',
    ],
    'href' => $props['link'],
    'uk-scroll' => str_contains($props['link'] ?? "", '.svg'),
    'target' => $isInternalLink($props['link']) ? false : '_blank'
]);

?>

<?= $el($element, $attrs) ?>

    <?php if ($props['link']) : ?>
    <?= $link() ?>
    <?php endif ?>
        <div class="tile-container uk-position-relative uk-overflow-hidden">
            <?php if ($props['image']) : ?>
              <div class="image-container uk-position-relative uk-overflow-hidden">
	              <?= $image($element, $props['image']) ?>
              </div>
            <?php endif ?>

            <div class="content-container uk-position-bottom uk-width-1-1@m">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-3-5">
                        <?php if ($props['title']) : ?>
                            <?= $title($element, $props['title']) ?>
                        <?php endif ?>
                    </div>
                    <div class="uk-width-2-5">

                      <ul class="uk-grid-small uk-flex-right uk-flex-nowrap" uk-grid>
	                      <?php foreach ($children as $child) : ?>
                            <li class="uk-width-auto uk-flex uk-flex-middle"><?= $builder->render($child, ['element' => $props]) ?></li>
	                      <?php endforeach ?>
                      </ul>
                    </div>
                </div>
                <div class="uk-margin-remove-top uk-grid-small" uk-grid>
                    <div class="uk-width-3-5">
                        <?php if ($props['subtitle']) : ?>
                            <div class="el-subtitle"><?= $props['subtitle'] ?></div>
                        <?php endif ?>
                    </div>
                    <div class="uk-width-2-5">
	                    <?php if ($props['meta']) : ?>
                          <div class="el-meta"><?= $props['meta'] ?></div>
	                    <?php endif ?>
                    </div>
                </div>
            </div>
        </div>

        <?php if ($props['content']) : ?>
        <?= $content($element, $props['content']) ?>
        <?php endif ?>

    <?php if ($props['link']) : ?>
    <?= $link->end() ?>
    <?php endif ?>

<?= $el->end() ?>
