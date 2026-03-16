const translations = {
    es: {
        "nav-services": "Servicios",
        "nav-booking": "Reservar",
        "nav-gallery": "Galería",
        "nav-about": "Nosotros",
        "btn-reserve": "Reservar Cita",
        "hero-tagline": "Desde 1992",
        "hero-h2": "EL ARTE DE LA <br/> <span class='text-gold'>PRECISIÓN</span>",
        "hero-p": "Experimenta el pináculo del grooming tradicional en una atmósfera moderna. Cortes personalizados, afeitados reales y una sofisticación atemporal para el caballero moderno.",
        "btn-hero-book": "Reserva tu Experiencia",
        "btn-hero-menu": "Ver Menú",
        "services-subtitle": "Nuestro Menú",
        "services-title": "Tratamientos Exclusivos",
        "service-1-name": "Corte Clásico",
        "service-1-desc": "Un corte de pelo personalizado que incluye lavado, masaje capilar y peinado de precisión para adaptarse a tu estilo.",
        "service-2-name": "Afeitado Real",
        "service-2-desc": "El afeitado tradicional definitivo con navaja, toallas calientes, aceites esenciales y bálsamo post-afeitado.",
        "service-3-name": "Esculpido de Barba",
        "service-3-desc": "Grooming experto de barba usando máquinas y tijeras para definir tu vello facial con nitidez extrema.",
        "service-4-name": "Executive Head Spa",
        "service-4-desc": "Tratamiento de acondicionamiento profundo y masaje vigorizante para promover la salud capilar y relajación.",
        "service-5-name": "Camuflaje de Canas",
        "service-5-desc": "Tratamiento de color sutil para camuflar las canas de forma natural para un aspecto rejuvenecido.",
        "service-6-name": "Combo Barberillos",
        "service-6-desc": "Nuestro servicio insignia que combina el Corte Clásico y el Afeitado Real para la experiencia completa.",
        "booking-subtitle": "Disponibilidad",
        "booking-title": "Reserva tu Silla",
        "booking-desc": "Selecciona tu fecha y hora preferidas. Nuestros maestros barberos tienen alta demanda, recomendamos reservar con antelación.",
        "booking-hours-label": "Horario de Atención",
        "booking-hours-value": "Lun - Sáb: 9am - 8pm | Dom: 11am - 5pm",
        "booking-location-label": "Ubicación",
        "form-service-label": "Seleccionar Servicio",
        "form-date-label": "Fecha",
        "form-time-label": "Hora",
        "form-calendar-label": "Calendario",
        "btn-confirm-booking": "Confirmar Cita",
        "gallery-subtitle": "Galería Visual",
        "gallery-title": "Precisión Magistral",
        "btn-follow": "Sigue a @BarberillosShop",
        "footer-about": "Redefiniendo el estándar del grooming de lujo desde 1992. Cada corte es una obra de maestra, cada cliente es familia.",
        "footer-nav-title": "Navegación",
        "footer-newsletter-title": "Newsletter",
        "footer-newsletter-desc": "Únete para consejos de estilo y ofertas exclusivas.",
        "footer-copyright": "© 2024 Barberillos Shop. Todos los derechos reservados.",
        "footer-privacy": "Política de Privacidad",
        "footer-terms": "Términos de Servicio",
        "lang-btn": "EN"
    },
    en: {
        "nav-services": "Services",
        "nav-booking": "Book Now",
        "nav-gallery": "Gallery",
        "nav-about": "The Shop",
        "btn-reserve": "Book Appointment",
        "hero-tagline": "Established 1992",
        "hero-h2": "THE ART OF <br/> <span class='text-gold'>PRECISION</span>",
        "hero-p": "Experience the pinnacle of traditional grooming in a modern atmosphere. Tailored cuts, royal shaves, and timeless sophistication for the modern gentleman.",
        "btn-hero-book": "Book Your Experience",
        "btn-hero-menu": "View Menu",
        "services-subtitle": "Our Menu",
        "services-title": "Signature Treatments",
        "service-1-name": "The Classic Cut",
        "service-1-desc": "A tailored haircut including wash, scalp massage, and precision styling to suit your personality.",
        "service-2-name": "Royal Hot Shave",
        "service-2-desc": "The ultimate traditional straight razor shave with hot towels, essential oils, and after-shave balm.",
        "service-3-name": "Beard Sculpting",
        "service-3-desc": "Expert beard grooming using clippers and shears to define your facial hair with sharp precision.",
        "service-4-name": "Executive Head Spa",
        "service-4-desc": "Deep conditioning treatment and invigorating scalp massage to promote hair health and relaxation.",
        "service-5-name": "Grey Blending",
        "service-5-desc": "Subtle color treatment to naturally camouflage grey hair for a refreshed and youthful look.",
        "service-6-name": "The Barberillos Combo",
        "service-6-desc": "Our signature service combining the Classic Cut and Royal Hot Shave for the complete experience.",
        "booking-subtitle": "Availability",
        "booking-title": "Reserve Your Chair",
        "booking-desc": "Select your preferred date and time. Our master barbers are in high demand, we recommend booking in advance.",
        "booking-hours-label": "Hours of Operation",
        "booking-hours-value": "Mon - Sat: 9am - 8pm | Sun: 11am - 5pm",
        "booking-location-label": "Location",
        "form-service-label": "Select Service",
        "form-date-label": "Date",
        "form-time-label": "Time",
        "form-calendar-label": "Calendar",
        "btn-confirm-booking": "Confirm Appointment",
        "gallery-subtitle": "Visual Gallery",
        "gallery-title": "Masterful Precision",
        "btn-follow": "Follow @BarberillosShop",
        "footer-about": "Redefining the standard of luxury grooming since 1992. Every cut is a masterpiece, every client is family.",
        "footer-nav-title": "Navigation",
        "footer-newsletter-title": "Newsletter",
        "footer-newsletter-desc": "Join our list for style tips and exclusive offers.",
        "footer-copyright": "© 2024 Barberillos Shop. All rights reserved.",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service",
        "lang-btn": "ES"
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initSmoothScroll();
    initLanguage();
});

function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    applyTranslations();

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyTranslations();
    });
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    const langToggle = document.getElementById('langToggle');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    if (langToggle) {
        langToggle.textContent = translations[currentLang]["lang-btn"];
    }
}

function initCalendar() {
    const calendarDays = document.querySelector('.calendar-days');
    if (!calendarDays) return;

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Clear placeholder
    calendarDays.innerHTML = '';

    // Get days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // Add empty slots for the first week
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day muted';
        calendarDays.appendChild(empty);
    }

    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;
        
        if (day === today.getDate()) {
            dayEl.classList.add('active');
        }

        dayEl.addEventListener('click', () => {
            document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
            dayEl.classList.add('active');
            
            // Update date input if it exists
            const dateInput = document.querySelector('input[type="date"]');
            if (dateInput) {
                const month = (currentMonth + 1).toString().padStart(2, '0');
                const dayStr = day.toString().padStart(2, '0');
                dateInput.value = `${currentYear}-${month}-${dayStr}`;
            }
        });

        calendarDays.appendChild(dayEl);
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
