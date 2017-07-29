<?php
global $paged;
if (!defined('ABSPATH')) {
    die();
}

$context = Timber::get_context();

if (!isset($paged) || !$paged) {
    $paged = 1;
}

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 12,
    'paged' => $paged
);

$posts = new Timber\PostQuery($args);

$context['query'] = $wp_query;
$context['posts'] = $posts;
$templates = ['index.twig'];
if (is_home()) {
    $context['is_home'] = true;
    array_unshift($templates, 'home.twig');
}

Timber::render($templates, $context);
