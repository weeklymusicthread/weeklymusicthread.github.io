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
  <header>

  </header>

  <!-- Main Content -->

  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto" >

        <br>
        <br>
        <br>

        <div class="row">
            <div class="col-md-8 col-sm-12 column-content">

              <div id="previewSection">

              </div>
       
             
            </div>

            <div class="col-md-4 col-sm-12 column-content" id="music-cards">

              
            </div>

        </div>


      </div>
    </div>
  </div>

  <hr>

  <?php include('php/footer.php'); ?>

  <script src="js/parse_post_previews2.js?uid=<?php echo uniqid(); ?>"></script>

  <script src="js/smooth_scroll.js?uid=<?php echo uniqid(); ?>"></script>

  <script src="js/parse_music_cards.js?uid=<?php echo uniqid(); ?>"></script>
  

  <script> displayPreviews();  </script>
  
  <script> displayCards();  </script>

</body>

</html>
