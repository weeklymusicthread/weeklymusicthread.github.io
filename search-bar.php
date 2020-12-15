<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> -->
<link href="css/search-bar.css?<?php echo time(); ?>" rel="stylesheet">
</head>     
<body>

<!--Make sure the form has the autocomplete function switched off:-->
<form autocomplete="off" action="/search.php">
  <div class="autocomplete" style="width:300px;">
    <input id="myInput" type="text" name="artist" placeholder="Search Artists">
  </div>
  <input type="submit">
</form>


<script src="js/search-bar.js?uid=<?php echo uniqid(); ?>"></script>

</body>
</html>
