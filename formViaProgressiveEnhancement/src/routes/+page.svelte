<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	import type { ActionData, PageData } from './$types';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;
	export let form: ActionData;

    const submitCreateNote = ({form,data,action, cancel})=>{
        const {title, content}=Object.fromEntries(data);

        // if(title.length<1){
        //     toast.error('Title is empty')
        //     cancel();
        // }

        return async({result, update})=>{
            switch(result.type){
                case 'success':
                    toast.success("success")

                    // update()로 이 두 가지 기능 할 수 있음
                    // await applyAction(result);
                    // await invalidateAll();
                    break
                case 'invalid':
                    toast.error('error')
                    break;
                default :
                    break
            }
            await update();           
        }
        //cancel();
        // return async({result,update})=>{

        // }
    }
</script>

<div class="split">
	<div class="side">
		<form action="?/create" method="POST" class="form-create" use:enhance={submitCreateNote}>
			<label for="title"> Title </label>
			<input type="text" name="title" />
			<label for="content">Content</label>
			<input type="text" name="content" />
			<button type="submit">Add</button>
			{#if form?.errorMsg}
				<div class="alert error">{form.errorMsg}</div>
			{/if}
		</form>
	</div>
	<div class="side">
		{#each data.notes as note}
			<div class="note">
				<div>
					<h4>{note.title}</h4>
					<p>{note.content}</p>
				</div>
				<form action="?/delete" method="POST" use:enhance>
					<input type="hidden" name="title" value={note.title} />
					<button type="submit">❌</button>
				</form>
			</div>
		{/each}
	</div>
</div>

<style>
</style>