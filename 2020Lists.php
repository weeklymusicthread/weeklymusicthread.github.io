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

  <style>     
      /* Set additional styling options for the columns*/
      .column {
      float: left;
      width: 50%;
      font-size:medium;
      
      }
  
      .row:after {
      content: "";
      display: table;
      clear: both;
      }

      #titleRow {
        margin-bottom: 0px !important;
      }

    </style>

</head>

<body>

  <?php include('php/navbar.php'); ?>  

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/vaporheader.png')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-11 col-md-11 mx-auto">
          <div class="page-heading">
            <h1>2020 Favorites</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Post Content -->
  <article>
    <div class="container">
        <div class="row">
       <div class="col-lg-8 col-md-8 mx-auto" id="postSection">

          <div class="row justify-content-center">
            <p><b>DJ Bestivus: Best of Lists for the Rest of Us aka The WMT Editors</b></p>
                <div class="column text-center">
                  <p id="titleRow"><u>Albums</u></p>
                </div>
                <div class="column text-center">
                  <p id="titleRow"><u>Songs</u></p>
                </div>
          </div>

          <div class="row">
              <div class="column">
                
                 <p>1. <i>Truth or Consequences</i> by Yumi Zouma<br>
                    2. <i>Rough and Rowdy Ways</i> by Bob Dylan<br>
                    3. <i>Honeymoon</i> by Beach Bunny<br>
                    4. <i>Drug Dealing is a Lost Art</i> by Beach Bunny<br>
                    5. <i>Pop Music / False B Sides II</i> by Baths</p>
                
              </div>

              <div class="column">
            
                 <p>1. Murder Most Foul by Bob Dylan<br>
                    2. (Un)knowing by Young Jesus<br>
                    3. RASCAL by RMR<br>
                    4. Pink Pony Club by Chappell Roan<br>
                    5. Lonely After by Yumi Zouma<br>
                    5. Cool for a Second by Yumi Zouma<br>
                    5. Southwark by Yumi Zouma<br>
                    8. Ms. California by Beach Bunny<br>
                    9. Camouflage by the Front Bottoms<br>
                    10. Darkness by Katie Dey</p>

              </div>
          </div>         
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
  


</body>

</html>
