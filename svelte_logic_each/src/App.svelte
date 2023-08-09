<script>
	let weekdays=['월','화','수'];

	// 객체 데이터 방식으로 반복 처리
	let data=[
		{
			name:"johan",
			birth : 1923,
			sex : "M"
		},
		{
			name:"risa",
			birth : 1935,
			sex : "F"
		},
		{
			name:"jenny",
			birth : 1955,
			sex : "F"
		},
		{
			name:"henry",
			birth : 1999,
			sex : "M"
		},
		{
			name:"oriana",
			birth : 2000,
			sex : "F"
		}
	]

	//요소 값에 고유한 key를 설정
	function deleteData(){
		data=data.slice(1);
	}
</script>

<!-- 기본 each block -->
<select>
	{#each weekdays as weekday}
		<option>{weekday}요일</option>
	{/each}
</select>
<hr/>

<!-- 인덱스 제공 -->
{#each weekdays as weekday, i }
	<p>{i+1} : {weekday}</p>
{/each}
<hr/>

<!-- 객체 데이터 방식으로 반복 처리 -->
{#each data as datum}
	<h2>{datum.name}</h2>
	<p>{datum.birth}</p>
	<p>{datum.sex}</p>
	<br/>
{/each}
<hr/>

{#each data as {name, birth, sex}}
	<h2>{name}</h2>
	<p>{birth}</p>
	<p>{sex}</p>
	<br/>
{/each}
<hr/>
<!-- 요소 값에 고유한 key를 설정 -->
<button on:click={deleteData}></button>

{#each data as {name, birth, sex}}
	<h2>{name}</h2>
	<p>{birth}</p>
	<p>{sex}</p>
	<br/>
{/each}
<hr/>