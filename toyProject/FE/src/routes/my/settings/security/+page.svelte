<script>
    import {Modal} from "$lib/components"

    export let form

    let emailModalOpen
    $: emailModalOpen = false

</script>


<div class="flex flex-col w-full h-full space-y-12">
    <div class="w-full">
        <h3 class="text-2xl font-medium">Change Email</h3>
        <div class="divider"></div>
        <Modal label="change-email" checked={emailModalOpen}>
            <span slot="trigger" class ="btn btn-primary">Change Email</span>
            <h3 slot="heading">Change Your EMail</h3>
            <form action="?/updateEmail" method="POST" class="space-y-2">
                <input type="email" id="email" required={true} value={form?.data?.email}/>
            </form>
            <button type ="submit" class ="btn btn-primary w-full">Change My email</button>
        </Modal>
    </div>
</div>