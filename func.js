$(document).ready(function(){
	//初期状態でのロードファイルを指定
	$('#mainContents').load('home.html');

	//クリックで各コンテンツを切り替え
	$('.switchButton').click(function(){
		var loadContents = $(this).attr('title');
		$('#mainContents').load(loadContents+'.html');
	});

	//クリックで各コンテンツを切り替え
	$('.switch').click(function(){
		var loadContents = $(this).attr('title');
		$('#mainContents').load(loadContents+'.html');
	});

	//menuクリック時の動作
	$("#toggle").click(function(){
		$("#menu").slideToggle();
		return false;
	});

	//ウィンドウがスマホサイズ時の表示切替
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
