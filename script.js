const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

async function fetchBitcoinPrice() {
    try {
        const response = await fetch(apiUrl, { mode: "cors" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // ✅ Log the response to ensure it's correct
        console.log("API Response:", data);

        // ✅ Extract price correctly
        const price = data.bitcoin.usd; 
        document.getElementById('price').innerText = `Bitcoin Price: $${price}`;

        // ✅ Choose meme based on price
        let memeUrl = "";
        
        if (price > 100000) {
            memeUrl = "https://imgflip.com/i/7u0mhq.jpg"; // 🚀 To the moon
        } else if (price > 90000) {
            memeUrl = "https://preview.redd.it/its-over-90-000-v0-d6aqivurwi0e1.jpeg?auto=webp&s=783d391530552add6edeec60c94df3d66850415a"; // Over 90k meme
        } else {
            memeUrl = "https://imgflip.com/i/4vvva1.jpg"; // Hold the line meme
        }
        
        document.getElementById('memeImage').src = memeUrl;

    } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        document.getElementById('price').innerText = "Error loading price";
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000); // Update every 60 seconds
