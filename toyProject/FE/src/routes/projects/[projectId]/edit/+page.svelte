<script>
    import{Icon, Trash} from "svelte-hero-icons"
	import { Input } from '$lib/components/index.js';
	import { getImageURL } from "$lib/utils.js";
	import { enhance } from "$app/forms";

    export let data
</script>

<div class="flex flex-col w-full h-full p-2">
    <div class="w-full">
        <form action="?/updateProject" method="POST" class="flex flex-col w-full space-y-2 items-center" enctype="multipart/form-data" use:enhance>
            <h3 class="text-3xl font-bold">Edit {data.project.name}</h3>
            <Input id="name" label ="Project name" value = {data.project.name??''}/>
            <Input id="tagline" label="project tagline" value = {data.project.tagline??''}/>
            <Input id="url" label="Project URL" value = {data.project.url??''}/>
            <div class="form-control w-full max-w-lg">
                <label for="description" class="label font-medium pb-1">
                    <span class="label-text">Project description</span>
                </label>
                <textarea name="description"  class="textarea textarea-bordered h-24 resize-none" value={data.project.description??''}></textarea>
            </div>
            <div class="form-control w-full max-w-lg">
                <label for="thumbnail" class="label font-medium pb-1">
                    <span class="label-text">Thumbnail</span>
                </label>
                {#if data.project.thumbnail}
                    <label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
                        <label for="" class="absolute -top-1.5 -right-1.5 hover:cursor-pointer">
                            <button formaction="?/deleteThumbnail" class="btn btn-error btn-sm btn-circle">
                                <Icon src={Trash} class="w-5 h-5 text-white"/> 
                            </button>
                        </label>
                        <div class="w-20 rounded">
                            <img src={data.project?.thumbnail ? getImageURL(data.project.collectionId, data.project.id, data.project.thumbnail, '80x80'): `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.project.name}`} alt="project thumbnail">
                        </div>
                    </label>
                {/if}
                <input type="file" name="thumbnail" id="thumbnail" class="file-input file-input-bordered w-full max-w-lg">
            </div>
            <div class="w-full max-w lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
            </div>
        </form>
    </div>
</div>