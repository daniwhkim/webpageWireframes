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
