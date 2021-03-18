<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />

  <title>Weekly Music Thread | Just the Music</title>
	
	<?php include('php/header.php'); ?>

</head>

<body>

  <?php include('php/navbar.php'); ?>  

  <!-- Page Header -->
  <header>

    <br><br><br>

  </header>

  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
       <div class="col-lg-11 col-md-11 mx-auto" id="postSection">
         
       </div>
      </div>
    </div>
  </article>

  <hr>

  <?php include('php/footer.php'); ?>  

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/clean-blog.js?uid=<?php echo uniqid(); ?>"></script>
  
  <script src="js/list_all_music_entries.js?uid=<?php echo uniqid(); ?>"></script>
  
  <script>
	displayAll();
  </script>

</body>

</html>
