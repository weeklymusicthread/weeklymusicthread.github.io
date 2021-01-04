<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
	<div class="container">
		<a class="navbar-brand" href="index.php">Weekly Music Thread</a>
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			Menu
			<i class="fas fa-bars"></i>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link" href="index.php">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="music.php?page=1">Music</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="2020Lists.php?page=1">2020 Lists</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="about.php">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="contact.php">Contact</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="http://eepurl.com/hldpzX">Subscribe</a>
				</li>
				<li class="nav-item">
					<a style = "color:#1ED761" class="nav-link" target="_blank" href="https://open.spotify.com/playlist/5wYcswVJA6rDdJfYV0ZDFs?si=M8r9vKRwSZmVqRP9lazn1Q">Spotify</a>
				</li>
				<li class="nav-item">
					<form class="form-inline" autocomplete="off" action="/search.php">
						<div class="form-group" style="font: 16px Arial">
							<div class="autocomplete">
								<input id="myInput" type="text" name="artist" placeholder="Search Artists">
							</div>
							<button class="btn btn-primary" type="submit" value="" style="padding: 8.7px 16px;"><i class="fas fa-search"></i></input>
						</div>
					</form>
				</li>

				<!-- <li class="nav-item">
					<script async src="https://cse.google.com/cse.js?cx=a70366dae94dfe622"></script>
					<div class="gcse-searchbox-only" data-resultsUrl="results.php"></div>
				</li> -->
			</ul>
		</div>
	</div>
</nav>