
    // Menambahkan fitur geser pada carousel
    const carousel = document.querySelector('#faktaCarousel');
    let startX = 0, endX = 0;

    // Menangkap awal gesekan
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    // Menangkap akhir gesekan
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    // Menangkap awal gesekan dengan mouse
    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
    });

    // Menangkap akhir gesekan dengan mouse
    carousel.addEventListener('mouseup', (e) => {
        endX = e.clientX;
        handleSwipe();
    });

    // Fungsi untuk menangani gesekan
    function handleSwipe() {
        if (startX - endX > 50) {
            // Geser ke slide berikutnya
            const nextButton = carousel.querySelector('.carousel-control-next');
            nextButton.click();
        } else if (endX - startX > 50) {
            // Geser ke slide sebelumnya
            const prevButton = carousel.querySelector('.carousel-control-prev');
            prevButton.click();
        }
    }
 
        // Validasi Form Quiz
        (function () {
            'use strict'
            const forms = document.querySelectorAll('.needs-validation')
            Array.from(forms).forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })()
        })()
   