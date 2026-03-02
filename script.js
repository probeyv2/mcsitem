function copyIP() {
    const ip = "play.sunucuadi.com";
    navigator.clipboard.writeText(ip);
    alert("Sunucu adresi kopyalandı: " + ip);
}
