const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

async function fetchBitcoinPrice() {
    try {
        const response = await fetch(apiUrl, { mode: "cors" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);

        const price = data.bitcoin.usd; 
        document.getElementById('price').innerText = `Bitcoin Price: $${price}`;

        // Hide all images first
        document.getElementById('meme1').style.display = "none";
        document.getElementById('meme2').style.display = "none";
        document.getElementById('meme3').style.display = "none";

        // Show the correct meme based on price
        if (price > 100000) {
            document.getElementById('meme1').style.display = "block"; // 🚀 To the Moon
        } else if (price > 90000) {
            document.getElementById('meme2').style.display = "block"; // Over 90K meme
        } else {
            document.getElementById('meme3').style.display = "block"; // Hold the Line meme
        }
    } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        document.getElementById('price').innerText = "Error loading price";
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000);
