document.getElementById("year").innerHTML = new Date().getFullYear();

// Code example tab controls
function showCode(evt, codeType) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(codeType).style.display = "block";
	evt.currentTarget.className += " active";
}
if (document.getElementById("toggleMenu") !== null) {
	let toggleMenuButton = document.getElementById('toggleMenu')
	toggleMenuButton.addEventListener("click", toggleMenuNow)
		console.log('Clicked!')
};

function toggleMenuNow() {
	var x = document.getElementById("mobileNav");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

function onResize() {
	if (window.innerWidth > 601) {
		var x = document.getElementById("mobileNav");
		x.style.display = "none";
	}
}

window.addEventListener("resize", onResize)

let colorSelectorList = document.querySelectorAll('#colorSelector button')

for (i = 0; i < colorSelectorList.length; i++) {
	colorSelectorList[i].addEventListener("click", changeColorScheme)
}

function changeColorScheme(event) {
	let color = event.target.getAttribute('data-color')
	console.log(color)
	document.getElementById('colorScheme').setAttribute('href', 'templates/css/' + color + '.css');
	setCookie("setColorScheme", color, 30)
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=Strict";
}

/* Login Modal */
const loginModal = document.getElementById("loginModal");

function openLogin() {
	loginModal.showModal();
	console.log('Opened.');
}
function closeLogin() {
	loginModal.close();
	console.log('Closed.');
}
// if (document.getElementById("loginButton") !== null) {
// 	console.log("Button On")
// 	document.getElementById("loginButton").addEventListener("click", openLogin);
// };

$(document).ready(function () {
	console.log("ready!");

	// $(".resizable").resizable();

	// used to refresh the page session without reloading the page
	setInterval(pageRefresh, 10 * 60 * 1000);

	function pageRefresh() {
		var d = new Date();
		//  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var updatedTime = this.responseText;
				document.getElementById("pageRefresh").innerHTML = updatedTime;
				console.log(updatedTime);
			}
		};
		xmlhttp.open("GET", "/scripts/pageRefresh.php", true);
		xmlhttp.send();
	}

	// the following javascript is for the date picker. see https://jqueryui.com/datepicker/ for documentation
	// date picker functions

	// $('.startOfDay').timepicker({ 'step': 10 });
	// $('.endOfDay').timepicker({ 'step': 10 });

	// $("#datepicker").datepicker();

	// $("#OpenDate").datepicker();
	// $("#CloseDate").datepicker();

	// $('#OpenTime').timepicker({ 'step': 15 });
	// $('#CloseTime').timepicker({ 'step': 15 });
	// $('.DueTime').timepicker({ 'step': 15 });

	// document.getElementById("menuLink").addEventListener("click", toggleFunction);
	$(".menuLink").click(function () {
		$("#navLinks").toggleClass("w3-show");
	});

		// onclick="document.getElementById('loginButton').style.display='block'"
	// $("#loginButton").click(function () {
	// 	$("#loginModal").show();
	// 	document.getElementById("Username").focus();
	// });

	//onclick="document.getElementById('loginModal').style.display='none'" 
	// $(".hideLoginModal").click(function () {
	// 	$("#loginModal").hide();
	// });
	// jQuery version of find escape key
	// $(document).keyup(function (e) {
	// 	if (e.key === "Escape") { // escape key maps to keycode `27`
	// 		// <DO YOUR WORK HERE>
	// 		$("#loginModal").hide();
	// 	}
	// });

	// onclick="document.getElementById('loginButton').style.display='block'"
	$(".editClassButton").click(function () {
		classID = $(this).attr('data-classID');
		//	console.log(classID);
		var showClassID = $("#editClassModal" + classID).show();
		$("#classID").val(classID);
		console.log(showClassID);

	});
	$(".editClassInfoButton").click(function () {
		classID = $(this).attr('data-classID');
		//	console.log(classID);
		var showClassID = $("#editClassInfoModal" + classID).show();
		$("#classID").val(classID);
		console.log(showClassID);

	});
	$(".editClassScheduleButton").click(function () {
		classID = $(this).attr('data-classID');
		//	console.log(classID);
		var showClassID = $("#editClassScheduleModal" + classID).show();
		$("#classID").val(classID);
		console.log(showClassID);

	});
	$(".editClassMeetingButton").click(function () {
		classID = $(this).attr('data-classID');
		//	console.log(classID);
		var showClassID = $("#editClassMeetingModal" + classID).show();
		$("#classID").val(classID);
		console.log(showClassID);

	});

	//onclick="document.getElementById('loginModal').style.display='none'" 
	$(".hideClassModal").click(function () {
		console.log(classID);
		$(".classModal").hide();
		$("#classID").val();
	});

	// create the options for the example-tabs widget
	// used to display code see example_code.php for articles.php
	var tabOpts = {
		collapsible: true,
		active: 0
	}
	// apply the tabs widget to the example-tabs div
	// $("#example-tabs").tabs(tabOpts);

	// var accOpts = {
	// 	collapsible: true,
	// 	active: false
	// };
	// $('#rubrics').accordion(accOpts);
	$('#rubric').hide();
	$('#rubricButton').click(function () {
		$('#rubric').toggle();
	})
	$('#rubricButton').tooltip();

	/* Copy syllabus function */
	function copy() {
		var copyText = document.getElementById("contentCopy");
		navigator.clipboard.writeText(copyText.value);
		copyText.select();
		// document.execCommand("copy");
		alert('Copied to clipboard.');
	}
	if (document.getElementById("copySyllabus") !== null) {
		document.getElementById("copySyllabus").addEventListener("click", copy);
	};

	function copyAssign() {
		copyText = document.getElementById("assignmentCopy");
		copyText.select();
		navigator.clipboard.writeText(copyText.value);
		alert('Copied to clipboard.');
	}
	if (document.getElementById("copyAssignment") !== null) {
		document.getElementById("copyAssignment").addEventListener("click", copyAssign);
		console.log('Clicked!')
	};

	$('#regPassword1').click(function () {
		$('#message').show();
	});
	$('#regPassword1').blur(function () {
		$('#message').hide();
	});


});

