// function openNav() {
// 	document.getElementById("mySideNav").style.left = "250px";
// }

// function closeNav() {
// 	document.getElementById("mySideNav").style.left = "0px";
// }

$(".openNav").click(function() {
	$(".sideNav").animate( {
		// target keyframe
		left: "0px"
	// duration
	}, 200);
});

$(".closeNav").click(function() {
	$(".sideNav").animate( {
		left: "-250px"
	}, 200);
});