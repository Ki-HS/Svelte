<script>

	import { Input,TextArea } from "$lib/components";
	import { error } from "@sveltejs/kit";
    export let form;
</script>

<div class="flex flex-col w-full h-ful p-2">
    <div class="w-full">
        <form action="?/create" method="post" class="flex flex-col space-y-2 w-full items-center" enctype="multipart/form-data">
            <h3 class="text-2xl font-data">Tell me more about this project</h3>
            <p class="mt-2 text-lg">We'll need the name, tagline, link, and description</p>
            <Input id="name" label="Project name" errors={form?.errors?.name}/>
            <Input id="tagline" label="Project tagline" errors={form?.errors?.tagline}/>
            <Input id="url" label="Project URL" errors={form?.errors?.url}/>
            <TextArea id="description" label ="Project description" value={form?.data?.description} errors={form?.errors?.description}/>
            <Input id="thumbnail" label="Thumbnail" type="file" errors={form?.errors?.thumbnail}/>
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Create Project</button>
            </div>
        </form>
    </div>
</div>