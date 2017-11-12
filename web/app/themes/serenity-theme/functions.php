<?php

// check if timber exists before continuing
if (!class_exists('Timber\Timber')) {
    die('Timber class required for this theme');
}

// check the theme path has been defined before continuing
if (!defined('THEME_PATH')) {
    define('THEME_PATH', get_template_directory()); // gets the absolute path
}

// check if the directory uri has been defined before continuing
if (!defined('THEME_URI')) {
    define('THEME_URI', get_template_directory_uri());
}

function pageTitle()
{
    $title = get_bloginfo('name');

    if (function_exists('is_tag') && is_tag()) {
        $tag = single_tag_title("", false);
        return "Tag Archive for ${tag} | ${title}";
    } elseif (is_search()) {
        $search = get_search_query();
        return "Search for ${search} | ${title}";
    } elseif (!(is_404()) && (is_single()) || (is_page())) {
        $pageTitle = get_the_title();
        return "${pageTitle} | ${title}";
    } elseif (is_404()) {
        return "Page Not Found | ${title}";
    } else {
        $description = get_bloginfo('description');
        return "${title} | ${description}";
    }
}

register_nav_menus([
    'main_menu' => 'Main Navigation',
    'footer_menu' => 'Footer Navigation',
]);


// Initialize Timber
$timber = new \Timber\Timber();
Timber::$dirname = 'templates';
add_filter('timber_context', 'add_to_context');

function add_to_context($data)
{
    $data['main_menu'] = new TimberMenu('main_menu');
    $data['footer_menu'] = new TimberMenu('footer_menu');
    $data['heap_api_key'] = env('HEAP_API_KEY');
    return $data;
}

// Register actions
add_action('wp_enqueue_scripts', 'enqueue_scripts'); // enqueue scripts to add js links
add_action('wp_enqueue_scripts', 'enqueue_styles'); // enqueue styles to add css link
add_action('init', 'register_session'); // create the PHP session
add_filter('show_admin_bar', '__return_false'); // hide admin bar
add_theme_support( 'post-thumbnails' );


// Functions
/**
 * Create the PHP session if it doesn't already exist
 */
function register_session()
{
    if (!session_id()) {
        session_start(); // so if these is no session id, then start the session
    }
}

/**
 * Enqueue the scripts that need to be loaded
 */
function enqueue_scripts()
{
    wp_enqueue_script('prism-script', 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js');
    wp_enqueue_script('prism-php', 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/components/prism-php.min.js');
    wp_enqueue_script('evil-icons-script', 'https://cdn.jsdelivr.net/evil-icons/1.9.0/evil-icons.min.js');
    wp_enqueue_script('convertkit', 'https://assets.convertkit.com/assets/CKJS4.js?v=21');
    wp_enqueue_script('app-script', THEME_URI.'/assets/js/app.js');
    wp_localize_script( 'app-script', 'php_vars', [
        'heap_key' => env('HEAP_API_KEY'),
    ] );
}


/**
 * Enqueue the styles that need to be loaded
 */
function enqueue_styles()
{
    wp_enqueue_style( 'app-styles', THEME_URI.'/assets/css/app.css' );
    wp_enqueue_style( 'evil-icons-styles', 'https://cdn.jsdelivr.net/evil-icons/1.9.0/evil-icons.min.css' );
    wp_enqueue_style( 'prism-styles', 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css' );
    wp_enqueue_style( 'prism-styles-theme', 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-okaidia.min.css' );
}
