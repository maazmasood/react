import React from 'react'; // Import the CSS file for styling
import { useRouter } from "next/router";
import Link from "next/link";



const YourComponent = () => {

  const router = useRouter();
  // Manually entered data for three boxes
  const products = 	 [
      {
        "id": 1,
        "name": "Panasonic Etherea - Stilvoll mit herausragenden Funktionen",
        "image": ["g2.webp", "g3.webp"],
        "category": "Premium",
        "brand": "Panasonic",
        "room": "1 room",
        "wifi": "inkl. WiFi",
        "price": 2199,
        "description": "Energieeffizienz A+++ <br>  besonders energieeffizient <br> modernes design<br> Kühlen, Heizen und Entfeuchten<br> flüster Betrieb<br> nanoe™ X Filtertechnologi<br> Fortgeschrittene Inverter-Technologie"
      },
      {
        "id": 2,
        "name": "Mitsubishi Electric MSZ-HR25VF - Schlicht und Modern",
        "image": ["g4.webp", "g3.webp"],
        "category": "Exklusiv",
        "brand": "Mitsubishi",
        "room": "2 room",
        "wifi": "Optional WiFi",
        "price": 1599.99,
        "description": "Energieeffizienz A+++ <br>  besonders energieeffizient <br> modernes design<br> Kühlen, Heizen und Entfeuchten<br> flüster Betrieb<br> nanoe™ X Filtertechnologi<br> Fortgeschrittene Inverter-Technologie"

      },
      {
        "id": 3,
        "name": "LG Standard Plus - Modernes Design",
        "image": ["g3.webp", "g4.webp"],
        "category": "Normal",
        "brand": "LG",
        "room": "3 room",
        "wifi": "inkl. WiFi",
        "price": 1799,
        "description": "Energieeffizienz A+++ <br>  besonders energieeffizient <br> modernes design<br> Kühlen, Heizen und Entfeuchten<br> flüster Betrieb<br> nanoe™ X Filtertechnologi<br> Fortgeschrittene Inverter-Technologie"

      }

];
  const handleProductClick = (productId) => {
    // Handle product click logic
    console.log(`Product clicked with ID: ${productId}`);
     router.push(`/product?id=${productId}`);
  };

  return (
    <div>
    <div className="p-5 m-5 md:p-10 md:m-10">
      <div className="header-container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl creative-header-text" id="section-id">
          Unsere Sale-Artikel
        </h1>
        <br />
        <p className="text-grey-600 text-sm">Sichern Sie sich bis zum 30ten April eines unserer Winterangebote.</p>
      </div>
      <div className="md:p-10 overflow-y-auto justify-center md:m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-box bg-white rounded-lg overflow-hidden shadow-xl relative cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div
                className="category-ring"
              >
                <p className="category-text">{product.category}</p>
              </div>
              <div
                className="bg-cover bg-center h-40 p-4" // Adjusted height to make it smaller
                style={{
                  backgroundImage: `url(${
                    Array.isArray(product.image)
                      ? product.image[0]
                      : product.image
                  })`,
                }}
              ></div>
              <div className="p-4">
                <p className="text-gray-700 font-bold">{product.name}</p>
                <p className="text-1xl text-right text-gray-900">
                  <span className="text-md text-right text-theme">{`$${(product.price).toFixed(2)}`}</span>
                </p>
              </div>


              <div className="flex p-4 border-t border-gray-300 text-gray-700">
                <div className="flex-1 inline-flex items-center">
                  <p>
                    <span className="font-bold">Features: </span><br />
                   <span dangerouslySetInnerHTML={{ __html: product.description }} ></span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
</div>


<div className="flex flex-col mt-8 md:flex-row">
  {/* Left section with animated picture */}
  <div className="w-full md:w-1/2 bg-cover bg-center m-4 relative overflow-hidden">
  <img className="p-3 w-full" src="bg-section.png" alt="Climate control" />
  </div>
  {/* Right section with animated text */}
  <div className="w-full md:w-1/2 flex flex-col items-start justify-center ml-4">
    <p className="text-xl text-gray-700 font-bold mb-4 animate-fade-in">
      Mit nur wenigen Klicks erhalten Sie im Klimaplaner ein auf Ihre Bedürfnisse abgestimmtes Angebot inklusive kurzfristiger Installation durch kompetentes und zertifiziertes Fachpersonal.
    </p>
    <br />
    <div className="mb-4 animate-fade-in">

      <Link
        href="/planer"
        className="rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
    Jetzt konfigurieren
      </Link>
    </div>
  </div>
</div>

</div>
<div className="md:m-10 md:p-10">
<br />
<section>
<div className="header-container">
  <h1 className="text-4xl md:text-5xl lg:text-6xl creative-header-text">
    Klimakomfort jetzt
  </h1>
  <br />
  <p className="text-grey-600 text-sm">Entdecken Sie spezialisierte Dienstleistungen, die auf Ihr perfektes Raumklima zugeschnitten sind.</p>
</div>
<br />

          <div className="row">
          <div className="column">
          <div className="card">
          <div className="icon-wrapper">
          <span>🌐</span>
          </div>
          <h3>KlimaKomfort Lösungen</h3>
          <p>
          Ihre Spezialisten für Klimaanlagen, Wärmepumpen und Wartungsservices. Zuverlässige Lösungen für dauerhaften Komfort..
          </p>
          </div>
          </div>

          <div className="column">
          <div className="card">
          <div className="icon-wrapper">
          <span>❄️</span>
          </div>
          <h3>Kühlmeister Service</h3>
          <p>
          Hochwertige Klimaanlagen und Wärmepumpen, unterstützt durch professionelle Wartung. Vertrauen Sie auf uns für ein angenehmes Raumklima.
          </p>
          </div>
          </div>

          <div className="column">
          <div className="card">
          <div className="icon-wrapper">
          <i className="fas fa-hammer">☁️</i>
          </div>
          <h3>Experten für Klimakontrolle</h3>
          <p>
          Von der Installation bis zur Wartung - wir sind Ihre Ansprechpartner für effiziente Klimasysteme und zuverlässigen Service.
          </p>
          </div>
          </div>
          {/* Repeat the structure for other columns */}
          </div>


          <div className="row">
          <div className="column">
          <div className="card">
          <div className="icon-wrapper">
          <i className="fas fa-hammer">🔧</i>
          </div>
          <h3>ChillGuard</h3>
          <p>
          Klima- und Wärmelösungen mit Fokus auf Qualität. Regelmäßige Checks und Wartungen für dauerhafte Leistung.
          </p>
          </div>
          </div>

          <div className="column">
          <div className="card">
          <div className="icon-wrapper">
          <span>🌀</span>
          </div>
          <h3>BreezeCraft Wartung</h3>
          <p>
          Professionelle Installation und maßgeschneiderte Wartungsdienstleistungen. Damit Ihre Systeme stets effizient und zuverlässig arbeiten.
          </p>
          </div>
          </div>

          <div className="column">
          <div className="card">
          <div className="icon-wrapper">
          <i className="fas fa-hammer">💨</i>
          </div>
          <h3>AirFlow Pflege</h3>
          <p>
          Wir kümmern uns um Ihre Klimaanlagen und Wärmepumpen. Mit unseren Pflegelösungen garantieren wir einen reibungslosen Betrieb und optimalen Komfort.
          </p>
          </div>
          </div>

          </div>
          </section>
          <br />
          <br />


          <div className="header-container">
            <h1 className="text-4xl md:text-5xl lg:text-6xl creative-header-text">
            Kundener fahrungen
            </h1>
            <br />
            <p className="text-grey-600 text-sm">Entdecken Sie die Erfahrungen unserer zufriedenen Kunden.</p>
          </div>
          <br />

          </div>



<div className="comments">
  <figure class="snip1157">
    <blockquote>Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
      <div class="arrow"></div>
    </blockquote>
    <img src="man.jpg"  alt="man_sample3" />
    <div class="author">
      <h5> Alex Turner <span> Project Coordinator </span></h5>
    </div>
  </figure>
  <figure class="snip1157 hover">
    <blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.
      <div class="arrow"></div>
    </blockquote>
    <img src="man2.jpg"alt="man_sample27" />
    <div class="author">
      <h5>Chris Anderson<span> Marketing Specialist</span></h5>
    </div>
  </figure>
  <figure class="snip1157">
    <blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.
      <div class="arrow"></div>
    </blockquote>
    <img src="man3.jpg" alt="man_sample17" />
    <div class="author">
      <h5>Sarah Mitchell<span> Software Engineer</span></h5>
    </div>
  </figure>




</div>



<div class="sbody">
<div class="box">
	<h2>Subscribe to our Newsletter</h2>
	<p>Our weekly newsletter provides you with the latest and most important happenings in the industry.</p>
	<div class="form-control">
		<input type="text" class="input" placeholder="Enter e-mail adress" />
		<button class="btn">Subscribe</button>
	</div>
</div>

</div>

</div>

  );
};

export default YourComponent;
