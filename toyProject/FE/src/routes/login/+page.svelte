<script>
    import {Input} from "$lib/components"
    export let form;
</script>
<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Sign In
    </h2>
    <p class="text-center mt-1">
        or <a href="/register" class = ' text-primary font-medium hover:cursor-pointer hover:underline'>Sign Up</a>
    </p>

    <form action="?/login" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input type="email" id="email" label="Email" value={form?.data?.email?? ''} errors={form?.errors?.email}/>
        <Input type="password" id="password" label="Password" errors={form?.errors?.password}/>
        <div class="w-full max-w md pt-2">
            <button class="btn btn-primary w-full">Sign In</button>
        </div>
        <div class="w-full max-w-md"><a href="/reset-password" class="font-medium text-primary hover:cursor-pointer">Forgot Password?</a></div>
        {#if form?.notVerified}
            <div class="alert alert-error shadow-lg w-full max-w-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>You must verify your email before Sign In</span>
            </div>
        {/if}
    </form>
</div>