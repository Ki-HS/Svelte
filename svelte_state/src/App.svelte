<script>
	let url ="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGz29o%2FbtrNgcGtBfI%2FbzaUnvh0SXlevptFhvYfwK%2Fimg.png";
	let src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGz29o%2FbtrNgcGtBfI%2FbzaUnvh0SXlevptFhvYfwK%2Fimg.png";
	let str = "안녕하세요! <strong>Svelte 연습장<strong/> 입니다.";

	let num = 0;
	const increaseNum = () => num++;
	const decreaseNum = () => num--;

	let person = {
		name : "김철수",
		age : 30,
		height : 176,
	}

	let people = [
		{
			name : "김철수",
			age : 30,
			height : 176,
		},
		{
			name : "신짱구",
			age : 10,
			height : 173,
		},
		{
			name : "한유리",
			age : 23,
			height : 166,
		},
		{
			name : "이훈이",
			age : 25,
			height : 169,
		}
	]
</script>

<!-- 태그 속성 값에 처리 -->
<img src ={url} alt = "야옹" />
<hr/>

<!-- 속성 속기법 -->
<img {src} alt = "야옹"/>
<hr/>

<!-- State 값의 태그 문자열 인식 -->
<!-- 태그 미인식 -->
<p>{str}</p>
<!-- 태그 인식 -->
<p>{@html str}</p>
<hr/>

<!-- click 이벤트를 이용한 State 값 변경 -->
<button on:click={increaseNum}>+</button>
<button on:click={decreaseNum}>-</button>
<br/>
<h1>클릭 횟수 : {num}</h1>
<hr/>

<!-- 객체 속성을 State로 활용 -->
<h1>이름 : {person.name}</h1>
<h1>나이 : {person.age}</h1>
<h1>키 : {person.height}</h1>
<hr/>

<!-- 객체로 이루어진 배열을 이용해서 상태 값 표시 -->
{#each people as item}
<h2>이름 : {item.name}</h2>
<h2>나이 : {item.age}</h2>
<h2>키 : {item.height}</h2>
<br/>
{/each}