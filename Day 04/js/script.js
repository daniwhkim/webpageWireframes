$(document).ready(function() {

	$(".openNav").click(function() {
		$(".sideNav").animate( {
			right: "0px"
		}, 200);
		$("body").css("background-color", "rgba(0, 0, 0, 0.2)");
		$(window).resize();

		if (($(window).width()) >= 768) {
			// console.log("Apply Push Nav!");
			$("main").animate( {
				marginRight: "250px"
			}, 200);
			$(window).resize();
		};
	});

	$(".closeNav").click(function() {
		$(".sideNav").animate( {
			right: "-250px"
		}, 200);
		$("main").animate( {
			marginRight: "0px"
		}, 200);
		$("body").css("background-color", "white");
	});

	// function navPos() {
	// 	if (($(".sideNav").css("right") === "0px") && (($(window).width()) <= 768)) {
	// 		console.log("Disable Push Nav!");
	// 	};
	// }
	// navPos();

});