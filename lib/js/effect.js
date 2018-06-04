//Right-click, copy

function killCopy(e) {
	return false
}
function reEnable() {
	return true
}
document.onselectstart = new Function("return false")
if (window.sidebar) {
	document.onmousedown = killCopy
	document.onclick = reEnable
}

// Right-click

var message = "Xin chào bạn đến với website của tôi!!";
function clickIE4() {
	if (event.button == 2) {
		alert(message);
		return false;
	}
}
function clickNS4(e) {
	if (document.layers || document.getElementById && !document.all) {
		if (e.which == 2 || e.which == 3) {
			alert(message);
			return false;
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = clickNS4;
} else if (document.all && !document.getElementById) {
	document.onmousedown = clickIE4;
}
document.oncontextmenu = new Function("alert(message);return false")

// F12, Ctrl + Shift + I, Ctrl + U, Ctrl + S

$(document).keydown(function(event) {
	if (event.keyCode == 123) {
		alert(message);
		return false; // F12
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
		alert(message);
		return false; // ctrl+shift+i
	} else if (event.ctrlKey && event.keyCode == 85) {
		alert(message);
		return false; // Ctrl+U
	} else if (event.ctrlKey && event.keyCode == 83) {
		alert(message);
		return false; // ctrl+S
	}
});

// JQuery ShowMenu

$(document).ready(function() {
	// ForwardButton
	$("#flip").click(function() {
		$("#menu2").show("slow");
	});
	$("#flip").click(function() {
		$("#menu1").hide("slow");
	});
	$("#flip1").click(function() {
		$("#menu3").show("slow");
	});
	$("#flip1").click(function() {
		$("#menu2").hide("slow");
	});
	// BackButton
	$("#back").click(function() {
		$("#menu1").show("slow");
	});
	$("#back").click(function() {
		$("#menu2").hide("slow");
	});
	$("#back1").click(function() {
		$("#menu2").show("slow");
	});
	$("#back1").click(function() {
		$("#menu3").hide("slow");
	});
	// Tabbar
	$("#login1").click(function() {
		$("#login").show();
	});
	$("#login1").click(function() {
		$("#menu1,#menu2,#menu3,#forgot").hide("50");
	});
	$("#dangky1").click(function() {
		$("#menu1").show("slow");
	});
	$("#dangky1").click(function() {
		$("#login,#menu2,#menu3,#forgot").hide();
	});
	// text-align
	$("#login2").click(function() {
		$("#login").show();
	});
	$("#login2").click(function() {
		$("#forgot").hide();
	});
	$("#dangky2").click(function() {
		$("#menu1").show("slow");
	});
	$("#dangky2").click(function() {
		$("#login").hide();
	});
	$("#dangky2").click(function() {
		$("#forgot").hide();
	});
	$("#dangky3").click(function() {
		$("#menu1").show("slow");
	});
	$("#dangky3").click(function() {
		$("#login").hide();
	});
	$("#dangky3").click(function() {
		$("#forgot").hide();
	});
	$("#forgot1").click(function() {
		$("#forgot").show("slow");
	});
	$("#forgot1").click(function() {
		$("#login").hide();
	});
	
	// dropdown input-group-addon
	$("#sdtdk").click(function() {
		$("#dropdown1").show();
	});
	$("#sdtdk").click(function() {
		$("#dropdown").hide();
	});
	$("#sdtdk").click(function() {
		$("#dropdown2").hide();
	});
	$("#email").click(function() {
		$("#dropdown").show();
	});
	$("#email").click(function() {
		$("#dropdown1").hide();
	});
	$("#email").click(function() {
		$("#dropdown1").hide();
	});
	$("#bss").click(function() {
		$("#dropdown2").show();
	});
	$("#bss").click(function() {
		$("#dropdown").hide();
	});
	$("#bss").click(function() {
		$("#dropdown1").hide();
	});
	$("#bss1").click(function() {
		$("#dropdown2").show();
	});
	$("#bss1").click(function() {
		$("#dropdown").hide();
	});
	$("#bss1").click(function() {
		$("#dropdown1").hide();
	});
	$("#email1").click(function() {
		$("#dropdown").show();
	});
	$("#email1").click(function() {
		$("#dropdown1").hide();
	});
	$("#email1").click(function() {
		$("#dropdown2").hide();
	});
	$("#sdtdk1").click(function() {
		$("#dropdown1").show();
	});
	$("#sdtdk1").click(function() {
		$("#dropdown").hide();
	});
	$("#sdtdk1").click(function() {
		$("#dropdown2").hide();
	});
});

// Repeat
function myFunction() {

	document.getElementById("").reset();
	location.reload();
}
