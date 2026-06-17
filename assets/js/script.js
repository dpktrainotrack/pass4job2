// Immediate theme application from localStorage to prevent Flash of Unstyled Content (FOUC)
(function () {
    const savedTheme = localStorage.getItem('pass4job-theme');
    if (savedTheme) {
        try {
            const theme = JSON.parse(savedTheme);
            if (theme.primary) {
                document.documentElement.style.setProperty('--primary-color', theme.primary);
            }
            if (theme.secondary) {
                document.documentElement.style.setProperty('--secondary-color', theme.secondary);
            }
            if (theme.accent) {
                document.documentElement.style.setProperty('--accent-color', theme.accent);
            }
        } catch (e) {
            console.error('Error applying theme:', e);
        }
    }
})();

document.addEventListener("DOMContentLoaded", function () {

    // 1. Sticky Navbar & Back to Top Button
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    const topHeaderElements = document.querySelector('.top-header');
    let topHeaderHeight = topHeaderElements ? topHeaderElements.offsetHeight : 0;

    window.addEventListener('scroll', function () {
        if (window.scrollY > topHeaderHeight) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Back to top
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // 2. Back to Top Click Action
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Smooth Scrolling for Anchor Links inside nav
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Voucher Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    if (filterBtns.length > 0 && filterItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
                filterBtns.forEach(b => b.classList.add('btn-outline-primary'));

                // Add active to clicked
                btn.classList.add('active', 'btn-primary');
                btn.classList.remove('btn-outline-primary');

                const filterValue = btn.getAttribute('data-filter');

                filterItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // simple animation
                        item.style.animation = 'scaleUp 0.3s ease-in-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // 5. Theme Customizer Initialization
    injectCustomizer();
    initCustomizerEvents();

});

// Add keyframes for filtering animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes scaleUp {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`;
document.head.appendChild(style);





$('#itTraningCourses').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    // autoplaySpeed: 12000,
    // smartSpeed: 12000,
    // slideTransition: 'linear',
    autoplayHoverPause: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
    }
});


$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});

$('.brands-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    // autoplayTimeout: 1, 
    autoplaySpeed: 10000,
    smartSpeed: 10000,
    slideTransition: 'linear',
    autoplayHoverPause: false,
    responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 },
        1200: { items: 6 }
    }
});

$('.placement-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 3 }
    }
});

// $('.brands-carousel-two').owlCarousel({
//     loop: true,
//     margin: 30,
//     nav: false,
//     dots: false,
//     rtl: true,
//     autoplay: false,
//     // autoplayTimeout: 1, 
//     autoplaySpeed: 5000,
//     smartSpeed: 5000,
//     slideTransition: 'linear',
//     autoplayHoverPause: false,
//     responsive: {
//         0: { items: 2 },
//         576: { items: 3 },
//         768: { items: 4 },
//         992: { items: 5 },
//         1200: { items: 6 }
//     }
// });

/* ==========================================
   THEME COLOR CUSTOMIZER LOGIC
   ========================================== */

const presets = [
    { name: 'Bronze (Default)', primary: '#5c3912', secondary: '#311001', accent: '#F8B400' },
    { name: 'Coral Sunset', primary: '#974d17ff', secondary: '#772d05ff', accent: '#412608ff' },
    { name: 'Ocean Breeze', primary: '#0284c7', secondary: '#0369a1', accent: '#eab308' },
    // { name: 'Crimson Charcoal', primary: '#099c90ff', secondary: '#034b50ff', accent: '#1f2937' },
    { name: 'Midnight Slate', primary: '#475569', secondary: '#334155', accent: '#38bdf8' },
    // edu 
    {
        name: 'Professional Navy',
        primary: '#1E3A5F',
        secondary: '#132238',
        accent: '#D4A017'
    },
    {
        name: 'Cloud Academy',
        primary: '#0F4C81',
        secondary: '#0A3558',
        accent: '#FFB703'
    },
    {
        name: 'Technology Slate',
        primary: '#334155',
        secondary: '#1E293B',
        accent: '#EAB308'
    },
    {
        name: 'Certification Pro',
        primary: '#1D4ED8',
        secondary: '#1E3A8A',
        accent: '#F4B400'
    },
    {
        name: 'Knowledge Gray',
        primary: '#475569',
        secondary: '#334155',
        accent: '#C0841A'
    },
    {
        name: 'Digital Campus',
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#EAB308'
    },
    {
        name: 'Modern LMS',
        primary: '#2563EB',
        secondary: '#1F2937',
        accent: '#F59E0B'
    },
    {
        name: 'Training Institute',
        primary: '#2C5282',
        secondary: '#1A365D',
        accent: '#D69E2E'
    }
];

