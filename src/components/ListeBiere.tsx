    import React from "react";

    function ListeBiere({ beers, onSelectBeer }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {beers.map((beer) => (
            <div
            key={beer.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
            onClick={() => onSelectBeer(beer)}
            >
            <h2 className="text-xl font-bold text-amber-700">{beer.name}</h2>
            <p className="text-gray-600">{beer.type}</p>
            <p className="text-gray-500 text-sm">Origin: {beer.origin}</p>
            </div>
        ))}
        </div>
    );
    }

    export default ListeBiere;
