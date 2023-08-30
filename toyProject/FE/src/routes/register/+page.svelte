<script>

	import { Input } from "$lib/components";

    export let form;
</script>
<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Register for an account
    </h2>
    <p class="text-center mt-1">
        or <a href="/login" class = ' text-primary font-medium hover:cursor-pointer hover:underline'>Sign in</a>
    </p>

    <form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input type = "text" id = "name" label= "Name" value={form?.data?.name} errors={form?.errors?.name}/>
        <Input type = "email" id="email" label= "Email" value={form?.data?.email} errors={form?.errors?.email}/>
        <Input type = "password" id="password" label= "Password" value={form?.data?.password} errors={form?.errors?.password}/>
        <Input type = "password" id="passwordConfirm" label= "Confirm Password" value={form?.data?.passwordConfirm} errors={form?.errors?.passwordConfirm}/>
        <div class="w-full max-w md pt-2">
            <button class="btn btn-primary w-full">Register</button>
        </div>
    </form>
</div>