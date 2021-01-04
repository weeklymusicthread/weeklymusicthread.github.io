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
        font-size:125%;
      }

      #DJRow {
        margin-bottom:0px !importnat;
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
            <h1>2020 Year End Lists</h1>
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
            <p id="DJRow"><b>DJ Bestivus: Best of Lists for the Rest of Us</b></p>
            <p style="font-size:150%"><b>(aka The WMT Editors)</b></p>
          </div>
          <div class="row justify-content-center">
                <div class="column text-center">
                  <p id="titleRow"><u>Albums</u></p>
                </div>
                <div class="column text-center">
                  <p id="titleRow"><u>Songs</u></p>
                </div>
          </div>

          <div class="row">
              <div class="column">
                
                 <p>1. <i>Truth or Consequences</i> by <a href="search.html?artist=Yumi Zouma">Yumi Zouma</a><br>
                    2. <i>Rough and Rowdy Ways</i> by <a href="search.html?artist=Bob Dyland">Bob Dylan</a><br>
                    3. <i>Honeymoon</i> by <a href="search.html?artist=Beach Bunny">Beach Bunny</a><br>
                    4. <i>Drug Dealing is a Lost Art</i> by <a href="search.html?artist=RMR">RMR</a><br>
                    5. <i>Pop Music / False B Sides II</i> by <a href="search.html?artist=Baths">Baths</a></p>
                
              </div>

              <div class="column">
            
                 <p>1. Murder Most Foul by <a href="search.html?artist=Bob Dyland">Bob Dylan</a><br>
                    2. (Un)knowing by <a href="search.html?artist=Young Jesus">Young Jesus</a><br>
                    3. RASCAL by <a href="search.html?artist=RMR">RMR</a><br>
                    4. Pink Pony Club by <a href="search.html?artist=Chappell Roan">Chappell Roan</a><br>
                    5. Lonely After by <a href="search.html?artist=Yumi Zouma">Yumi Zouma</a><br>
                    5. Cool for a Second by <a href="search.html?artist=Yumi Zouma">Yumi Zouma</a><br>
                    5. Southwark by <a href="search.html?artist=Yumi Zouma">Yumi Zouma</a><br>
                    8. Ms. California by <a href="search.html?artist=Beach Bunny">Beach Bunny</a><br>
                    9. Camouflage by <a href="search.html?artist=the Front Bottoms">the Front Bottoms</a><br>
                    10. Darkness by <a href="search.html?artist=Katie Dey">Katie Dey</a></p>

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
