const Footer = () => {
    return(
        <footer className="flex flex-col items-center justify-center bg-principal text-white font-semibold">

            <picture id ="logoTipo" className="flex items-center justify-between w-20 drop-shadow">
                   <img src="/img/logo.png" alt="logo do site" />
                </picture>
            <p>© 2024 Kade do grau. All rights reserved.</p>
            <nav>
                <a href="/privacy-policy">Privacy Policy</a> | 
                <a href="/terms-of-service">Terms of Service</a>
            </nav>
        </footer>
    );
}

export default Footer;
