$(document).ready(function(){
	//�N���b�N�Ŋe�R���e���c��؂�ւ�
	$('.switch').click(function(){
		var loadContents = $(this).attr('title');
		$('#log').load(loadContents+'.html');
	});

});
