<script lang="ts">
    const github = '/images/github2.svg';
    const linkedin = '/images/linkedIn.svg';
    const email = '/images/email.svg';
</script>

<footer class="pt-10 px-6 bg-azure">
    <hr class=" border-gray-200 h-px my-6 sm:mx-auto"/>
    <div class="py-6 pt-0 md:flex md:items-center md:justify-between">
        <span class="text-md text-gray-500 dark:text-gray-300 sm:text-center"></span>
        <!-- Again, cringe -->
        <div class="flex mt-4 space-x-0 sm:justify-center md:mt-0">
                <a href="https://github.com/cyhdu" class="flex justify-center w-12 h-12">
                    <img src={github} alt="GitHub" class="w-8 hover:w-10 hover:transition-all transition-all fill-red-400"/>
                </a>
                <a href="https://linkedin.com/in/charlie-du-11457021b" class="flex justify-center w-12 h-12">
                    <img src={linkedin} alt="LinkedIn" class="w-8 hover:w-10 hover:transition-all transition-all"/>
                </a>
                <a href="mailto:charlie7@illinois.edu" class="flex justify-center w-12 h-12">
                    <img src={email} alt="Email" class="w-8 hover:w-10 hover:transition-all transition-all"/>
                </a>
        </div>
    </div>

</footer>
