/* 
    SMK CAR MASTER DATA ENGINE 
    Primary Hypercar & Marque Registry
*/

const defaultBrands = [
    { id: 'lamborghini', name: 'Lamborghini', found: 1963, country: 'Italy', desc: 'The definition of wedge-shaped adrenaline and pure V12 aggression.', image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1500' },
    { id: 'bugatti', name: 'Bugatti', found: 1909, country: 'France', desc: 'The pinnacle of automotive engineering and absolute top speed.', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1500' },
    { id: 'mclaren', name: 'McLaren', found: 1963, country: 'UK', desc: 'Surgical precision. Formula One DNA unleashed on the streets.', image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1500' },
    { id: 'aston-martin', name: 'Aston Martin', found: 1913, country: 'UK', desc: 'Elegance meets power. The choice of icons.', image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=1500' },
    { id: 'koenigsegg', name: 'Koenigsegg', found: 1994, country: 'Sweden', desc: 'The ghost squadron. Defying physics with every Jesko and Regera.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1500' },
    { id: 'pagani', name: 'Pagani', found: 1992, country: 'Italy', desc: 'Art on wheels. Horacio Pagani\'s vision of aerodynamic beauty.', image: 'https://images.unsplash.com/photo-1614200171228-564539665bc8?auto=format&fit=crop&q=80&w=1500' },
    { id: 'maserati', name: 'Maserati', found: 1914, country: 'Italy', desc: 'Luxury in every roar. The trident of performance.', image: 'https://images.unsplash.com/photo-1510443905545-0dcf85b2e3ac?auto=format&fit=crop&q=80&w=1500' }
];

const defaultCars = [
    // LAMBORGHINI RANGE
    { 
        id: 'revuelto', name: 'Revuelto', brand: 'lamborghini', category: 'Range', 
        price: '$608,358', image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1500&auto=format&fit=crop', modelUrl: 'lamborghini_aventador.glb',
        specifications: { engine: '6.5L V12 Hybrid', horsepower: '1015 CV', acceleration: '2.5 s', topSpeed: '350 km/h' },
        videos: { hero: 'revuelto-intro-bg.mp4', engine: 'revuelto-intro-bg.mp4', chassis: 'revuelto-intro-bg.mp4' }
    },

    // BUGATTI RANGE
    { 
        id: 'bolide', name: 'Bolide Concept', brand: 'bugatti', category: 'Track-Only', 
        price: '$4.7 million', image: 'assets/bugatti_bolide.png', 
        modelUrl: 'bugatti_bolide.glb',
        specifications: { engine: '8.0L W16 Quad-Turbo', horsepower: '1850 PS', acceleration: '2.17 s', topSpeed: '500 km/h' },
        marketing: {
            introDesc: 'The Bugatti Bolide represents the ultimate expression of raw performance and aerodynamic excellence. Engineered as a track-only hypercar, it pushes the limits of what is possible with internal combustion technology.',
            galleryVid: 'bugatti-chassis-video.mp4'
        },
        videos: { hero: 'bugatti-main-bg.mp4', engine: 'bugatti-main-bg.mp4' },
        images: { gallery: ['bugatti-divo-poster.jpg', 'bugatti-stats-bg.jpg'] }
    },

    // MCLAREN RANGE
    { 
        id: 'mclaren-p1', name: 'McLaren P1', brand: 'mclaren', category: 'Hypercars', 
        price: '$1.15 million', image: 'assets/mclaren_p1.png', 
        modelUrl: 'mclaren_p1__www.vecarz.com (1).glb',
        specifications: { engine: '3.8L V8 TWIN-TURBO HYBRID', horsepower: '903 PS', acceleration: '2.8 s', topSpeed: '350 km/h (electronically limited)' },
        marketing: {
            powertrainLabel: 'POWERTRAIN <br> <span style="opacity: 0.6; font-size: 0.8em; text-transform: none;">3.8L V8 + HYBRID PERFORMANCE</span>',
            powertrainTitle: 'ENGINEERED ON PAPER, <br> PROVEN ON THE ROAD',
            powertrainEngine: '3.8L V8 TWIN-TURBO HYBRID',
            powertrainHP: '903 PS MAXIMUM POWER OUTPUT',
            powertrainCTA: 'DISCOVER ENGINEERING',
            powertrainVid: 'mclaren-powertrain.mp4',
            powertrainDetail: 'The development of the McLaren P1 powertrain draws directly from decades of Formula 1 expertise, integrating advanced hybrid technology to deliver both extreme performance and efficiency. At its core lies a twin-turbocharged V8 engine combined with an electric motor system, engineered to provide instantaneous throttle response and seamless power delivery.\n\nThe internal combustion engine is paired with an electric motor mounted within the transmission, functioning as both a power booster and an energy recovery system. This system captures kinetic energy during braking and deceleration, storing it in a high-performance battery for immediate redeployment under acceleration — a concept directly inspired by motorsport energy recovery systems.\n\nThe electric motor contributes significant torque at low speeds, effectively eliminating turbo lag and ensuring continuous power across the rev range. This integration enhances drivability while maintaining the raw character of a high-performance combustion engine.\n\nA lightweight lithium-ion battery system, developed for high power density rather than long-range efficiency, is positioned low within the chassis to optimize weight distribution and lower the center of gravity. This placement improves handling precision and overall vehicle dynamics, ensuring maximum stability at high speeds.\n\nThe power electronics system, including advanced inverters, manages the seamless conversion and distribution of electrical energy between the motor, battery, and auxiliary systems. This ensures optimal efficiency and rapid energy deployment during both performance driving and regenerative phases.\n\nCooling and thermal management have been meticulously engineered to support sustained high-performance operation. Dedicated cooling circuits maintain optimal temperatures for both the combustion engine and hybrid components, allowing the system to deliver consistent output even under extreme track conditions.\n\nThe result is a highly integrated hybrid powertrain that not only enhances performance but also represents McLaren’s commitment to lightweight engineering, efficiency, and cutting-edge automotive technology.',
            powertrainModalBg: 'mclaren-modal-bg.jpg',
            architectureVid: 'mclaren-chassis.mp4',
            galleryVid: 'mclaren-765-engine.mp4',
            introLabel: 'McLaren Automotive',
            introTitle: 'McLaren P1',
            introImg: 'mclaren-intro.jpg',
            introDesc: 'The McLaren P1 represents the pinnacle of hybrid hypercar engineering, combining cutting-edge technology with relentless performance. Built on decades of racing innovation, it delivers an extraordinary balance of power, precision, and efficiency.\n\nAt its core, the P1 integrates a twin-turbocharged V8 engine with an advanced electric motor system, producing instantaneous response and breathtaking acceleration. This seamless fusion of combustion and electric power ensures exceptional driving dynamics both on the road and the track.\n\nEvery aspect of the P1 is engineered with purpose — from its lightweight carbon-fiber construction to its aerodynamically optimized body — all designed to maximize performance, stability, and driver engagement.\n\nThe McLaren P1 is not a concept of the future — it is a realization of it, redefining what a hybrid hypercar can achieve.',
            perfLabel: 'McLaren P1 PERFORMANCE',
            designVid: 'macharen_345.mp4',
            cta: 'DISCOVER DESIGN'
        },
        videos: { hero: 'mclaren-hero-new.mp4', engine: 'mclaren-engine.mp4' },
        images: { gallery: ['mclaren-720s-blue.png', 'mclaren-intro.jpg'] }
    },

    // ASTON MARTIN RANGE
    { 
        id: 'db11', name: 'DB11', brand: 'aston-martin', category: 'Grand Tourer', 
        price: '$205,000', image: 'assets/db11_premium.png', 
        modelUrl: 'aston_martin_db11.glb',
        specifications: { 
            engine: '5.2L V12 TWIN-TURBOCHARGED', 
            horsepower: '630 HP', 
            acceleration: '3.7 s', 
            topSpeed: '322 km/h',
            drivetrain: 'REAR-WHEEL DRIVE'
        },
        videos: { hero: 'db11-hero.mp4', engine: 'db11-rush.mp4' },
        marketing: {
            introLabel: 'Aston Martin',
            introTitle: 'ASTON MARTIN DB11',
            introImg: 'db11-intro.jpg',
            introDesc: 'The Aston Martin DB11 represents the perfect fusion of timeless design, advanced engineering, and grand touring performance. As a cornerstone of Aston Martin’s modern era, it redefines the standards of luxury and driving refinement.\n\nCrafted with meticulous attention to detail, the DB11 combines elegant proportions with cutting-edge aerodynamics. Its sculpted bodywork is not only visually striking but also engineered to enhance airflow, stability, and efficiency at high speeds.\n\nAt its core, the DB11 offers a choice of powerful twin-turbocharged engines, delivering effortless performance with smooth, responsive acceleration. Paired with a refined chassis and adaptive suspension system, it ensures a driving experience that is both dynamic and exceptionally comfortable.\n\nInside, the cabin reflects true British craftsmanship, featuring premium materials, advanced technology, and a driver-focused layout designed for long-distance journeys. Every element is tailored to provide a seamless blend of luxury, innovation, and control.\n\nThe Aston Martin DB11 is not merely a car — it is a grand tourer that embodies sophistication, performance, and the art of driving.',
            perfLabel: 'PERFORMANCE',
            designVid: 'aston_456.mp4',
            powertrainLabel: 'POWERTRAIN',
            powertrainTitle: '5.2L V12 TWIN-TURBO PERFORMANCE',
            powertrainDesc: 'CRAFTED ON PAPER,<br>REFINED ON THE ROAD',
            powertrainVid: 'db11-powertrain.mp4',
            architectureVid: 'db11-architecture.mp4',
            galleryVid: 'db11-gall-vid.mp4',
            powertrainCTA: 'DISCOVER ENGINEERING',
            powertrainDetail: 'At the heart of the DB11 lies a 5.2-liter V12 twin-turbocharged engine, engineered to deliver effortless performance and refined power. Developed in-house by Aston Martin, this advanced power unit produces 630 HP and 700 Nm of torque, offering smooth yet commanding acceleration across the entire rev range.\n\nThe twin-turbocharging system is designed for immediate response and enhanced efficiency, minimizing lag while maintaining strong mid-range and high-end performance. The engine is paired with a sophisticated 8-speed automatic transmission, delivering seamless gear shifts and optimized power delivery to the rear wheels.\n\nConstructed using lightweight aluminum architecture, the DB11 achieves an optimal balance between structural rigidity and reduced weight. This contributes to improved handling dynamics, agility, and overall driving precision, whether on long-distance journeys or high-speed runs.\n\nThe chassis is equipped with adaptive damping technology, allowing the driver to switch between multiple driving modes — including GT, Sport, and Sport+ — each tailored to provide a distinct balance between comfort and performance.\n\nAerodynamic innovation plays a crucial role in the DB11’s engineering. The patented “AeroBlade” system channels airflow through hidden ducts within the bodywork, generating downforce without the need for a traditional rear spoiler. This enhances high-speed stability while preserving the car’s elegant design language.\n\nThermal management systems ensure consistent engine performance under varying conditions, with advanced cooling circuits maintaining optimal operating temperatures during both relaxed cruising and demanding driving scenarios.\n\nThe braking system features high-performance ventilated discs, delivering precise stopping power and confidence at high speeds. Combined with electronic stability controls and traction management systems, the DB11 ensures both safety and dynamic excellence.\n\nThe Aston Martin DB11 is not merely a grand tourer — it is a finely engineered machine that seamlessly blends luxury, performance, and cutting-edge technology into a singular driving experience.'
        },
        images: { gallery: ['db11-gall-1.jpg', 'db11-gall-2.jpg'] }
    },

    // KOENIGSEGG RANGE
    { 
        id: 'cc850', name: 'CC850', brand: 'koenigsegg', category: 'Megacars', 
        price: '$3.65 million', image: 'assets/cc850_premium.png', 
        modelUrl: '2023_koenigsegg_cc850.glb',
        specifications: { 
            engine: '5.0L V8 TWIN-TURBOCHARGED', 
            horsepower: '1385 HP (ON E85 FUEL)', 
            acceleration: '~2.3 s (estimated)', 
            topSpeed: '~400 km/h (not officially confirmed)',
            drivetrain: 'REAR-WHEEL DRIVE'
        },
        videos: { hero: 'cc850-hero.mp4', engine: 'cc850-rush.mp4' },
        marketing: {
            introLabel: 'Koenigsegg',
            introTitle: 'KOENIGSEGG CC850',
            introImg: 'cc850-intro.jpg',
            introDesc: 'The Koenigsegg CC850 represents a groundbreaking fusion of heritage and innovation, redefining the boundaries of modern hypercar engineering. Created to celebrate 20 years of the iconic CC8S, the CC850 combines cutting-edge technology with a deep respect for analog driving purity.\n\nAt its core lies a revolutionary approach to performance — seamlessly blending extreme power with an unprecedented driver-focused experience. The CC850 introduces a world-first transmission system that can function both as a fully automatic gearbox and as a traditional gated manual, delivering the best of both worlds.\n\nIts design pays homage to Koenigsegg’s original DNA, with clean, timeless lines inspired by early models, while integrating advanced aerodynamics engineered for stability and efficiency at extreme speeds.\n\nBuilt around a lightweight carbon-fiber monocoque, the CC850 achieves exceptional rigidity and minimal weight, enhancing agility, responsiveness, and overall driving dynamics. Every component is meticulously engineered to maximize performance without compromising driver engagement.\n\nInside, the cabin is a perfect blend of craftsmanship and innovation, featuring a mechanical gated shifter — a rare and emotional connection between driver and machine in the modern hypercar era.\n\nThe Koenigsegg CC850 is not just a hypercar — it is a celebration of engineering excellence, a tribute to driving passion, and a bold vision of the future rooted in the spirit of the past.',
            designVid: 'koenigsegg_678.mp4',
            perfLabel: 'PERFORMANCE (ESTIMATED)',
            powertrainLabel: 'POWERTRAIN',
            powertrainTitle: '5.0L V8 TWIN-TURBO PERFORMANCE',
            powertrainDesc: 'ENGINEERED ON PAPER,<br>UNLEASHED ON THE ROAD',
            powertrainVid: 'cc850-powertrain.mp4',
            powertrainCTA: 'DISCOVER ENGINEERING',
            powertrainDetail: 'At the heart of the CC850 lies a highly advanced 5.0-liter V8 twin-turbocharged engine, developed entirely in-house by Koenigsegg. This lightweight yet immensely powerful unit produces up to 1385 HP when running on E85 fuel, delivering extraordinary performance while maintaining remarkable efficiency for a hypercar of its class.\n\nThe engine is engineered with a flat-plane crankshaft design, enabling high-revving characteristics and rapid throttle response. Paired with optimized twin-turbochargers, the system delivers immense power across the entire rev range, ensuring both explosive acceleration and sustained high-speed performance.\n\nOne of the most groundbreaking innovations in the CC850 is its revolutionary transmission system — the Engage Shift System (ESS). This unique gearbox can seamlessly switch between a fully automatic transmission and a traditional gated manual, offering a rare combination of modern convenience and pure mechanical engagement. This system allows the driver to experience both worlds without compromise.\n\nThe CC850 is built around a lightweight carbon-fiber monocoque chassis, providing exceptional structural rigidity while minimizing overall weight. With a near-perfect 1:1 power-to-weight ratio, the vehicle achieves unparalleled agility, responsiveness, and dynamic balance.\n\nAdvanced suspension geometry and adaptive damping systems ensure precise handling and stability under extreme conditions. The rear-wheel-drive configuration, combined with carefully engineered weight distribution, enhances driver control and delivers a pure, engaging driving experience.\n\nThermal management plays a critical role in sustaining peak performance. A highly efficient cooling system ensures optimal operating temperatures for both the engine and turbochargers, even during prolonged high-speed driving or track use.\n\nThe braking system features high-performance carbon-ceramic discs, delivering exceptional stopping power and resistance to fade. Integrated electronic control systems further enhance stability, traction, and overall driving confidence.\n\nAerodynamically, the CC850 combines classic design elements with modern airflow optimization. Subtle yet effective aerodynamic features ensure stability at high speeds while maintaining the car’s clean and timeless aesthetic.\n\nThe Koenigsegg CC850 is not merely engineered for performance — it is a technological masterpiece that redefines the relationship between driver and machine, blending innovation, heritage, and extreme capability into one extraordinary hypercar.',
            stats: [
                { val: '5.0L V8 TWIN-TURBOCHARGED', label: 'POWERTRAIN' },
                { val: '~2.3 s (estimated)', label: 'ACCELERATION (0–100 KM/H)' },
                { val: '$3.65 million*', label: 'VALUATION' },
                { val: '1385 HP (on E85 fuel)', label: 'POWER OUTPUT' }
            ],
            architectureVid: 'cc850-architecture.mp4',
            galleryVid: 'cc850-gall-vid.mp4'
        },
        images: { gallery: ['cc850-gall-1.jpg', 'cc850-gall-2.jpg'] }
    },

    // PAGANI RANGE
    { 
        id: 'zonda-cinque', name: 'Zonda Cinque Roadster', brand: 'pagani', category: 'Hypercars', 
        price: '$2.0 million', image: 'assets/zonda_cinque.png', 
        modelUrl: '2010_pagani_zonda_cinque_roadster.glb',
        specifications: { engine: '7.3L AMG V12', horsepower: '678 hp', acceleration: '3.4 s', topSpeed: '350 km/h' },
        videos: { hero: 'pagani_zonda_bg.mp4', engine: 'zonda_engine_rush.mp4', chassis: 'pagani_zonda_bg.mp4' },
        marketing: {
            introLabel: 'Pagani Automobili',
            introTitle: 'ZONDA CINQUE ROADSTER',
            introImg: 'zonda_intro_bg.jpg',
            introDesc: 'The Pagani Zonda Cinque Roadster is not just a car—it’s a rare piece of automotive art, engineering brilliance, and extreme performance combined into one ultra-exclusive machine.\n\nCreated by the Italian hypercar manufacturer Pagani Automobili, this model represents one of the most iconic and collectible versions of the legendary Zonda lineup.',
            designVid: 'pagani_654.mp4',
            powertrainVid: 'zonda_powertrain_video.mp4',
            architectureVid: 'zonda_architecture_video.mp4'
        },
        images: { gallery: ['assets/zonda_cinque.png', 'assets/zonda_custom_1234.jpeg'] }
    },
];

/* Error-safe local storage retrieval */
const getSafeData = (key, fallback) => {
    try {
        const item = localStorage.getItem(key);
        if (item) {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {
        console.warn(`LocalStorage Parse Error for ${key}, falling back to defaults.`);
    }
    return fallback;
};

const db = {
    getBrands: () => getSafeData('smk car_brands', defaultBrands),
    getCars: () => getSafeData('smk car_cars', defaultCars),
    saveBrands: (data) => {
        try { localStorage.setItem('smk car_brands', JSON.stringify(data)); } catch (e) { console.warn('Could not save to localStorage'); }
    },
    saveCars: (data) => {
        try { localStorage.setItem('smk car_cars', JSON.stringify(data)); } catch (e) { console.warn('Could not save to localStorage'); }
    }
};

/* FORCE INITIALIZATION TO FIX CORRUPTED CACHES */
try {
    // Force refresh to apply updated image URLs
    // Force refresh to apply updated image URLs
    // Force refresh to apply updated image URLs
    // Force refresh to apply updated image URLs
    // Force refresh to apply updated image URLs
    const CACHE_VERSION = 'v138_pagani_zonda_design_video_update';
    if (localStorage.getItem('smk car_cache_version') !== CACHE_VERSION) {
        localStorage.removeItem('smk car_brands');
        localStorage.removeItem('smk car_cars');
        db.saveBrands(defaultBrands);
        db.saveCars(defaultCars);
        localStorage.setItem('smk car_cache_version', CACHE_VERSION);
    }
    if (!localStorage.getItem('smk car_brands') || localStorage.getItem('smk car_brands') === '[object Object]') {
        db.saveBrands(defaultBrands);
    }
    if (!localStorage.getItem('smk car_cars') || localStorage.getItem('smk car_cars') === '[object Object]') {
        db.saveCars(defaultCars);
    }
} catch (e) { }

// Make it universally available (browser environment)
window.db = db;
