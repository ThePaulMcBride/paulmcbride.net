<?php

if (!defined('ABSPATH')) {
    die();
}

$context = Timber::get_context();
$post = Timber::query_post();
$templates = ["single-{$post->ID}.twig", "single-{$post->post_type}.twig", 'single.twig'];
$context['post'] = $post;
$related_posts = Timber::get_posts([
    'post_type' => 'post',
    'post__not_in' => [$post->id],
    'posts_per_page' => 3
]);
$context['related_posts'] = $related_posts;
$sidebar_context = [];
$sidebar_context['related'] = $related_posts;
$context['sidebar'] = Timber::get_sidebar('partials/sidebar.twig', $sidebar_context);

Timber::render( $templates, $context );
