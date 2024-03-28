<?php

// Element
$el = $this->el('div', [
    'class' => [
        'tag-cloud'
    ],
    'tag-cloud' => $props['tagcloud_attrs'],
]);

?>

<?= $el($props, $attrs) ?><?= $el->end() ?>
