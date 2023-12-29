import { DevicePhoneMobileIcon, BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";

const apiUrl = 'https://api.unsplash.com';

export default function Kontakt() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        getRandomImages();
    }, []);

    async function getRandomImages() {
        try {
            const response = await axios.get(`${apiUrl}/photos/random?count=10&client_id=YOUR_UNSPLASH_ACCESS_KEY`);
            setRandomImages(response.data);
        } catch (error) {
            console.error('Fehler beim Abrufen der Bilder:', error);
        }
    }

    // Restlicher Code der Komponente
    // ...
    // Anzeige der Unsplash-Bilder
    return (
        <>
            {/* Restlicher Code der Komponente */}
            {/* Anzeige der Unsplash-Bilder */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                {randomImages.map((image) => (
                    <div key={image.id}>
                        <Image
                            src={image.urls.regular}
                            alt={image.description}
                            width={600}
                            height={400}
                        />
                    </div>
                ))}
            </div>
            {/* Restlicher Code der Komponente */}
            {/* ... */}
        </>
    )
}
