<!DOCTYPE html>
<html lang="en">

<head>
  <?php include('php/header.php'); ?>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />

  <title>Weekly Music Thread</title>
	


</head>

<body>

	<?php include('php/navbar.php'); ?>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/vaporheader.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Weekly Music Thread</h1>
            <span class="subheading">A Website for an Email</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" id = "previewSection">
        Listen to the complete WMT collection with our <a target="_blank" href="https://open.spotify.com/playlist/19qKC6cahgDcaAY14jDWst?si=xt7aZqoFSiqdgrSOqWcPKA"><u>Spotify Playlist</u>
          <span style="font-size: 12px;" class="fa-stack fa-xs">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-spotify fa-stack-2x fa-inverse" style="color:#1ED761;"></i>
          </span>
        </a>
        
      </div>
    </div>
  </div>

  <hr>

  <?php include('php/footer.php'); ?>

  <script src="js/parse_post_previewsX.js?uid=<?php echo uniqid(); ?>"></script>
  

  <script> displayPreviews();  </script>

</body>

</html>
