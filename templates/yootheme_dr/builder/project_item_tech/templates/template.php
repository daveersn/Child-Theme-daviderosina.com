<?php

// Item
$el = $this->el('div', [
    'class' => [
        'el-tech-stack uk-preserve'
    ],
    'uk-icon' => $props['image'] ?? false
]);

?>

<?= $el($element, $attrs) ?><?= $el->end() ?>
