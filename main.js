document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initSmoothScroll();
});

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
