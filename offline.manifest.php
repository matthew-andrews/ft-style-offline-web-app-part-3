<?php
header("Content-Type: text/cache-manifest");

// Detect the app root (taken from api/resources/index.php)
$appRoot = trim(dirname($_SERVER['SCRIPT_NAME']), '/');
$appRoot = '/' . ltrim($appRoot . '/', '/');
?>
CACHE MANIFEST
# 2012-10-29 v1
jquery.min.js

FALLBACK:
<?php echo $appRoot; ?>api <?php echo $appRoot; ?>api/offline/
<?php echo $appRoot; ?> <?php echo $appRoot; ?>


NETWORK:
*
