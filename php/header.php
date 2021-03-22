  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-FE1SBK50BE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-FE1SBK50BE');
  </script>  
  
  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="css/clean-blog2.css?<?php echo time(); ?>" rel="stylesheet">
	<link href="css/search-bar.css?<?php echo time(); ?>" rel="stylesheet">

 <!-- Twitter Card tags -->
  <?php 
	function genTwitterCard($date) {
    $str = file_get_contents('https://weeklymusicthread.com/post_previews.json');
    $json = json_decode($str, true);

    $i = array_search($date, array_column($json, 'post_page'));
    $element = ($i !== false ? $json[$i] : null);

    echo '<meta name="twitter:card" content="summary_large_image">';
    echo '<meta name="twitter:site" content="@weeklymusicsite">';
    echo '<meta name="twitter:title" content="' . print_r($element["post_title"], true) . '" />';
    echo '<meta name="twitter:description" content="' . print_r($element["post_subtitle"], true) . '" />';
    echo '<meta name="twitter:image" content="https://weeklymusicthread.com/mainpage/' . print_r($element["image"], true) . '" />';

	}
  ?>

  