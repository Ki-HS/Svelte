<script>

	import { Input } from "$lib/components";

</script>


<div class="flex flex-col w-full h-full">
    <div class="w-full">
        <form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full">
            <h3 class="text-2xl fone-medium">Change Password</h3>
            <div class="divider"></div>
            <Input id="oldPassword" label ="Old Password" type="password" required/>
            <Input id="password" label = "New Password" type="password" required/>
            <Input id = "passwordConfirm" label = "Confirm New Password" type = "password" required/>
            <a href="/reset-password" class= "text-primary hover:cursor-point hover:underline">Forgot password?</a>
            <div class="w-full max-w-lg pt-3">
                <button class="btn btn-primary w-full max-w-lg" type="submit">
                    Update Password
                </button>
            </div>
        </form>
    </div>
</div>