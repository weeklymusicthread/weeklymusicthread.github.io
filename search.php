<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />

  
  <title>Weekly Music Thread</title>

	<?php include('php/header.php'); ?>

</head>

<body>

  <?php include('php/navbar.php'); ?>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/vaporheader.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-11 col-md-11 mx-auto">
          <div class="page-heading" id = "postHeading">
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-11 col-md-11 mx-auto" id= "postSection">
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
  
  <script src="js/parse_search.js?uid=<?php echo uniqid(); ?>"></script>
  
  <script>
	searchName();
  </script>

</body>

</html>
