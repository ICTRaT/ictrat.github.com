$(document).ready(function(){
	//������Ԃł̃��[�h�t�@�C�����w��
	$('#mainContents').load('home.html');

	//�N���b�N�Ŋe�R���e���c��؂�ւ�
	$('.switchButton').click(function(){
		var loadContents = $(this).attr('title');
		$('#mainContents').load(loadContents+'.html');
	});

	//�N���b�N�Ŋe�R���e���c��؂�ւ�
	$('.switch').click(function(){
		var loadContents = $(this).attr('title');
		$('#mainContents').load(loadContents+'.html');
	});

	//menu�N���b�N���̓���
	$("#toggle").click(function(){
		$("#menu").slideToggle();
		return false;
	});

	//�E�B���h�E���X�}�z�T�C�Y���̕\���ؑ�
	$(window).resize(function(){
		var win = $(window).width();
		var p = 480;
		if(win > p){
			$("#menu").show();
		}else {
			$("#menu").hide();
		}
	});
});
