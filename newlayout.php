<!DOCTYPE html>
<html lang="en">

<head>
  <?php include('php/header2.php'); ?>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />

  <title>Weekly Music Thread</title>

  <style>     
      /* Set additional styling options for the columns*/
      .column-title {
				text-align: center;
      }

      .column-content{
        
      }

      .strike {
        display: block;
        text-align: center;
        overflow: hidden;
        white-space: nowrap; 
      }

    .strike > span {
        position: relative;
        display: inline-block;
      }
	
    .strike > span:before,
    .strike > span:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 140%;
        height: 1px;
        background: black;
      }

    .strike > span:before {
        right: 100%;
        margin-right: 15px;
      }

    .strike > span:after {
        left: 100%;
        margin-left: 15px;
      }

    .container {
        position: relative;
      }

    .text-block {
        position: absolute;
        text-align: center;
        bottom: 0px;
        right: 0px;
        background-color: rgb(65,65,65);
        width: 100%;
        color: white;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 15px;
        padding-bottom: 15px;
      }

      .card {
        margin: 0 auto;
        float: none;
        margin-bottom: 10px;
      }

      .card-category {

        color: rgb(142, 47, 231);
        font-size: 13px;
        font-weight: 600;
      }

      .card-music {

        font-size: 16px;
        font-weight: 500;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .card-date {
  
        font-size: 13px;
        font-weight: 500;
        color: rgb(150,150,150);
      }


      .slide {

        width: 600px;
        height: 600px;
      
      }

      .imgborder {

        border: 1px solid #000;
        padding-left: 0px;
        padding-right: 0px;
        
      }

      .imgborder:before {
          content: '';
          position:absolute;
          top:0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.75) 100%);
          z-index: 1;
      }

      .image-text {
        position: absolute; 
        bottom: 0; 
        text-align: center;
        width: 100%;
        padding-bottom: 25px;
        color: #FFFFFF;
        z-index: 2;
      }

      .imageContainer {
        width:100%; 
        height:500px; 
        background-image: url(img/squareimage.png);
        border: 10px solid #000;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
        bottom: 0;
      }

      .preview-image {
        width: 200px;
        height: 133px;
        float:left;
        margin-right: 1.25em;
      }

      .preview-text {
        overflow: hidden;
        font-size: 16px;
        min-height: 72px;
      }

      

    </style>
	
      

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
