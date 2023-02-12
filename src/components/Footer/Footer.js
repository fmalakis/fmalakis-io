const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer class="p-4 bg-white shadow flex items-center justify-center md:p-6 bg-gray-900">
                <span class="text-sm text-gray-500 text-center dark:text-gray-400">
                    © {currentYear}{" "}
                    <a href="#start" class="hover:underline">
                        fmalakis
                    </a>
                    . All Rights Reserved. Made with ❤️, using <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="hover:underline underline md:lg:no-underline">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="hover:underline underline md:lg:no-underline">Tailwind</a>.
                </span>
            </footer>
        </>
    );
};

export default Footer;
