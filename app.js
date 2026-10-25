/**
 * ISTANBUL KEBAB House Baia Flaminia Pesaro - Master Application JavaScript
 * 100% Standalone Static Website
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Turkish Kebab Menu Dataset
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
            spicyLevel: 1,
            ingredients: [
                "Pane pita arabo artigianale tostato",
                "Carne döner kebab speziata (100% Halal)",
                "Lattuga iceberg fresca",
                "Pomodori a fette",
                "Cipolla fresca",
                "Cavolo rosso marinato",
                "Salsa allo yogurt",
                "Salsa piccante turca",
                "Salsa aglio artigianale"
            ],
            allergens: [
                "Glutine (pane pita)",
                "Lattosio (salsa yogurt)",
                "Uova (salse)"
            ],
            customizable: "Puoi richiedere: Senza cipolla, senza pomodoro, senza salse piccanti, salse a parte o solo carne."
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
            spicyLevel: 1,
            ingredients: [
                "Piadina sfogliata arrotolata e tostata",
                "Carne kebab döner allo spiedo (100% Halal)",
                "Lattuga fresca croccante",
                "Pomodori maturi",
                "Cipolla a rondelle",
                "Cavolo cappuccio",
                "Salsa bianca allo yogurt",
                "Salsa aglio",
                "Salsa rossa piccante"
            ],
            allergens: [
                "Glutine (piadina)",
                "Lattosio (salsa yogurt)",
                "Uova (salse)"
            ],
            customizable: "Puoi richiedere: Senza cipolla, non piccante, senza cavolo, salse a parte o solo carne."
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
            spicyLevel: 1,
            ingredients: [
                "Pane pita o piadina a scelta",
                "Carne döner kebab (100% Halal)",
                "Formaggio fuso filante cheddar/mozzarella",
                "Patatine fritte dorate (all'interno)",
                "Insalata mista e pomodori",
                "Cipolla fresca",
                "Salse maionese, ketchup e yogurt"
            ],
            allergens: [
                "Glutine (pane/piadina)",
                "Lattosio (formaggio fuso e salse)",
                "Uova (salse)"
            ],
            customizable: "Puoi richiedere: Senza formaggio, senza cipolla, patatine a parte o senza salse piccanti."
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
            spicyLevel: 0,
            ingredients: [
                "Polpette falafel di ceci con prezzemolo, cumino, coriandolo e aglio",
                "Piadina sfogliata arrotolata",
                "Hummus cremoso di ceci e tahina (sesamo)",
                "Lattuga iceberg fresca",
                "Pomodori a dadini",
                "Cetrioli a fette",
                "Salsa alla menta e tahina"
            ],
            allergens: [
                "Glutine (piadina)",
                "Semi di sesamo (hummus / tahina)",
                "Lattosio (presente solo se scegli salsa yogurt: richiedibile 100% vegano)"
            ],
            customizable: "100% Vegano su richiesta: senza salsa yogurt (solo hummus e tahina). Puoi escludere cipolla o cetrioli."
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
            spicyLevel: 1,
            ingredients: [
                "Patatine fritte dorate e croccanti",
                "Carne döner kebab affettata fine (100% Halal)",
                "Salsa allo yogurt",
                "Salsa aglio delicata",
                "Salsa piccante turca"
            ],
            allergens: [
                "Lattosio (salsa yogurt)",
                "Uova (maionese/salse)"
            ],
            customizable: "Puoi richiedere: Salse separate in vaschetta, senza salse piccanti o solo ketchup e maionese."
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
            spicyLevel: 1,
            ingredients: [
                "Grande porzione di carne döner kebab (100% Halal)",
                "Riso basmati cotto a vapore e profumato alle spezie",
                "Patatine fritte croccanti",
                "Insalata mista fresca (pomodoro, carote, lattuga, cipolla)",
                "Pane pita arabo tostato",
                "Coppette di salse artigianali"
            ],
            allergens: [
                "Glutine (pane pita)",
                "Lattosio (salsa yogurt)",
                "Uova (salse)"
            ],
            customizable: "Puoi richiedere: Più insalata al posto delle patatine, senza riso, senza cipolla o salse separate."
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
            spicyLevel: 2,
            ingredients: [
                "Spiedino di pollo marinato con paprika e spezie (Shish Tavuk)",
                "Polpettine di carne macinata speziata alla brace (Köfte)",
                "Carne Döner Kebab affettata",
                "Riso basmati speziato",
                "Verdure alla griglia",
                "Pane pita caldo",
                "Salse della casa"
            ],
            allergens: [
                "Glutine (pane pita)",
                "Lattosio (marinatura / salsa yogurt)"
            ],
            customizable: "Puoi richiedere: Carne ben cotta, non piccante, senza salse o riso doppio."
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
            spicyLevel: 0,
            ingredients: [
                "6 Falafel dorati di ceci ed erbe aromatiche fresche",
                "Abbondante hummus di ceci artigianale con olio EVO e paprika",
                "Riso basmati speziato",
                "Insalata fresca di stagione con pomodorini",
                "Pane pita tostato",
                "Salsa tahina al sesamo e limone"
            ],
            allergens: [
                "Semi di sesamo (tahina / hummus)",
                "Glutine (pane pita)"
            ],
            customizable: "100% Vegano. Per renderlo senza glutine è possibile chiedere senza pane pita."
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
            spicyLevel: 0,
            ingredients: [
                "Patate selezionate taglio classico",
                "Olio vegetale per frittura",
                "Sale q.b.",
                "Salse a scelta (Ketchup, Maionese, Salsa Aglio)"
            ],
            allergens: [
                "Uova (presenti solo nella maionese - ketchup e salsa BBQ 100% vegani)"
            ],
            customizable: "Puoi richiedere: Senza sale o salse a scelta separate in bustina."
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
            spicyLevel: 0,
            ingredients: [
                "Sottili strati di pasta sfoglia fillo",
                "Granella di pistacchi orientali e noci tritate",
                "Burro fuso chiarificato",
                "Sciroppo dolce di zucchero e miele dorato"
            ],
            allergens: [
                "Frutta a guscio (pistacchi, noci)",
                "Glutine (pasta fillo)",
                "Lattosio (burro)"
            ],
            customizable: "Dolce tradizionale porzionato in 2 pezzi, servito a temperatura ambiente."
        }
    ];

    /* ==========================================
       2. Public Menu Renderer
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
                    <a href="#dishDetailsModal" class="menu-img-link open-dish-details" data-id="${item.id}" title="Vedi ingredienti di ${item.title}">
                        <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Istanbul+Kebab'">
                        <span class="view-ingredients-badge"><i class="fa-solid fa-list-ul"></i> Ingredienti</span>
                    </a>
                    <div class="menu-badges">${badgesHtml}</div>
                    <div class="menu-price-tag">${item.price}</div>
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.title}</h3>
                    <div class="menu-title-thai">${item.titleSub || ''}</div>
                    <p class="menu-desc">${item.description}</p>
                    <div class="menu-footer">
                        <div>${spicyHtml}</div>
                        <a href="#dishDetailsModal" class="btn btn-outline btn-sm open-dish-details" data-id="${item.id}" aria-label="Ingredienti di ${item.title}">
                            <i class="fa-solid fa-circle-info"></i> Dettagli & Ingredienti
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
       3. Gallery Lightbox Modal
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

    /* ==========================================
       8. Order Online / House Number Modal Handler
       ========================================== */
    const orderModal = document.getElementById('orderModal');
    const orderModalClose = document.getElementById('orderModalClose');
    const orderModalDishNotice = document.getElementById('orderModalDishNotice');
    const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    const copyPhoneBtn = document.getElementById('copyPhoneBtn');

    const RESTAURANT_PHONE = "+39 351 0353459";
    const RESTAURANT_LANDLINE = "+39 0721 25648";
    const RESTAURANT_ADDRESS = "Viale Bruxelles 20, 61121 Pesaro (PU)";

    function openOrderModal(dishName = '') {
        if (!orderModal) return;

        if (dishName && orderModalDishNotice) {
            orderModalDishNotice.style.display = 'inline-block';
            orderModalDishNotice.innerHTML = `<i class="fa-solid fa-utensils text-gold"></i> Piatto scelto: <strong>${dishName}</strong>`;
            
            if (modalWhatsappBtn) {
                const encodedMsg = encodeURIComponent(`Salve Istanbul Kebab House, vorrei ordinare: ${dishName}`);
                modalWhatsappBtn.href = `https://wa.me/393510353459?text=${encodedMsg}`;
            }
        } else {
            if (orderModalDishNotice) {
                orderModalDishNotice.style.display = 'none';
                orderModalDishNotice.innerHTML = '';
            }
            if (modalWhatsappBtn) {
                modalWhatsappBtn.href = `https://wa.me/393510353459?text=${encodeURIComponent('Salve Istanbul Kebab House, vorrei effettuare un ordine')}`;
            }
        }

        orderModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeOrderModal() {
        if (!orderModal) return;
        orderModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Global listener for all buttons with .open-order-modal
    document.addEventListener('click', (e) => {
        const orderTrigger = e.target.closest('.open-order-modal');
        if (orderTrigger) {
            e.preventDefault();
            const dish = orderTrigger.getAttribute('data-dish') || '';
            openOrderModal(dish);
        }
    });

    if (orderModalClose) {
        orderModalClose.addEventListener('click', closeOrderModal);
    }

    if (orderModal) {
        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) {
                closeOrderModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (dishDetailsModal && dishDetailsModal.classList.contains('active')) {
                closeDishDetailsModal();
            } else if (orderModal && orderModal.classList.contains('active')) {
                closeOrderModal();
            }
        }
    });

    // Clipboard helpers
    if (copyAddressBtn) {
        copyAddressBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(RESTAURANT_ADDRESS);
                showToast("Indirizzo e civico copiati negli appunti!", "success");
            } catch (err) {
                showToast(RESTAURANT_ADDRESS, "info");
            }
        });
    }

    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(RESTAURANT_PHONE);
                showToast("Numero di telefono copiato negli appunti!", "success");
            } catch (err) {
                showToast(RESTAURANT_PHONE, "info");
            }
        });
    }

    /* ==========================================
       9. Dish Details & Ingredients Modal Handler
       ========================================== */
    const dishDetailsModal = document.getElementById('dishDetailsModal');
    const dishDetailsModalClose = document.getElementById('dishDetailsModalClose');
    const dishModalCloseBtn = document.getElementById('dishModalCloseBtn');
    const dishModalOrderCtaBtn = document.getElementById('dishModalOrderCtaBtn');

    const dishModalImg = document.getElementById('dishModalImg');
    const dishModalPrice = document.getElementById('dishModalPrice');
    const dishModalCategory = document.getElementById('dishModalCategory');
    const dishModalTitle = document.getElementById('dishModalTitle');
    const dishModalSub = document.getElementById('dishModalSub');
    const dishModalBadges = document.getElementById('dishModalBadges');
    const dishModalDesc = document.getElementById('dishModalDesc');
    const dishModalIngredients = document.getElementById('dishModalIngredients');
    const dishModalAllergens = document.getElementById('dishModalAllergens');
    const dishModalCustom = document.getElementById('dishModalCustom');

    let currentDetailDish = null;

    function openDishDetailsModal(dishId) {
        if (!dishDetailsModal) return;
        const dish = menuData.find(d => d.id === parseInt(dishId, 10));
        if (!dish) return;

        currentDetailDish = dish;

        if (dishModalImg) {
            dishModalImg.src = dish.image;
            dishModalImg.alt = dish.title;
        }
        if (dishModalPrice) dishModalPrice.textContent = dish.price;
        if (dishModalCategory) {
            const catMap = {
                'kebab': 'PANINI & PIADINE',
                'boxes': 'KEBAB BOX & PIATTI',
                'veggie': 'VEGETARIANO & FALAFEL',
                'sides': 'CONTORNI',
                'desserts': 'DOLCI TRADIZIONALI'
            };
            dishModalCategory.textContent = catMap[dish.category] || 'SPECIALITÀ';
        }
        if (dishModalTitle) dishModalTitle.textContent = dish.title;
        if (dishModalSub) dishModalSub.textContent = dish.titleSub || '';
        if (dishModalDesc) dishModalDesc.textContent = dish.description;

        // Badges
        if (dishModalBadges) {
            let badges = '';
            if (dish.isHalal) badges += '<span class="badge badge-halal">100% Halal</span>';
            if (dish.isVegan) badges += '<span class="badge badge-vegan">Vegetariano</span>';
            if (dish.spicyLevel > 0) {
                badges += `<span class="badge" style="background: rgba(231, 76, 60, 0.2); color: #ff7675; border: 1px solid rgba(231, 76, 60, 0.4);">${'🌶️'.repeat(dish.spicyLevel)} Piccante</span>`;
            } else {
                badges += '<span class="badge" style="background: rgba(255, 255, 255, 0.08); color: var(--text-muted);">Delicato</span>';
            }
            dishModalBadges.innerHTML = badges;
        }

        // Ingredients
        if (dishModalIngredients) {
            dishModalIngredients.innerHTML = '';
            (dish.ingredients || []).forEach(ing => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-check text-gold"></i> <span>${ing}</span>`;
                dishModalIngredients.appendChild(li);
            });
        }

        // Allergens
        if (dishModalAllergens) {
            dishModalAllergens.innerHTML = '';
            if (dish.allergens && dish.allergens.length > 0) {
                dish.allergens.forEach(all => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span>${all}</span>`;
                    dishModalAllergens.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.className = 'no-allergens';
                li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Nessun allergene principale segnalato</span>`;
                dishModalAllergens.appendChild(li);
            }
        }

        // Customization
        if (dishModalCustom) {
            dishModalCustom.textContent = dish.customizable || "Quando effettui l'ordine, puoi chiedere liberamente cosa togliere o cambiare.";
        }

        dishDetailsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDishDetailsModal() {
        if (!dishDetailsModal) return;
        dishDetailsModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Global click listener for dish details buttons & links
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.open-dish-details');
        if (trigger) {
            e.preventDefault();
            const id = trigger.getAttribute('data-id');
            openDishDetailsModal(id);
        }
    });

    if (dishDetailsModalClose) {
        dishDetailsModalClose.addEventListener('click', closeDishDetailsModal);
    }
    if (dishModalCloseBtn) {
        dishModalCloseBtn.addEventListener('click', closeDishDetailsModal);
    }
    if (dishDetailsModal) {
        dishDetailsModal.addEventListener('click', (e) => {
            if (e.target === dishDetailsModal) {
                closeDishDetailsModal();
            }
        });
    }

    // Order from Dish Details Modal
    if (dishModalOrderCtaBtn) {
        dishModalOrderCtaBtn.addEventListener('click', () => {
            const dishName = currentDetailDish ? currentDetailDish.title : '';
            closeDishDetailsModal();
            openOrderModal(dishName);
        });
    }

});
