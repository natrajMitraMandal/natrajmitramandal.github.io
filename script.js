$(document).ready(function() {
	alert("नटराज नवरात्र उत्सव मंडळ मध्ये तुमचे स्वागत आहे\n🌠🌠🌠");

	const shareContext = {
		title: 'Natraj Navratri Utsav Mandal',
		text: 'Natraj Utsav Mandal',
		url: 'https://natrajmitramandal.github.io/'
	};
	
	$("#menu-bar").click(function() {
		$(this).toggleClass("fa-times");
		$("#menuList").toggleClass("show");
	});

	$("#share-btn").click(async function() {
		try {
			await navigator.share(shareContext);
			alert("Share successful.");
		} catch(err) {
			alert("Sharing failed.");
		}
	});

});