async function fetchTokenData() {
    try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/cjgczqry5hs9nk2xgwe825eocgzz5vbe3zykq2v46xa');
        const data = await response.json();
        const pair = data.pairs[0];

        // Extract and display the data
        document.getElementById('price').textContent = `Price: $${pair.priceUsd}`;
        document.getElementById('liquidity').textContent = `Liquidity: $${pair.liquidity.usd}`;
        document.getElementById('volume').textContent = `24h Volume: $${pair.volume.any}`;
        document.getElementById('transactions').textContent = `Transactions: ${pair.txns}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function on page load
window.onload = fetchTokenData;
