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
var chat = { pics: "img/proj-prints/chat1.png", title:"chat", idea: "A chat system to be used on a video broadcast website that is being developed by a friend. The chat system allows multiple rooms, statuses, and users with different privileges.", builtWith: [{img:"img/Proj-logos/HTML5_Logo.svg", href:""},{img:"img/Proj-logos/socket io logo.svg", href:"http://http://socket.io"},{img:"img/Proj-logos/nodejs-logo.png", href:""}], gitHub: false
};

var tsk = { pics: "img/proj-prints/tsk.png", title:"Tsk", idea: "A To-Do-List Manager offering a simplified experience and giving the user the choice to use their Google or Dropbox account to store their content and keep it synchronized between multiple devices. Implemented alongside a Google Chrome Extension.", builtWith: [{img:"img/Proj-logos/HTML5_Logo.svg", href:""},{img:"img/Proj-logos/ionic_logo.png", href:"http://http://socket.io"},{img:"img/Proj-logos/jQuery-Logo.png", href:""}], gitHub: false
};

var slides = { pics: "img/proj-prints/slides.png", title:"Slides.js", idea: "A platform that allows people to present HTML5 slideshows and control them with their phones, tablets or even voice commands. It also allows drawing on the slides and will soon support PDF.", builtWith: [{img:"img/Proj-logos/HTML5_Logo.svg", href:""},{img:"img/Proj-logos/jQuery-Logo.png", href:"http://http://socket.io"},{img:"img/Proj-logos/nodejs-logo.png", href:""}], gitHub: false
};

function fillProject(json){
	//$("div.project div.photos").css("background-image", "url("+json.pics+")");
	$("div.project div.photos").empty();
	$("div.project div.photos").append("<img src='"+json.pics+"'>");
	//$("div.project div.photos").text("foi");
	$("div.project div.body h1.project-title").text(json.title);
	$("div.project div.body p.description").text(json.idea);
	$("div.project div.body div.built-with").empty();
	
	jQuery.each(json.builtWith, function(i, src){
		$("div.project div.body div.built-with").append("<div><img src='"+src.img+"' href='"+src.href+"'></div>");
	});
}

function fillProjectTab(json){
	//$("div.project div.photos").css("background-image", "url("+json.pics+")");
	$("div.project-tab div.photo").empty();
	$("div.project-tab div.photo").append("<img src='"+json.pics+"'>");
	//$("div.project div.photos").text("foi");
	$("div.project-tab div.column h1.title").text(json.title);
	$("div.project-tab div.column p.description").text(json.idea);
	$("div.project-tab div.column div.built-with").empty();
	
	jQuery.each(json.builtWith, function(i, src){
		$("div.project-tab div.column div.built-with").append("<div><img src='"+src.img+"' href='"+src.href+"'></div>");
	});
}

$(function(){
	
	$(window).scroll(function() {
		if($(window).scrollTop()> 2) {
		   $("header").addClass("down");
	   }else{
		   $("header").removeClass("down");
	   }
		
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
		   $("div.section-contact a").addClass("up");
	   }
	});
	

	  $('header nav ul li a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top-56
			}, 1000);
			return false;
		  }
		}
	  });
	
	/*$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
		   $("div.section-contact button").removeClass("up");
	   }
	});*/
	
	$("img.item-carousel").click(function(){
		var pic = $(this).css("background-image");
		$("div.img-big").css("background-image", pic);
	});
	/*
	$("div.section-projects div.projects-list div.project-item.chat").click(function(){
		fillProject(chat);
		$(this).addClass("expanded");
		$("div.cover").addClass("expanded");
		$("div.whole").addClass("blur");
		$("div.project").addClass("expanded");
		
	});
	
	$("div.section-projects div.projects-list div.project-item.tsk").click(function(){
		fillProject(tsk);
		$(this).addClass("expanded");
		$("div.cover").addClass("expanded");
		$("div.whole").addClass("blur");
		$("div.project").addClass("expanded");
		
	});
	
	$("div.section-projects div.projects-list div.project-item.slides").click(function(){
		fillProject(slides);
		$(this).addClass("expanded");
		$("div.cover").addClass("expanded");
		$("div.whole").addClass("blur");
		$("div.project").addClass("expanded");
		
	});
	*/
	
	$("div.section-projects div.projects-list div.project-item.chat").click(function(){
		fillProjectTab(chat);
		$("div.project-tab").addClass("with-height");
		$("div.project-tab div.triangle").removeClass("pos-1 pos-2 pos-3");
		$("div.project-tab div.triangle").addClass("pos-1");
	});
	
	$("div.section-projects div.projects-list div.project-item.tsk").click(function(){
		fillProjectTab(tsk);
		$("div.project-tab").addClass("with-height");
		$("div.project-tab div.triangle").removeClass("pos-1 pos-2 pos-3");
		$("div.project-tab div.triangle").addClass("pos-2");
	});
	
	$("div.section-projects div.projects-list div.project-item.slides").click(function(){
		fillProjectTab(slides);
		$("div.project-tab").addClass("with-height");
		$("div.project-tab div.triangle").removeClass("pos-1 pos-2 pos-3");
		$("div.project-tab div.triangle").addClass("pos-3");
	});
	
	$("div.cover").click(function(){
		$(this).removeClass("expanded");
		$("div.cover").removeClass("expanded");
		$("div.whole").removeClass("blur");
		$("div.project").removeClass("expanded");
	});
});