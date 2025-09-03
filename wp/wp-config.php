<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kremenba_Data_kremen' );

/** Database username */
define( 'DB_USER', 'kremenba_wp528' );

/** Database password */
define( 'DB_PASSWORD', 'Adidasoridginals2003!' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '**!!]*pZHQil9+R>=3WSDo-f=8CONn@%t?6g^e6l!4jgq!s=@AfbYHPlVoXsD>62' );
define( 'SECURE_AUTH_KEY',  'G6L27i]`+b}I!<w&5fE[>BI J]CEM`@Ysnd0Z_;I3N@~Lp6ODXq%h >RIdGHJ+)Z' );
define( 'LOGGED_IN_KEY',    '_i:ZK5Sr%C|@r[5yp%:z.GjDvwtB[=M_{g!K&F+)jbVsglArIq$*SC)h!Qc%v0Pn' );
define( 'NONCE_KEY',        'U~VAyY7KP<q~l6LNL@p[qEctYR-Q@nL-z9-F[!#lYrVLT1O>L_<ucUNO#4PBE)i<' );
define( 'AUTH_SALT',        '?a+ntSkFXT ;x~e1|2n];ew}KsSm-GvHG{i/i!?[Q2i8,vm<FZO)&=ll~}4_`Uk!' );
define( 'SECURE_AUTH_SALT', 'LE`_tKe#=1a(8xR}[/E]TY7,~E1~y7W5Kz%&|(7t8}Oi;j*#vZw)ty:l4*F49N=:' );
define( 'LOGGED_IN_SALT',   'AkCS?4EYduti8vM{T=FTaNc}$.c[2r1wrZzHuiF0j^CvcSR7Mur}TqRa/@h0/pHs' );
define( 'NONCE_SALT',       'kSwY8u]I!z]`33lU61_<H#Ofag*Lf6[o)rtd@W[4A1?ijwh- ~!lGiv1IBL]0wTf' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
