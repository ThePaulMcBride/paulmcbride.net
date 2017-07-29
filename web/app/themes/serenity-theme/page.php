<?php

if (!defined('ABSPATH')) {
    die();
}
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$templates = ["page-{$post->post_name}.twig", 'page.twig'];
Timber::render($templates, $context);
