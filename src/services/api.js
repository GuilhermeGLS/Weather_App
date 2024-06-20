const KEY = '2b5f4aead58d447880e205010241906'

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data
}

export default fetchData;