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
$context['author'] = new Timber\User(get_query_var('author'));
$templates = ['author.twig'];

Timber::render($templates, $context);
