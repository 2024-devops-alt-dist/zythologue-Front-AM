    import React from "react";

    function RechercheBiere({ filters, onFilterChange }) {
    return (
        <div className="bg-amber-100 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold text-amber-700 mb-3">Search & Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
            type="text"
            placeholder="Search by name"
            className="p-2 border rounded"
            value={filters.name}
            onChange={(e) => onFilterChange("name", e.target.value)}
            />
            <select
            className="p-2 border rounded"
            value={filters.type}
            onChange={(e) => onFilterChange("type", e.target.value)}
            >
            <option value="">All Types</option>
            <option value="Ale">Ale</option>
            <option value="Lager">Lager</option>
            <option value="Stout">Stout</option>
            </select>
            <input
            type="text"
            placeholder="Filter by origin"
            className="p-2 border rounded"
            value={filters.origin}
            onChange={(e) => onFilterChange("origin", e.target.value)}
            />
        </div>
        </div>
    );
    }

    export default RechercheBiere;
