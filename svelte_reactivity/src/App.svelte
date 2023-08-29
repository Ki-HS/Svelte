<script>
	let count = 1;
	let product = 1;

	$: doubled = count * 2;
	$: square = count * count;

	// $:의 그룹화
	$:{
		console.log("두배 : " + doubled);
		console.log("제곱 : "+square);
	}

	//조건절
	$: if(product >= 10){
		alert("10개 이상 구매할 수 없다.")
		product = 9;
	}
	$: if(product<= 0 ){
		alert("최소 구매 개수는 1개다.");
		product = 1;
	}

	function handleClick(){
		count++;
	}

	function plusHandle(){product++;}
	function minusHandle(){product--;}
</script>

<!-- 변수 선언형 - $: -->
<button on:click={handleClick}> 클릭 : {count}</button>
<br/>
<p>두배 ({count} * 2) = {doubled}</p>
<p>제곱 ({count} * {count}) = {square}</p>
<br/>

<!-- $:의 조건절 -->
<button on:click={minusHandle}>-</button>
<input type="text" value = "{product}" style ="width: 25px;">
<button on:click={plusHandle}>+</button>