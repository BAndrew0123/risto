/**
 * ISTANBUL KEBAB House Baia Flaminia Pesaro - Master Application JavaScript
 * Clean Landing Page Script with Environment Credentials (.env) Support
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Environment & API Credentials Configuration
       ==========================================
       Credentials are key-value pairs parsed dynamically from .env by main.py
       and exposed as window.APP_CONFIG (with local fallback).
    */
    const config = window.APP_CONFIG || {};
    const EMAIL_ACCESS_KEY = config.EMAIL_ACCESS_KEY || 'your_web3forms_access_key_here';
    const SUPABASE_URL = config.SUPABASE_URL || 'https://xyzcompany.supabase.co';
    const SUPABASE_ANON_KEY = config.SUPABASE_ANON_KEY || 'your_supabase_anon_key_here';

    let supabaseClient = null;
    if (window.supabase && typeof window.supabase.createClient === 'function' && SUPABASE_URL && !SUPABASE_URL.includes('xyzcompany')) {
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } catch (e) {
            console.warn("Supabase initialization skipped.");
        }
    }

    /* ==========================================
       2. Turkish Kebab Menu Dataset
       ========================================== */
    const menuData = [
        {
            id: 1,
            title: "Panino Döner Kebab Classico",
            titleSub: "Panino pita farcito al momento",
            category: "kebab",
            price: "€ 6.50",
            image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80",
            description: "Pane pita arabo caldo farcito con carne rotante croccante, lattuga, pomodori, cipolla fresca, cavolo rosso e salse a scelta (aglio/piccante/yogurt).",
            isHalal: true,
            isVegan: false,
            spicyLevel: 1
        },
        {
            id: 2,
            title: "Piadina Kebab (Dürüm Wrap Roll)",
            titleSub: "Sottile piadina arrotolata e tostata",
            category: "kebab",
            price: "€ 7.00",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
            description: "Morbida piadina arrotolata con abbondante carne kebab grigliata, verdure fresche croccanti e le nostre famose salse fatte in casa.",
            isHalal: true,
            isVegan: false,
            spicyLevel: 1
        },
        {
            id: 3,
            title: "Döner Kebab Special Cheese & Chips",
            titleSub: "Panino o piadina con formaggio fuso e patatine",
            category: "kebab",
            price: "€ 8.00",
            image: "https://images.unsplash.com/photo-1529563023406-039c3a372138?auto=format&fit=crop&w=600&q=80",
            description: "Il preferito dai golosi: Kebab con aggiunta di formaggio fuso filante e croccanti patatine fritte inserite direttamente nel panino.",
            isHalal: true,
            isVegan: false,
            spicyLevel: 1
        },
        {
            id: 4,
            title: "Falafel Wrap Vegetariano",
            titleSub: "Piadina o panino con polpette di ceci",
            category: "veggie",
            price: "€ 6.50",
            image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
            description: "Polpette di ceci e spezie mediorientali fritte al momento, servite in piadina con hummus cremoso, insalata fresca e salsa alla menta.",
            isHalal: true,
            isVegan: true,
            spicyLevel: 0
        },
        {
            id: 5,
            title: "Istanbul Kebab Box",
            titleSub: "Carne Kebab + Patatine fritte + Salse",
            category: "boxes",
            price: "€ 7.50",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
            description: "Pratica confezione d'asporto strabordante di patatine fritte dorate e abbondanti sfilaccetti di carne kebab ricoperti di salse.",
            isHalal: true,
            isVegan: false,
            spicyLevel: 1
        },
        {
            id: 6,
            title: "Piatto Kebab Completo",
            titleSub: "Carne, Riso Basmati, Insalata, Patatine & Pane",
            category: "boxes",
            price: "€ 11.00",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
            description: "Piatto ricco e completo: una grande porzione di carne kebab servita con riso basmati speziato, patatine fritte, insalata mista e pane pita.",
            isHalal: true,
            isVegan: false,
            spicyLevel: 1
        },
        {
            id: 7,
            title: "Piatto Grigliata Mista Turca",
            titleSub: "Spiedini Shish Kebab, Carne Doner & Köfte",
            category: "boxes",
            price: "€ 14.00",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
            description: "Selezione speciale di carne grigliata alla brace: spiedino di pollo marinato, polpettine Köfte, carne Doner, serviti con riso e salse.",
            isHalal: true,
            isVegan: false,
            spicyLevel: 2
        },
        {
            id: 8,
            title: "Piatto Falafel & Hummus (Veggie)",
            titleSub: "6 Falafel croccanti, Hummus, Riso & Insalata",
            category: "veggie",
            price: "€ 10.00",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
            description: "Piatto vegetariano e vegano ricco di proteine: 6 falafel caldi, abbondante crema di hummus di ceci, insalata fresca e pane pita tostata.",
            isHalal: true,
            isVegan: true,
            spicyLevel: 0
        },
        {
            id: 9,
            title: "Patatine Fritte Dorate (Porzione Grande)",
            titleSub: "Servite veloci e croccanti",
            category: "sides",
            price: "€ 4.00",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
            description: "Patatine fritte taglio classico salate al punto giusto, servite con maionese, ketchup o salsa aglio.",
            isHalal: true,
            isVegan: true,
            spicyLevel: 0
        },
        {
            id: 10,
            title: "Baklava Turca Tradizionale (2 pz)",
            titleSub: "Sfoglia miele e pistacchio",
            category: "desserts",
            price: "€ 4.00",
            image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80",
            description: "Famoso dolce turco a strati di pasta sfoglia croccante, ripieno di noci e pistacchi tritati, affogato in sciroppo di miele dorato.",
            isHalal: true,
            isVegan: false,
            spicyLevel: 0
        }
    ];

    /* ==========================================
       3. Public Menu Renderer
       ========================================== */
    const menuGrid = document.getElementById('menuGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuSearch = document.getElementById('menuSearch');

    let currentFilter = 'all';
    let currentSearch = '';

    function renderMenu() {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';

        const filtered = menuData.filter(item => {
            const matchesFilter = (currentFilter === 'all') || (item.category === currentFilter);
            const matchesSearch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                  item.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                  (item.titleSub && item.titleSub.toLowerCase().includes(currentSearch.toLowerCase()));
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            menuGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--color-gold); margin-bottom: 15px;"></i>
                    <h3>Nessun piatto trovato</h3>
                    <p>Prova a cercare un altro piatto o seleziona un'altra categoria.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            
            let spicyHtml = '';
            if (item.spicyLevel > 0) {
                const chilies = '🌶️'.repeat(item.spicyLevel);
                spicyHtml = `<span class="spicy-rating">${chilies} Piccante</span>`;
            } else {
                spicyHtml = `<span style="font-size: 0.8rem; color: var(--text-muted);">Delicato</span>`;
            }

            let badgesHtml = '';
            if (item.isHalal) badgesHtml += `<span class="badge badge-halal">100% Halal</span>`;
            if (item.isVegan) badgesHtml += `<span class="badge badge-vegan">Vegetariano</span>`;

            card.innerHTML = `
                <div class="menu-img-wrap">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Istanbul+Kebab'">
                    <div class="menu-badges">${badgesHtml}</div>
                    <div class="menu-price-tag">${item.price}</div>
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.title}</h3>
                    <div class="menu-title-thai">${item.titleSub || ''}</div>
                    <p class="menu-desc">${item.description}</p>
                    <div class="menu-footer">
                        <div>${spicyHtml}</div>
                        <a href="https://maps.app.goo.gl/x5qKcoqUW82T4Qrq6" target="_blank" class="btn btn-gold btn-sm">
                            <i class="fa-solid fa-cart-shopping"></i> Ordina Online
                        </a>
                    </div>
                </div>
            `;

            menuGrid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderMenu();
        });
    });

    if (menuSearch) {
        menuSearch.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderMenu();
        });
    }

    renderMenu();

    /* ==========================================
       4. Contact Form Submission Handler (Email Dispatch + Supabase + Local Backup)
       ========================================== */
    const contactForm = document.getElementById('contactForm');
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('cName');
            const emailInput = document.getElementById('cEmail');
            const messageInput = document.getElementById('cMessage');

            const name = nameInput.value.trim();
            const emailOrPhone = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !emailOrPhone || !message) {
                showToast("Per favore compila tutti i campi del modulo.", "error");
                return;
            }

            // UI Loading state
            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = true;
                contactSubmitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Invio in corso...`;
            }

            // 1. Direct Email Dispatch to Owner Inbox (via Web3Forms API using .env key)
            if (EMAIL_ACCESS_KEY && !EMAIL_ACCESS_KEY.includes('your_web3forms')) {
                try {
                    await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            access_key: EMAIL_ACCESS_KEY,
                            subject: `Nuovo Messaggio Cliente da Istanbul Kebab (${name})`,
                            from_name: "Istanbul Kebab Website",
                            name: name,
                            email_or_phone: emailOrPhone,
                            message: message
                        })
                    });
                } catch (err) {
                    console.warn("Direct email API error:", err);
                }
            }

            // 2. Supabase Insert
            if (supabaseClient) {
                try {
                    await supabaseClient.from('contact_messages').insert([
                        { name: name, email_or_phone: emailOrPhone, message: message }
                    ]);
                } catch (err) {
                    console.warn("Supabase insert error:", err);
                }
            }

            // 3. Local Backup Storage
            try {
                const storedMessages = JSON.parse(localStorage.getItem('istanbul_saved_messages') || '[]');
                storedMessages.unshift({
                    id: Date.now(),
                    name: name,
                    email_or_phone: emailOrPhone,
                    message: message,
                    created_at: new Date().toISOString()
                });
                localStorage.setItem('istanbul_saved_messages', JSON.stringify(storedMessages));
            } catch (e) {
                console.error("Local storage backup error:", e);
            }

            // Restore UI button state
            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = false;
                contactSubmitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Invia Messaggio`;
            }

            // Reset form fields
            contactForm.reset();

            // Success feedback toast
            showToast(`Grazie ${name}! Il tuo messaggio è stato inviato con successo al ristorante.`, 'success');
        });
    }

    // Console Helper: Owner can type `getContactMessages()` in browser console
    window.getContactMessages = function() {
        const localMsgs = JSON.parse(localStorage.getItem('istanbul_saved_messages') || '[]');
        console.table(localMsgs);
        return localMsgs;
    };

    /* ==========================================
       5. Gallery Lightbox Modal
       ========================================== */
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');
            const caption = item.querySelector('.gallery-overlay span')?.innerText || '';
            if (imageModal && modalImage) {
                modalImage.src = src;
                if (modalCaption) modalCaption.innerText = caption;
                imageModal.style.display = 'flex';
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (imageModal) imageModal.style.display = 'none';
        });
    }

    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });
    }

    /* ==========================================
       6. Navbar & Scroll Logic
       ========================================== */
    const navbar = document.querySelector('.navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburgerBtn.classList.remove('open');
            });
        });
    }

    /* ==========================================
       7. Notification Toast Helper
       ========================================== */
    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        
        let iconClass = 'fa-solid fa-info-circle';
        if (type === 'success') iconClass = 'fa-solid fa-circle-check';
        if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

        toast.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    }

});