// Hex color to HSL helper
function hexToHsl(hex) {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h * 360, s * 100, l * 100];
}

// HSL to Hex helper
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    let rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    let gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    let bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');
    return `#${rHex}${gHex}${bHex}`;
}

// Darken lightness to compute primary -> secondary harmony
function getDarkerSecondary(hexColor) {
    let [h, s, l] = hexToHsl(hexColor);
    let newL = Math.max(10, l * 0.55); // 45% darker, min 10% lightness
    return hslToHex(h, s, newL);
}

// Convert rgb strings (returned by computed styles) to hex format
function getCleanHex(colorString) {
    if (!colorString) return '';
    colorString = colorString.trim();
    if (colorString.startsWith('#') && (colorString.length === 7 || colorString.length === 4)) {
        return colorString;
    }
    if (colorString.startsWith('rgb')) {
        const parts = colorString.match(/\d+/g);
        if (parts && parts.length >= 3) {
            const r = parseInt(parts[0], 10);
            const g = parseInt(parts[1], 10);
            const b = parseInt(parts[2], 10);
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
    }
    return '';
}

// Dynamically inject structural customizer HTML
function injectCustomizer() {
    if (document.getElementById('tcPanel')) return;

    const backdrop = document.createElement('div');
    backdrop.className = 'theme-customizer-backdrop';
    backdrop.id = 'tcBackdrop';

    const toggle = document.createElement('div');
    toggle.className = 'theme-customizer-toggle';
    toggle.id = 'tcToggle';
    toggle.innerHTML = '<i class="fas fa-palette"></i>';
    toggle.title = 'Customize Theme';

    const panel = document.createElement('div');
    panel.className = 'theme-customizer-panel';
    panel.id = 'tcPanel';

    let presetsHtml = '';
    presets.forEach((p, idx) => {
        presetsHtml += `
            <div class="tc-preset-item" data-index="${idx}" title="${p.name}">
                <div class="tc-preset-color-primary" style="background-color: ${p.primary};"></div>
                <div class="tc-preset-color-accent" style="background-color: ${p.accent};"></div>
            </div>
        `;
    });

    panel.innerHTML = `
        <div class="tc-header">
            <h4><i class="fas fa-cog"></i> Theme Settings</h4>
            <button class="tc-close-btn" id="tcClose"><i class="fas fa-times"></i></button>
        </div>
        <div class="tc-body">
            <div class="tc-section">
                <div class="tc-section-title">Color Presets</div>
                <div class="tc-presets-grid">
                    ${presetsHtml}
                </div>
            </div>
            <div class="tc-section">
                <div class="tc-section-title">Custom Colors</div>
                
                <div class="tc-picker-row">
                    <span class="tc-picker-label">Primary Color</span>
                    <div class="tc-color-input-wrapper">
                        <input type="color" id="tcPrimaryPicker" value="#5c3912">
                    </div>
                </div>

                <div class="tc-picker-row">
                    <span class="tc-picker-label">Accent Color</span>
                    <div class="tc-color-input-wrapper">
                        <input type="color" id="tcAccentPicker" value="#F8B400">
                    </div>
                </div>
            </div>
        </div>
        <div class="tc-footer">
            <button class="tc-btn tc-btn-reset" id="tcReset"><i class="fas fa-undo"></i> Reset to Default</button>
        </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(toggle);
    document.body.appendChild(panel);
}

// Highlight the currently active preset
function updateActivePresetHighlight(primary, accent) {
    const items = document.querySelectorAll('.tc-preset-item');
    items.forEach(item => {
        const idx = item.getAttribute('data-index');
        const p = presets[idx];
        if (p && p.primary.toLowerCase() === primary.toLowerCase() && p.accent.toLowerCase() === accent.toLowerCase()) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Apply theme custom variables globally and persist choice
function applyTheme(primary, accent, secondary = null) {
    document.documentElement.classList.add('theme-transitioning');

    if (!secondary) {
        secondary = getDarkerSecondary(primary);
    }

    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
    document.documentElement.style.setProperty('--accent-color', accent);

    const themeSettings = { primary, secondary, accent };
    localStorage.setItem('pass4job-theme', JSON.stringify(themeSettings));

    updateActivePresetHighlight(primary, accent);

    const pPicker = document.getElementById('tcPrimaryPicker');
    const aPicker = document.getElementById('tcAccentPicker');
    if (pPicker) pPicker.value = getCleanHex(primary) || primary;
    if (aPicker) aPicker.value = getCleanHex(accent) || accent;

    setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
    }, 450);
}

// Revert theme to default bronze color scheme
function resetTheme() {
    document.documentElement.classList.add('theme-transitioning');

    document.documentElement.style.removeProperty('--primary-color');
    document.documentElement.style.removeProperty('--secondary-color');
    document.documentElement.style.removeProperty('--accent-color');

    localStorage.removeItem('pass4job-theme');

    updateActivePresetHighlight('#5c3912', '#F8B400');

    const pPicker = document.getElementById('tcPrimaryPicker');
    const aPicker = document.getElementById('tcAccentPicker');
    if (pPicker) pPicker.value = '#5c3912';
    if (aPicker) aPicker.value = '#F8B400';

    setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
    }, 450);
}

// Setup customizer event listeners
function initCustomizerEvents() {
    const toggle = document.getElementById('tcToggle');
    const panel = document.getElementById('tcPanel');
    const backdrop = document.getElementById('tcBackdrop');
    const closeBtn = document.getElementById('tcClose');
    const resetBtn = document.getElementById('tcReset');
    const primaryPicker = document.getElementById('tcPrimaryPicker');
    const accentPicker = document.getElementById('tcAccentPicker');
    const presetItems = document.querySelectorAll('.tc-preset-item');

    function openPanel() {
        panel.classList.add('open');
        backdrop.classList.add('active');
    }

    function closePanel() {
        panel.classList.remove('open');
        backdrop.classList.remove('active');
    }

    if (toggle) toggle.addEventListener('click', openPanel);
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    if (backdrop) backdrop.addEventListener('click', closePanel);

    presetItems.forEach(item => {
        item.addEventListener('click', function () {
            const idx = this.getAttribute('data-index');
            const p = presets[idx];
            if (p) {
                applyTheme(p.primary, p.accent, p.secondary);
            }
        });
    });

    if (primaryPicker) {
        primaryPicker.addEventListener('input', function () {
            applyTheme(this.value, accentPicker ? accentPicker.value : '#F8B400');
        });
    }

    if (accentPicker) {
        accentPicker.addEventListener('input', function () {
            applyTheme(primaryPicker ? primaryPicker.value : '#5c3912', this.value);
        });
    }

    if (resetBtn) resetBtn.addEventListener('click', resetTheme);

    // Initial setup for inputs
    const currentPrimary = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const currentAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    const cleanPrimary = getCleanHex(currentPrimary) || '#5c3912';
    const cleanAccent = getCleanHex(currentAccent) || '#F8B400';

    if (primaryPicker) primaryPicker.value = cleanPrimary;
    if (accentPicker) accentPicker.value = cleanAccent;
    updateActivePresetHighlight(cleanPrimary, cleanAccent);
}
