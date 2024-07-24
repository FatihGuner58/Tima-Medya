document.addEventListener("DOMContentLoaded", function() {
    const anasayfaLink = document.getElementById("anasayfa-link");
    const kurumsalLink = document.getElementById("kurumsal-link");
    const hizmetlerLink = document.getElementById("hizmetler-link");
    const iletisimLink = document.getElementById("iletisim-link");

    const anasayfaContent = document.getElementById("anasayfa-content");
    const kurumsalContent = document.getElementById("kurumsal-content");
    const hizmetlerContent = document.getElementById("hizmetler-content");
    const iletisimContent = document.getElementById("iletisim-content");

    // Başlangıçta sadece anasayfa içeriği gösterilsin
    anasayfaContent.style.display = "block";

    // Anasayfa linkine tıklama işlemi
    anasayfaLink.addEventListener("click", function(event) {
        event.preventDefault();
        anasayfaContent.style.display = "block";
        kurumsalContent.style.display = "none";
        hizmetlerContent.style.display = "none";
        iletisimContent.style.display = "none";
    });

    // Kurumsal linkine tıklama işlemi
    kurumsalLink.addEventListener("click", function(event) {
        event.preventDefault();
        anasayfaContent.style.display = "none";
        kurumsalContent.style.display = "block";
        hizmetlerContent.style.display = "none";
        iletisimContent.style.display = "none";
    });

    // Hizmetler linkine tıklama işlemi
    hizmetlerLink.addEventListener("click", function(event) {
        event.preventDefault();
        anasayfaContent.style.display = "none";
        kurumsalContent.style.display = "none";
        hizmetlerContent.style.display = "block";
        iletisimContent.style.display = "none";
    });

    // İletişim linkine tıklama işlemi
    iletisimLink.addEventListener("click", function(event) {
        event.preventDefault();
        anasayfaContent.style.display = "none";
        kurumsalContent.style.display = "none";
        hizmetlerContent.style.display = "none";
        iletisimContent.style.display = "block";
    });
});