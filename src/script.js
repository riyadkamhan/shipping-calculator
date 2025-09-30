document.getElementById("shipping-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const distance = parseFloat(document.getElementById("distance").value);
    const speed = document.getElementById("speed").value;
    let ratePerKm = 0.5;
    let speedMultiplier = speed === "express" ? 1.5 : 1;
    const cost = weight * distance * ratePerKm * speedMultiplier;
    document.getElementById("result").innerText = `Estimated Shipping Cost: $${cost.toFixed(2)}`;
});
