document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            title: 'Transformamos <span class="text-pink-400">marcas</span> en<br>experiencias con propósito',
            description: 'Convierte tu identidad en un activo diferenciador con estrategias creativas e innovadoras que potencian la conexión,<br class="hidden md:block"> fidelización y crecimiento de tu marca.'
        },
        {
            title: '¿Cómo <span class="text-pink-400">conectamos</span>?',
            description: 'Creando experiencias, innovando y generando valor'
        },
        {
            title: 'Consultoría <span class="text-pink-400">Brand360</span>',
            description: 'Cuéntanos de tus desafíos, comencemos con la transformación y colaboración con auditoría de marca sin costo.'
        }
    ];

    const indicators = document.querySelectorAll('.slider-indicator');
    const titleElement = document.querySelector('.hero-title');
    const descriptionElement = document.querySelector('.hero-description');
    let currentSlide = 0;

    function updateSlide(index) {
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.remove('bg-white', 'bg-opacity-60');
                indicator.classList.add('bg-pink-400');
            } else {
                indicator.classList.remove('bg-pink-400');
                indicator.classList.add('bg-white', 'bg-opacity-60');
            }
        });

        titleElement.innerHTML = slides[index].title;
        descriptionElement.innerHTML = slides[index].description;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateSlide(currentSlide);
        });
    });


    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    }, 5000);

    updateSlide(0);
});