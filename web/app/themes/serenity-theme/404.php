<?php
global $paged;
if (!defined('ABSPATH')) {
    die();
}

$context = Timber::get_context();

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 6,
);

$posts = new Timber\PostQuery($args);

$context['posts'] = $posts;
$templates = ['404.twig'];


Timber::render($templates, $context);
