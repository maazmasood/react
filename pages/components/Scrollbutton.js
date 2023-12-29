import { useEffect } from 'react';

function ScrollButton() {
    useEffect(() => {
        const button = document.querySelector('a[href="#sectionangebote"]');

        button.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('#section2').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }, []);

    return (
        <a href="#sectionangebote" title="Angebote" className="whitespace-nowrap font-semibold text-blue-600">
            <span className="absolute inset-0" aria-hidden="true"></span>
            Mehr Erfahren <span aria-hidden="true">&rarr;</span>
        </a>
    );
}

export default ScrollButton;
