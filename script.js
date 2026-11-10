
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    document.getElementById("clock").textContent = time;
}

// Perbarui jam setiap detik
updateClock();
setInterval(updateClock, 1000);

// Tombol interaktif
const button = document.getElementById("explore");

if (button) {
    button.addEventListener("click", function() {
        alert("Welcome to NEXARA 2100!");
    });
}