function delete_reference(referenceID) {
	if (confirm("Are you sure you want to delete this reference? This cannot be undone.")) {
		window.location = "references.php?delete_reference&referenceID=" + referenceID;
	}
}

function delete_localReferenceDocument(referenceID) {
	if (confirm("Are you sure you want to delete this reference document? This cannot be undone.")) {
		window.location = "references.php?delete_localReferenceDocument&referenceID=" + referenceID + "&URL=" + URL;
	}
}

// validate original password
// When the user starts to type something inside the password field
function strongPW() {
	var myInput = document.getElementById("regPassword1");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");

	//	document.getElementById("message").style.display = "block";

	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if (myInput.value.match(lowerCaseLetters)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}

	// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if (myInput.value.match(upperCaseLetters)) {
		capital.classList.remove("invalid");
		capital.classList.add("valid");
	} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	}

	// Validate numbers
	var numbers = /[0-9]/g;
	if (myInput.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

	// Validate length
	if (myInput.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}
}

//validate password match
function checkPW() {
	var regPassword1 = document.getElementById("regPassword1");
	var regPassword2 = document.getElementById("regPassword2");

	if (regPassword1.value != regPassword2.value) {
		match.style.background = "red";
		match.style.color = "white";
		document.getElementById("match").innerHTML = "No Match";
	} else {
		match.style.background = "green";
		match.style.color = "white";
		document.getElementById("match").innerHTML = "Match";
	}
}

// admin functions

function delete_class(classID) {
	if (confirm("Are you sure you want to delete this class and the class objectives? This cannot be undone.")) {
		window.location = "edit_classes.php?delete_class&classID=" + classID;
	}
}
function delete_syllabus(courseID) {
	if (confirm("Deleting a course syllabus will also delete all NATEF Links to this course along with all course assignments. Are you sure you want to delete this course? This cannot be undone.")) {
		window.location = "edit_syllabus.php?delete_syllabus&courseID=" + courseID;
	}
}
function delete_category_link(natefCategoryLinkID, courseID) {
	if (confirm("Are you sure you want to delete this category link? This cannot be undone.")) {
		window.location = "edit_syllabus.php?delete_category_link&natefCategoryLinkID=" + natefCategoryLinkID + "&courseID=" + courseID;
	}
}
function delete_course_goal(courseID, POID) {
	if (confirm("Are you sure you want to delete this Course Goal? This cannot be undone.")) {
		window.location = "course_objectives.php?delete_course_goal&courseID=" + courseID + "&POID=" + POID;
	}
}
function delete_reference_link(CourseReferenceID, POID, assignmentID) {
	if (confirm("Are you sure you want to delete this reference link? This cannot be undone.")) {
		window.location = "course_assignments.php?delete_reference_link&CourseReferenceID=" + CourseReferenceID + "&POID=" + POID + "&assignmentID=" + assignmentID;
	}
}
function delete_ws_link(crse_ws_link_ID, POID, assignmentID) {
	if (confirm("Are you sure you want to delete this worksheet link? This cannot be undone.")) {
		window.location = "course_assignments.php?delete_ws_link&crse_ws_link_ID=" + crse_ws_link_ID + "&POID=" + POID + "&assignmentID=" + assignmentID;
	}
}
function delete_section_link(natefSectionLinkID, courseID, assignmentID) {
	if (confirm("Are you sure you want to delete this NATEF reference link? This cannot be undone.")) {
		window.location = "course_assignments.php?delete_section_link&natefSectionLinkID=" + natefSectionLinkID + "&courseID=" + courseID + "&assignmentID=" + assignmentID;
	}
}

function delete_area_link(scansAreaLinkID, POID, assignmentID) {
	if (confirm("Are you sure you want to delete this SCANS area link? This cannot be undone.")) {
		window.location = "course_assignments.php?delete_area_link&scansAreaLinkID=" + scansAreaLinkID + "&POID=" + POID + "&assignmentID=" + assignmentID;
	}
}

function delete_orphan_assignment(assignmentID, courseID) {
	if (confirm("Are you sure you want to delete this Assignment? This cannot be undone.")) {
		window.location = "course_assignments.php?delete_orphan_assignment&assignmentID=" + assignmentID + "&courseID=" + courseID;
	}
}

function delete_assignment(assignmentID, POID) {
	if (confirm("Are you sure you want to delete this Assignment? This cannot be undone.")) {
		window.location = "course_assignments.php?delete_assignment&assignmentID=" + assignmentID + "&POID=" + POID;
	}
}
