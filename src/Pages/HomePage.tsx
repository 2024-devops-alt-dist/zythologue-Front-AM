import Button from '../components/Button';


const HomePage = () => {
        return (
        <div
            className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6"
            style={{
            backgroundImage: "url('votre-image.jpg')", // Remplacez 'votre-image.jpg' par le chemin de votre image de fond
            backgroundSize: 'cover', // Couvre tout l'espace
            backgroundPosition: 'center', // Centrer l'image
            }}
        >
            {/* Titre centré au niveau du bouton gauche */}
            <div className="w-full max-w-4xl flex justify-start mb-8">
            <h1 className="text-3xl font-bold text-amber-600 mx-12">
                Découvrez notre liste de bières
            </h1>
            </div>
    
            <div className="flex w-full max-w-4xl">
            {/* Bouton à gauche centré sur la moitié gauche */}
            <div className="w-1/2 flex justify-center mr-4">
                <Button text="Cliquez ici" to="/PageBiere" />
            </div>
    
            {/* Ajout d'un h2 au-dessus du second bouton */}
            <div className="w-1/2 flex flex-col items-center justify-center ml-4">
                <h2 className="text-2xl font-semibold text-amber-600 mb-4">
                Explorez nos autres pages
                </h2>
                <Button text="Cliquez ici" to="/PageBrasserie" />
            </div>
            </div>
        </div>
        );
    };
    
    export default HomePage;