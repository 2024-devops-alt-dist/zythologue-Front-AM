    import { useState } from "react";
    import ListeBiere from "../components/ListeBiere"
    import RechercheBiere from "../components/RechercheBiere"
    import DetailBiere from "../components/DetailBiere"

    const beerData = [
    { id: 1, name: "Golden Ale", type: "Ale", origin: "Belgium", description: "A smooth and rich ale with golden hues." },
    { id: 2, name: "Dark Stout", type: "Stout", origin: "Ireland", description: "A bold stout with notes of coffee and chocolate." },
    { id: 3, name: "Crisp Lager", type: "Lager", origin: "Germany", description: "A light and refreshing lager perfect for any occasion." },
    ];

    function App() {
    const [filters, setFilters] = useState({ name: "", type: "", origin: "" });
    const [selectedBeer, setSelectedBeer] = useState(null);

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const filteredBeers = beerData.filter((beer) => {
        return (
        (!filters.name || beer.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.type || beer.type === filters.type) &&
        (!filters.origin || beer.origin.toLowerCase().includes(filters.origin.toLowerCase()))
        );
    });

    return (
        <div className="min-h-screen bg-amber-50 p-6">
        {selectedBeer ? (
            <DetailBiere beer={selectedBeer} onBack={() => setSelectedBeer(null)} />
        ) : (
            <>
            <RechercheBiere filters={filters} onFilterChange={handleFilterChange} />
            <ListeBiere beers={filteredBeers} onSelectBeer={(beer) => setSelectedBeer(beer)} />
            </>
        )}
        </div>
    );
    }

export default App;
