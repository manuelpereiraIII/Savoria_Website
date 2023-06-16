var head=`
<header>
	<span class="banner">
		<img src="banner.jpg">
	 	<h1>Savoria</h1>
	</span>
	<br>
	<nav>
		<ul>
			<li><a href="index.html">Home</a></li>
			<li><a href="menu.html">Menu</a></li>
			<li><a href="location.html">Location</a></li>
			<li><a href="contact">Contact</a></li>
		</ul>
	</nav>
</header>`;
var foot=`
<hr>
<footer>
	Made by members of Professor Handley's class, 2023
</footer>
`;
document.body.innerHTML=head+document.body.innerHTML+foot;
document.head.innerHTML+=`<link rel="icon" type="image/x-icon" href="/favicon.png">`;