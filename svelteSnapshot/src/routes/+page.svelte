<script lang=ts>

let formData={
    username:'',
}

export const snapshot:import("@sveltejs/kit").Snapshot={
    capture:()=>formData,
    restore:(value)=>(formData=value)
}
</script>

<!-- snapshot으로 다른 페이지 이동이나 새로고침해도 데이터가 복구된다 -->
<h1>name</h1>
<input type="text" name = "username" bind:value={formData.username}>

<h1>pw</h1>
<input type="password" name="password">