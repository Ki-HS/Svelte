<script>
	// DOM 이벤트 사용
	let d = {x: 0, y:0};
	function handleMouseMove(event){
		d.x=event.clientX;
		d.y=event.clientY;
	}

	//inline 이벤트 사용
	let i = {x:0,y:0};

	//함수 매개변수 사용
	//이때 따옴표(", ')가 아닌 쿼트(`)를 사용해야함!
	function handleClick1(text){
		alert(`${text} 클릭!`);
	}
	function handleClick2(text){
		alert(`${text} 클릭~`);
	}

	// once 수식어 사용
	function handleClick3(){
		alert('클릭은 한번만 제공.')
	}
</script>

<!-- DOM 이벤트 사용 -->
<div on:mousemove={handleMouseMove}>
	x좌표 : {d.x}<br>
	y좌표 : {d.y}
</div>
<hr>

<!-- inline 이벤트 사용 -->
<div on:mousemove={e=> i ={x:e.clientX, y:e.clientY}}>
	x좌표 : {i.x}<br>
	y좌표 : {i.y}
</div>
<hr>

<!-- 함수 매개변수 사용 -->
<!-- 매개변수 이벤트로 가져올 때 화살표 함수를 꼭 사용해야함 -->
<button on:click={()=>handleClick1('1번')}>첫번째 버튼</button>
<button on:click={()=>handleClick2("2번")}>두번째 버튼</button>
<hr/>

<!-- once 수식어 사용 -->
<button on:click|once={handleClick3}>클릭1</button>
<button on:click|once={handleClick3}>클릭2</button>


<style>
	div{width : 50%; height : 50%;}
</style>