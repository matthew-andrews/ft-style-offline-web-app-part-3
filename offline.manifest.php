<?php
header("Content-Type: text/cache-manifest");
?>
CACHE MANIFEST
# 2012-10-29 v1
jquery.min.js

FALLBACK:
/api api/offline/
/ /<?php echo ltrim(trim(dirname($_SERVER['SCRIPT_NAME']), '/') . '/', '/'); ?>


NETWORK:
*