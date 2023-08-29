<script>
	//input text value 바인딩
	let name = "";
	
	//input number/range value 바인딩
	let a = 1;
	let b =2;

	//input checkbox checked 바인딩
	let chk = false;

	//input checkbox/radio 그룹 바인딩
	let choice = 0;
	let sizes =["Tall", "Grande", "Venti", "Trenta"];

	// textarea value 바인딩
	let text = "내용을 입력해";

	//select value 바인딩 - 1개만 처리
	let sites =[
		{name : "사이트 선택", url : null},
		{name : "구글", url : "https://www.google.com"},
		{name : "네이버", url : "https://www.naver.com"},
		{name : "다음", url : "https://www.daum.net"}
	];

	let selected;

	function selectChange(){
		if(selected!=null) window.open(selected);
	}

	//select value 바인딩 - 여러 개 처리
	let foods = ["떡볶이", "라면", "치킨", "오뎅"];
	let selectedFood = '';
</script>

<!-- input text value 바인딩 -->
<input type="text" bind:value={name} placeholder="이름 입력 하쇼">
<p>hi! {name || "stranger!"}</p>
<hr/>

<!-- input number/range value 바인딩 -->
<label>
	<input type = number bind:value={a} min =0 max =10>
	<input type = range bind:value={a} min=0 max = 10>
</label>

<label>
	<input type = number bind:value={b} min =0 max =10>
	<input type = range bind:value={b} min=0 max = 10>
</label>

<p>{a}+{b}={a+b}</p>
<hr/>

<!-- input checkbox checked 바인딩 -->
<label>
	<input type="checkbox" bind:checked={chk}> 동의
</label>

{#if chk}
	<p>동의함</p>
{:else}
	<p>동의 안함</p>
{/if}

<button disabled={!chk}>
	확인
</button>
<hr/>

<!-- input checkbox/radio 그룹 바인딩 -->
<h3>사이즈 선택</h3>
{#each sizes as size, i}
	<input type="radio" bind:group={choice} value ={i}>
	{size} 
{/each}

<p>{sizes[choice]} 선택</p>
<hr/>

<!-- textarea value 바인딩 -->
<textarea bind:value={text} rows="5"/>
<p>{text}</p>
<hr/>

<!-- select value 바인딩 - 1개만 처리 -->
<h3>포털 사이트 바로 가기</h3>
<select bind:value={selected} on:change={selectChange}>
	{#each sites as site}
		 <option value={site.url}>{site.name}</option>
	{/each}
</select>
<hr/>

<!-- select -->