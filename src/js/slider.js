document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            title: 'Transformamos <span class="text-[#e94b85]">marcas</span> en<br>experiencias con propósito',
            description: 'Convierte tu identidad en un activo diferenciador con estrategias creativas e innovadoras que potencian la conexión,<br class="hidden md:block"> fidelización y crecimiento de tu marca.',
            image: 'src/img/home/carrousel/1.png'
        },
        {
            title: '¿Cómo <span class="text-[#e94b85]">conectamos</span>?',
            description: 'Creando experiencias, innovando y generando valor',
            image: 'src/img/home/carrousel/2.png'
        },
        {
            title: 'Consultoría <span class="text-[#e94b85]">Brand360</span>',
            description: 'Cuéntanos de tus desafíos, comencemos con la transformación y colaboración con auditoría de marca sin costo.',
            image: 'src/img/home/carrousel/3.png'
        }
    ];

    const titleEl = document.getElementById('slider-title');
    const descEl = document.getElementById('slider-description');
    const bgImgEl = document.getElementById('slider-background');
    const indicators = document.querySelectorAll('.slider-indicator');

    let current = 0;
    let transitioning = false;

    function showSlide(index, animate = true) {
        if (transitioning || index === current) return;

        transitioning = true;
        if (animate) {
            titleEl.classList.add('opacity-0');
            descEl.classList.add('opacity-0');
        }

        setTimeout(() => {
            const slide = slides[index];
            titleEl.innerHTML = slide.title;
            descEl.innerHTML = slide.description;
            bgImgEl.src = slide.image;

            indicators.forEach((el, i) => {
                el.classList.toggle('bg-[#e94b85]', i === index);
                el.classList.toggle('bg-white', i !== index);
                el.classList.toggle('bg-opacity-60', i !== index);
            });

            if (animate) {
                titleEl.classList.remove('opacity-0');
                descEl.classList.remove('opacity-0');
            }

            current = index;
            transitioning = false;
        }, animate ? 600 : 0);
    }

    indicators.forEach(indicator =>
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.dataset.index, 10);
            showSlide(index);
        })
    );

    showSlide(0, false);

    setInterval(() => {
        if (!transitioning) {
            const nextIndex = (current + 1) % slides.length;
            showSlide(nextIndex);
        }
    }, 7000);
});