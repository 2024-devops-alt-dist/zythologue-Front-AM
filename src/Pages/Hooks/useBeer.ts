    import { useState, useEffect } from "react"; 
    import { getBeers } from "../../services/beersService";
    import { Beers } from "../../interfaces/beerInterface";
    import { data } from "react-router-dom";
    

    function useBiere() {
        const [filters, setFilters] = useState({ name: "", type: "", category: "" });
        const [selectedBeer, setSelectedBeer] = useState<Beers | null>(null);
        const [beers, setBeers] = useState<Beers[]>([]);
    
        const handleFilterChange = (key: string, value: string) => {
            setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
        };
    
        useEffect(() => {
            const fetchBeers = async () => {
                try {
                    const data = await getBeers(); 
                    const filteredBeers = data.filter((beer) => {
                        return (
                            (!filters.name || beer.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                            (!filters.type || beer.type === filters.type) &&
                            (!filters.category || beer.category.toLowerCase().includes(filters.category.toLowerCase()))
                        );
                    });
                    setBeers(filteredBeers); 
                } catch (error) {
                    console.error("Error fetching beers:", error);
                }
            };
    
            fetchBeers();
        }, [filters]); 
    
        return { beers, selectedBeer, setSelectedBeer, handleFilterChange };
    }
    
    export default useBiere;
    
    // function useBiere() {
    // const [filters, setFilters] = useState({ name: "", type: "", origin: "" });
    // const [selectedBeer, setSelectedBeer] = useState(null);
    // const [beers, setBeers] = useState<Beers[]>([])
    // const handleFilterChange = (key, value) => {
    //     setFilters({ ...filters, [key]: value });
    
    //     useEffect (() =>{
    //         const fetchBeers = async () => {
    
    //         }
    //     })
    // };
    
    // const filteredBeers = beerData.filter((beer) => {
    //     return (
    //     (!filters.name || beer.name.toLowerCase().includes(filters.name.toLowerCase())) &&
    //     (!filters.type || beer.type === filters.type) &&
    //     (!filters.origin || beer.origin.toLowerCase().includes(filters.origin.toLowerCase()))
    //     );
    
    // });
    // }
    // export default useBiere 