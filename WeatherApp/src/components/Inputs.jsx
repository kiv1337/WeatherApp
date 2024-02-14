import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./Api";
function Inputs({ onSearchChange }) {
	const [search, setSearch] = useState(null);

	const handleOnchange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

// Inputs.js
const loadOptions = (inputValue) => {
    return fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&lang=ru`,
        geoApiOptions
    )
    .then((response) => response.json())
    .then((response) => {
        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
    })
    .catch((err) => console.error(err));
};

	return (
		<div className=' flex flex-row'>
			<div className=' flex flex-row items-center w-full justify-center  px-2'>
				<div className=' flex flex-row space-x-4 items-center'>
					<AsyncPaginate
						debounceTimeout={600}
						onChange={handleOnchange}
						loadOptions={loadOptions}
						value={search}
						type='text'
						placeholder='Search for city...'
						className=' focus:outline-none  font-light capitalize placeholder:lowercase placeholder:text-[#000000] text-black w-[250px] z-40'
					/>
				</div>

				<div className=' flex'>
				</div>
			</div>
		</div>
	);
}

export default Inputs;
