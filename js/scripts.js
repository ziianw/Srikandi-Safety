/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll("#accordion .btn");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Mencegah aksi default
            const targetId = this.getAttribute("data-target");
            const targetElement = document.querySelector(targetId);

            // Sembunyikan semua elemen kecuali yang diklik
            accordionButtons.forEach(btn => {
                const panelId = btn.getAttribute("data-target");
                const panel = document.querySelector(panelId);

                if (panelId !== targetId) {
                    panel.classList.remove("show");
                }
            });

            // Tampilkan atau sembunyikan elemen yang diklik
            targetElement.classList.toggle("show");
        });
    });
});
