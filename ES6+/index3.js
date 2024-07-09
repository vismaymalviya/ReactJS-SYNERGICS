function addressmaker (address) {
    const {city, state} = address;

    const newAdd = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAdd.city}, ${newAdd.state}, ${newAdd.country}`)
}

addressmaker({city: 'Austin', state: 'Texas'});