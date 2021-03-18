<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />

  <title>Weekly Music Thread | Latest Article</title>

  <style>
  .img-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin-top: -150px; /* Half the height */
    margin-left: -150px; /* Half the width */
  }
  </style>

  <?php include('php/header.php'); ?>


</head>

<body id="redirectHeader">

  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <lottie-player src="https://weeklymusicthread.com/lf30_editor_wpqihs6i.json" class="img-center" background="transparent"  speed="1" loop  autoplay></lottie-player>

  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/redirect.js?uid=<?php echo uniqid(); ?>"></script>
  
  <script>
	redirect();
  </script>

</body>

</html>
