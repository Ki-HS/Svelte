<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <slot/>
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a href="/settings">Main Settings</a></li>
            <li><a href="/settings/profile">Profile</a></li>
            <li><a href="/settings/appearance">Appearance Settings</a></li>
      </ul>
    
    </div>
  </div>


