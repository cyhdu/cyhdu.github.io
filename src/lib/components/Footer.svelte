<script lang="ts">
    import github from '$lib/images/github2.svg';
    import linkedin from '$lib/images/linkedIn.svg';
    import email from '$lib/images/email.svg';
    import '/src/styles/app.css'
</script>

<footer class="pt-10 px-6">
    <hr class=" border-gray-200 h-px my-6 sm:mx-auto"/>
    <div class="py-6 pt-0 md:flex md:items-center md:justify-between">
        <span class="text-md text-gray-500 dark:text-gray-300 sm:text-center">© 2023 Charlie Du LLC. All rights reserved.</span>
        <!-- Again, cringe -->
        <div class="flex mt-4 space-x-0 sm:justify-center md:mt-0">
                <a href="https://github.com/cyhdu" class="flex justify-center w-12 h-12">
                    <img src={github} alt="GitHub" class="w-8 hover:w-10 hover:transition-all transition-all fill-red-400"/>
                </a>
                <a href="https://github.com/cyhdu" class="flex justify-center w-12 h-12">
                    <img src={linkedin} alt="LinkedIn" class="w-8 hover:w-10 hover:transition-all transition-all"/>
                </a>
                <a href="https://github.com/cyhdu" class="flex justify-center w-12 h-12">
                    <img src={email} alt="Email" class="w-8 hover:w-10 hover:transition-all transition-all"/>
                </a>
        </div>
    </div>

</footer>

<style>

    footer {
        background: rgb(240,255,255);
        /* background: linear-gradient(180deg, rgba(240,255,255,1) 10%, rgba(94,190,237,1) 56%, rgba(9,152,221,1) 100%); */
    }

</style>