var updating = false;

function startbomb(){
	var phone = $('#phone').val();
	$.ajax({ url: '/bomb',
		type: "POST",
  		data:  { phone: phone },
  		success: function( data ) {
		console.log(data);
	}});
	
	$('#bombing-results').html('');

	updating = false;
	setTimeout(function(){
		updating = true;
		startUpdate()
	},2000);
};

function getUpdate(){
	$.get('/updates', function( data ) {
		$('#bombing-results').append(data+"<br/>");
	});
};

function startUpdate(){
	getUpdate();

	if(updating == true)
		setTimeout(startUpdate, 1000);
};