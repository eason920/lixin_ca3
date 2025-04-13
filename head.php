<?php
// $src = $_SERVER['SERVER_NAME'];
// $case_code = substr($src, 0, -7); // 砍掉後面七個字 .h35.tw -h35.tw
$src = $_SERVER['SERVER_NAME'];
$case_code = "newera";
$pdo = new pdo('mysql:host=localhost;dbname=htw12_web', 'htw12', '3hdaiU813Q');
$pdo->exec("SET NAMES 'utf8'");
$sql = "SELECT title,description,keyword,p0 FROM susers WHERE email = '" . $case_code . "'";
$dataList = $pdo->query($sql)->fetchAll();
if (count($dataList) > 0) :
    $docTitle = $dataList[0]['title'];
    $siteName = $dataList[0]['title'];
    $docDesc = $dataList[0]['description'];
    $keyWords = $dataList[0]['keyword'];
    $fbDomain = $dataList[0]['p0'];
    $ogType = 'website';
?>
    <title><?php echo $docTitle; ?></title>
    <meta name="description" content="<?php echo $docDesc ?>">
    <meta name="keywords" content="<?php echo $keyWords ?>">
    <meta property="og:locale" content="zh_TW" />
    <meta property="og:type" content="<?php echo $ogType ?>" />
    <meta property="og:title" content="<?php echo $docTitle; ?>" />
    <meta property="og:description" content="<?php echo $docDesc ?>" />
    <meta property="og:site_name" content="<?php echo $siteName; ?>" />
    <meta property="og:image" content="https://<?php echo $src; ?>/img/og1.jpg" />
    <meta name="twitter:description" content="<?php echo $docDesc ?>" />
    <meta name="twitter:title" content="<?php echo $docTitle; ?>" />
    <meta itemprop="name" content="<?php echo $docTitle; ?>" />
    <meta itemprop="description" content="<?php echo $docDesc ?>" />
    <?php if ($fbDomain) : ?>
        <meta name='facebook-domain-verification' content="<?php echo $fbDomain ?>" />
    <?php endif; ?>
<?php endif; ?>