/**
 *
 */
$(function() {
	$('.lp_button').on('click', function(event) {
		event.preventDefault();
		location.href = $('#lp_url').val();
		return false;
	});
});

$(function() {
	$('.chat_button').on('click', function() {
		event.preventDefault();
		location.href = $('#chat_url').val();
		return false;
	});
});

function sampleClick() {
	alert("クリックされました");
}