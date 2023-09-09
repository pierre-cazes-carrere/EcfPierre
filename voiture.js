


const vehiculeImages = document.querySelectorAll('.vehicule-img');


const maxWidth = 300; 


vehiculeImages.forEach(image => {
    image.onload = () => {
        if (image.width > maxWidth) {
            const ratio = maxWidth / image.width;
            image.style.width = `${maxWidth}px`;
            image.style.height = `${image.height * ratio}px`;
        }
    };
});


