<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wordpress' );

/** MySQL hostname */
define( 'DB_HOST', 'database' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Z; iIC3uYJ.`uY4e3RSdZ[UJq7vK}U85T0O4DY.q9#2`d:ri1o0c0entb8i;c3(%' );
define( 'SECURE_AUTH_KEY',   ' pB2@Fdn>deYzga7^,,uU?wA_axEm_-=$qM!NU%Y7Z0NVP%,h|C XOn!JJ(Cu`t_' );
define( 'LOGGED_IN_KEY',     '_Jc @45+x-lA</4tx}+UhFq3E*x<1CP$1DuO.GuK]|~(Xcin_GDfM/)h,^GI^<91' );
define( 'NONCE_KEY',         'ihU}a:|,SWQs:5<+daZ==lb3C_{6>.4B_*87:&KcC[S>m{]=GZg0>#U5mb5B1eDv' );
define( 'AUTH_SALT',         'zM##)^`u8x7[;]wqnC&Od7PNS9y}{3r&<WYDNc}p1]!S`xE}dZopmR~8#22^Bdi:' );
define( 'SECURE_AUTH_SALT',  'V47ib-m3-u9{wOq~G=NEdVKWo;8*J/rB4*v6@arZggx1USzQ1[p:Ze3y~@u3X^=5' );
define( 'LOGGED_IN_SALT',    '}L8+2=id=G:~!WLn`52w3r~`b!8[5-poIA1,{_= Zq`^x-Sj3i}Q|Nu{8X=Ooblz' );
define( 'NONCE_SALT',        '4)&`baW*C?|9]Y<P0JnBt8NB$L/W~3wV3`U3s4t/v<oDnm*3=# T5/CVD6Vn,YR_' );
define( 'WP_CACHE_KEY_SALT', '4[w(xRVHL~$uGNCuBvX;_&w?<UyVaJzGEoN9Jyzfy,.f,wE3u[ >Bc%(yW>,K :L' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
