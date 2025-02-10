const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

async function fetchBitcoinPrice() {
    try {
        const response = await fetch(apiUrl, { mode: "cors" }); // Allow CORS
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // ✅ Log the API response to see its actual structure
        console.log("API Response:", data);

        // ✅ Check if the response contains the expected structure
        if (!data.bitcoin || !data.bitcoin.usd) {
            throw new Error("Invalid API response structure");
        }

        const price = data.bitcoin.usd;
        document.getElementById('price').innerText = `Bitcoin Price: $${price}`;
    } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        document.getElementById('price').innerText = "Error loading price";
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000);
