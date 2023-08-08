<script>
	import Child from "./child.svelte";

	let age01 = 20;
	let age02 = 21;

	const agePlus=()=>{
		age01++;
		age02++;
	}

	const ageMinus = ()=>{
		age01--;
		age02--;
	}

	//Spread Props
	const allData01={
		user : '한유리',
		age : 5,
		hobby : '리얼소꿉놀이'
	}
	const allData02 = {
		user : "봉미선",
		age : 30,
		hobby : "쇼핑"
	}
</script>

<!-- Props 기본 사용 방법 -->
<Child user ={'김철수'} age={20} hobby={'축구하기'}/>
<Child user = {"이영희"} age ={21} hobby={"넷플릭스보기"}/>

<!-- 기본값 설정 -->
<Child/>

<!-- Props 데이터 변경 -->
<Child user ={'김철수'} age={age01} hobby={'축구하기'}/>
<Child user = {"이영희"} age ={age02} hobby={"넷플릭스보기"}/>

<button on:click={ageMinus}>나이감소</button>
<button on:click={agePlus}>나이증가</button>

<!-- Spread Props -->
<Child {...allData01}/>
<Child {...allData02}/>