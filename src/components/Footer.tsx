    const Footer = () => {
        return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
            {/* Section principale */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Logo et description */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-2xl font-bold">Watou</h1>
                <p className="text-gray-400 text-sm mt-2">
                    La bière comme vous l'aimez
                </p>
                </div>
    
                {/* Liens de navigation */}
                <div className="flex space-x-4 mb-6 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-white transition">
                    Accueil
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                    Services
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                    Contact
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                    À propos
                </a>
                </div>
    
                {/* Icônes sociales */}
                <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M18 2h-3c-1.657 0-3 1.343-3 3v3H9v4h3v8h4v-8h3l1-4h-4V5c0-.553.447-1 1-1h3V2z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M22.23 5.924c-.77.35-1.6.585-2.47.692a4.301 4.301 0 001.88-2.37 8.596 8.596 0 01-2.73 1.047 4.28 4.28 0 00-7.29 3.901A12.14 12.14 0 013.11 4.604a4.27 4.27 0 001.32 5.7 4.21 4.21 0 01-1.94-.535v.054a4.28 4.28 0 003.44 4.2 4.25 4.25 0 01-1.93.073 4.28 4.28 0 004 2.97 8.591 8.591 0 01-5.32 1.83c-.35 0-.69-.02-1.03-.06a12.12 12.12 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.17 0-.18 0-.35-.01-.53a8.71 8.71 0 002.15-2.22z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M12 2a10 10 0 00-3.16 19.47c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.52.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.83-2.35 4.68-4.58 4.92.36.31.67.93.67 1.88v2.8c0 .26.18.58.69.48A10.01 10.01 0 0012 2z" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </footer>
        );
    };
    
    export default Footer;
    