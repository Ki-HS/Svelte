<script>
	// if block
	let user = {loggedIn : false};

	function toggle(){
		user.loggedIn = !user.loggedIn;
	}

	// else block
	let userElse = {loggedIn : false};

	function toggleElse(){
		userElse.loggedIn = !userElse.loggedIn;
	}

	// else if block
	let x = null;

	function numChange(e){
		x=e.target.value;
	}

</script>

<!-- if block -->
{#if user.loggedIn}
	<button on:click={toggle}>로그아웃</button>
	<p>현재 로그인 상태입니다.</p>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>로그인</button>
	<p>현재 로그아웃 상태입니다.</p>
{/if}
<hr/>

<!-- else block -->
{#if userElse.loggedIn}
	<button on:click={toggleElse}>로그아웃</button>
	<p>현재 로그인 상태입니다.</p>
{:else}
	<button on:click={toggleElse}>로그인</button>
	<p>현재 로그아웃 상태입니다.</p>
{/if}
<hr/>

<!-- else if block -->
<label for="testBox">양수/음수 테스트</label>
<input type = "text" id = "testBox" on:keyup={numChange} placeholder="정수 입력하쇼">

{#if x>0}
	<p>양수</p>
{:else if x ==="0"}
	<p>0</p>
{:else if x<0}
	<p>음수</p>	
{/if}

