import Button from '../components/Button'
import binouze from '../assets/binouze.jpg'
import brasserie from '../assets/brasserie.jpg'


const HomePage = () => {
        return (
            <div className="min-h-screen flex flex-col">
            {/* Section 1 : Image de fond + Titre + Bouton */}
            <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center" 
                style={{ backgroundImage: `url(${binouze})` }} // Remplacez 'biere.jpg' par le chemin de votre image
            >
                <h1 className="text-4xl font-bold text-white mb-8 shadow-lg text-center">
                    Découvrez notre liste de bières
                </h1>
                <Button text="Cliquez ici" to="/PageBiere" />
            </div>

            {/* Section 2 : Image de fond + Titre + Bouton */}
            <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center" 
                style={{ backgroundImage: `url(${brasserie})`}} // Remplacez 'brasserie.jpg' par le chemin de votre image
            >
                <h1 className="text-4xl font-bold text-white mb-8 shadow-lg text-center">
                    Explorez nos brasseries
                </h1>
                <Button text="Cliquez ici" to="/PageBrasserie" />
            </div>
        </div>
    );
};

export default HomePage;