

async function fetchBitcoinPrice() {
    try {
        const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);

        if (!data.bpi || !data.bpi.USD || !data.bpi.USD.rate) {
            throw new Error("Invalid API response structure");
        }

        const price = data.bpi.USD.rate;
        document.getElementById('price').innerText = `Bitcoin Price: $${price}`;

        let memeUrl = "";
        const priceValue = parseFloat(price.replace(/,/g, ''));
        
        if (priceValue > 100000) {
            memeUrl = "https://imgflip.com/i/7u0mhq.jpg"; //to moon
        } else if (priceValue > 90000) {
            memeUrl = "https://preview.redd.it/its-over-90-000-v0-d6aqivurwi0e1.jpeg?auto=webp&s=783d391530552add6edeec60c94df3d66850415a"; // btc taking a wrong turn
        } else {
            memeUrl = "https://imgflip.com/i/4vvva1.jpg"; //hold the line
        }
        
        document.getElementById('memeImage').src = memeUrl;
    } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        document.getElementById('price').innerText = "Error loading price";
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000); // Update every 60 seconds
