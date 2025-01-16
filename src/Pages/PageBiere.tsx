    // import { useState } from "react";
    // import { getBeers } from "../services/beersService";
    // import { Beers } from "../interfaces/beerInterface";
    import ListeBiere from "../components/ListeBiere"
    import RechercheBiere from "../components/RechercheBiere"
    import DetailBiere from "../components/DetailBiere"
    import useBiere from "./Hooks/useBeer";



    
    const App = () => {
        const { beers, selectedBeer, setSelectedBeer, handleFilterChange } = useBiere();
        const data = [
            {
                name: "Watou", "type": "triple"
            
            },
            {
                name: "kouy", "type": "triple"
            
            },
            {
                name: "blonde", "type": "triple"
            
            }
        ];
        return (
            <div className="min-h-screen bg-amber-50 p-6">
                {selectedBeer ? (
                    <DetailBiere beer={selectedBeer} onBack={() => setSelectedBeer(null)} />
                ) : (
                    <>
                        <RechercheBiere filters={data} onFilterChange={handleFilterChange} />
                        <ListeBiere beers={beers} onSelectBeer={(beer) => setSelectedBeer(beer)} />
                    </>
                )}
            </div>
        );
    };
    
    export default App;










    // function App() {
    // const [filters, setFilters] = useState({ name: "", type: "", origin: "" });
    // const [selectedBeer, setSelectedBeer] = useState(null);
    // const [beers, setBeers] = useState<Beers[]>([])

    // const handleFilterChange = (key, value) => {
    //     setFilters({ ...filters, [key]: value });
    // };

    // const filteredBeers = beerData.filter((beer) => {
    //     return (
    //     (!filters.name || beer.name.toLowerCase().includes(filters.name.toLowerCase())) &&
    //     (!filters.type || beer.type === filters.type) &&
    //     (!filters.origin || beer.origin.toLowerCase().includes(filters.origin.toLowerCase()))
    //     );
    // });