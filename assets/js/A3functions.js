function submit_function(el){
	caller = $(el);

	// In case it is called a second time
	reset_redtext();

	form = caller.parent('form');


}

function reset_redtext(){

	// Remove all red-text classes in the document
	$(".red-text").removeClass('red-text');
}


$(document).ready(function(){

	required_fields = $(".required");
	$("#response_area p").html("There are " + required_fields.length + " required fields");
});