async function fetchBitcoinPrice() {
    try {
        // Use a CORS proxy to bypass restrictions
        const apiUrl = "https://corsproxy.io/?https://api.coindesk.com/v1/bpi/currentprice.json";
        console.log("Fetching Bitcoin price from:", apiUrl);

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
            memeUrl = "https://i.imgur.com/abcdef.jpg"; // Replace with a valid direct image URL
        } else if (priceValue > 90000) {
            memeUrl = "https://i.imgur.com/xyz123.jpg"; // Replace with a valid direct image URL
        } else {
            memeUrl = "https://i.imgur.com/lmnopq.jpg"; // Replace with a valid direct image URL
        }
        
        document.getElementById('memeImage').src = memeUrl;
        console.log("Meme Image URL:", memeUrl);
        
    } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        document.getElementById('price').innerText = "Error loading price";
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000);
