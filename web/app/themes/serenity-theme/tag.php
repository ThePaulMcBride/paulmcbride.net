<?php
global $paged;
if (!defined('ABSPATH')) {
    die();
}

$context = Timber::get_context();

if (!isset($paged) || !$paged) {
    $paged = 1;
}

$tag = get_queried_object();

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 12,
    'paged' => $paged,
    'tag' => $tag->slug
);

$posts = new Timber\PostQuery($args);

$context['tag'] = $tag;
$context['query'] = $wp_query;
$context['posts'] = $posts;
$templates = ['tag.twig'];

Timber::render($templates, $context);
