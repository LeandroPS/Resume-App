// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

/*
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
*/
var chat = { pics: [{src:""},{src:""}], title:"chat", idea: "Here it goes...", builtWith: [{img:"", href:""}]
};

function fillProject(json){
	$("div.project div.body h1.project-title").text(json.title);
	$("div.project div.body p.description").text(json.idea);
	$("div.project div.body div.built-with").empty();
	jQuery.each(json.builtWith, function(i, src){
		$("div.project div.body div.built-with").append("<img src='"+src.img+"' href='"+src.href+"'>");
	});
}

$(function(){
	
	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
		   $("div.section-contact button").addClass("up");
	   }
	});
	
	$("img.item-carousel").click(function(){
		var pic = $(this).css("background-image");
		$("div.img-big").css("background-image", pic);
	});
	
	$("div.section-projects div.projects-list div.project-item ").click(function(){
		fillProject(chat);
		$(this).addClass("expanded");
		$("div.cover").addClass("expanded");
		$("div.whole").addClass("blur");
		$("div.project").addClass("expanded");
		
	});
	
	$("div.cover").click(function(){
		$(this).removeClass("expanded");
		$("div.cover").removeClass("expanded");
		$("div.whole").removeClass("blur");
		$("div.project").removeClass("expanded");
	});
});