$(document).ready(function(){
	//クリックで各コンテンツを切り替え
	$('.switch').click(function(){
		var loadContents = $(this).attr('title');
		$('#log').load(loadContents+'.html');
	});

});
