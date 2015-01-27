define(function(require) {
    var btn = document.querySelector(".btn");
    btn.onclick = function() {
    	require(['app/dynamic/d1'],function(){
    		console.log('d1加载成功');
    	});
    }
})
