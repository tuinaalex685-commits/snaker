// --- 1. BASE DE DONNÉES PRODUITS (Prêt pour Firebase) ---
const EUR_TO_FCFA = 655.957;
const formatPrice = (priceEur) => {
    const priceFcfa = Math.round(priceEur * EUR_TO_FCFA);
    // Format français avec séparateur de milliers
    return new Intl.NumberFormat('fr-FR').format(priceFcfa) + ' FCFA';
};

const products = [
    {
        id: "aj1-chicago",
        brand: "Nike / Jordan",
        model: "Air Jordan 1 Retro High OG",
        name: "Chicago",
        category: "Premium",
        price: 189,
        available: true,
        sizes: [40, 41, 42, 43, 44],
        description: "L'icône absolue. Le modèle historique qui a tout commencé, dans son coloris Chicago mythique. Une sneaker qui transcende le sport pour devenir un symbole culturel mondial.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "dunk-panda",
        brand: "Nike",
        model: "Dunk Low Retro",
        name: "White Black",
        category: "Standard",
        price: 129,
        available: true,
        sizes: [39, 40, 41, 42, 43],
        description: "La silhouette incontournable et polyvalente pour un style quotidien impeccable. Le Dunk Low Retro revisite les codes du basketball des années 80 avec une élégance moderne.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "af1-07",
        brand: "Nike",
        model: "Air Force 1 '07",
        name: "White",
        category: "Standard",
        price: 119,
        available: true,
        sizes: [40, 41, 42, 43, 44, 45],
        description: "Le grand classique indémodable, parfait pour accompagner toutes vos tenues. Plus de 40 ans d'histoire condensés dans une silhouette épurée qui ne vieillit jamais.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "samba-og",
        brand: "Adidas",
        model: "Samba OG",
        name: "Cloud White Core Black",
        category: "Légende",
        price: 120,
        available: true,
        sizes: [40, 41, 42],
        description: "Héritage footballistique et icône de la culture urbaine. La Samba fait son grand retour et s'impose comme le modèle phare de la culture streetwear contemporaine.",
        isNew: true,
        image: "https://images.unsplash.com/photo-1716838654-11379820804a?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "campus-00s",
        brand: "Adidas",
        model: "Campus 00s",
        name: "Core Black",
        category: "Standard",
        price: 110,
        available: true,
        sizes: [41, 42, 43, 44],
        description: "Volume XXL et vibe skate des années 2000. Le Campus 00s offre un confort absolu et un style décontracté qui correspond parfaitement à la culture urbaine actuelle.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "nb-9060",
        brand: "New Balance",
        model: "9060",
        name: "Rain Cloud",
        category: "Premium",
        price: 180,
        available: true,
        sizes: [40, 42, 43],
        description: "Fusion entre l'héritage running 99X et une esthétique futuriste Y2K. La 9060 repousse les limites du design avec ses matières superposées et sa semelle sculptée.",
        isNew: true,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "nb-2002r",
        brand: "New Balance",
        model: "2002R",
        name: "Protection Pack",
        category: "Premium",
        price: 150,
        available: true,
        sizes: [41, 42, 44],
        description: "Matériaux déstructurés et confort exceptionnel grâce à l'amorti N-ergy. La 2002R est la rencontre parfaite entre performance technique et esthétique premium.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "asics-kayano",
        brand: "ASICS",
        model: "GEL-Kayano 14",
        name: "White Midnight",
        category: "Premium",
        price: 170,
        available: true,
        sizes: [40, 41, 42, 43],
        description: "Le confort technique japonais dans une silhouette rétro-running très convoitée. La GEL-Kayano 14 est devenue un must-have pour les amateurs de sneakers lifestyle pointus.",
        isNew: true,
        image: "https://images.unsplash.com/photo-1556906781-9a412961a2bd?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "salomon-xt6",
        brand: "Salomon",
        model: "XT-6",
        name: "Black Magnet",
        category: "Premium",
        price: 180,
        available: true,
        sizes: [42, 43, 44],
        description: "Performance trail reconnue, désormais icône du techwear urbain. La XT-6 est le choix des connaisseurs qui veulent allier fonctionnalité extrême et esthétique avant-gardiste.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "converse-70",
        brand: "Converse",
        model: "Chuck 70",
        name: "Vintage Canvas High",
        category: "Légende",
        price: 100,
        available: true,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        description: "L'originale, améliorée. Toile premium, rembourrage OrthoLite et semelle vintage pour un confort supérieur. Le Chuck 70 est l'expression la plus pure de l'authenticité.",
        isNew: false,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop"
    }
];

// État global
let cart = [];
let currentProduct = null;
let currentOrderContext = null; // { product, size, quantity }

// --- 2. GESTION DU RENDU DES PRODUITS ---
document.addEventListener('DOMContentLoaded', () => {

    const createProductCardHTML = (product) => `
        <article class="product-card reveal-up">
            <div class="product-image">
                ${product.isNew ? '<span class="product-badge">NEW</span>' : ''}
                <img src="${product.image}" alt="${product.brand} ${product.model}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <span class="product-model">${product.model}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">${formatPrice(product.price)}</span>
            </div>
            <div class="product-footer">
                <button class="btn-product view-product-btn" data-id="${product.id}">
                    ${product.available ? 'Voir la paire' : 'Rupture de stock'}
                </button>
            </div>
        </article>
    `;

    const renderGrid = (gridId, items) => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = items.map(p => createProductCardHTML(p)).join('');
            attachProductClickEvents();
        }
    };

    renderGrid('collections-grid', products);
    renderGrid('products-grid', products.slice(0, 4));
    renderGrid('new-drops-grid', products.filter(p => p.isNew));

    // Filtres
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filterValue = e.target.getAttribute('data-filter');
            const filteredProducts = filterValue === 'all' 
                ? products 
                : products.filter(p => p.category === filterValue);
            
            renderGrid('collections-grid', filteredProducts);
            observeElements(); 
        });
    });

    // --- 3. MODALE PRODUIT ---
    const modal = document.getElementById('product-modal');
    const closeBtn = document.getElementById('close-modal');
    
    function attachProductClickEvents() {
        document.querySelectorAll('.view-product-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openProductModal(id);
            });
        });
    }

    function openProductModal(id) {
        currentProduct = products.find(p => p.id === id);
        if(!currentProduct) return;

        // Remplir toutes les infos du produit EXACT
        document.getElementById('modal-img').src = currentProduct.image;
        document.getElementById('modal-img').alt = `${currentProduct.brand} ${currentProduct.model} ${currentProduct.name}`;
        document.getElementById('modal-brand').textContent = currentProduct.brand;
        document.getElementById('modal-name').textContent = `${currentProduct.model} — ${currentProduct.name}`;
        document.getElementById('modal-price').textContent = formatPrice(currentProduct.price);
        document.getElementById('modal-desc').textContent = currentProduct.description;

        // Badge catégorie dans la modale
        let categoryBadge = document.getElementById('modal-category');
        if (!categoryBadge) {
            categoryBadge = document.createElement('span');
            categoryBadge.id = 'modal-category';
            categoryBadge.style.cssText = 'display:inline-block; padding:3px 10px; border-radius:20px; font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem;';
            document.getElementById('modal-brand').insertAdjacentElement('afterend', categoryBadge);
        }
        const catColors = { 'Premium': '#0033cc', 'Légende': '#ff6a00', 'Standard': '#00b894' };
        categoryBadge.textContent = currentProduct.category;
        categoryBadge.style.background = catColors[currentProduct.category] || '#666';
        categoryBadge.style.color = '#fff';

        // Disponibilité
        let availBadge = document.getElementById('modal-availability');
        if (!availBadge) {
            availBadge = document.createElement('p');
            availBadge.id = 'modal-availability';
            availBadge.style.cssText = 'font-size:0.85rem; margin-bottom:0.5rem;';
            document.getElementById('modal-price').insertAdjacentElement('afterend', availBadge);
        }
        availBadge.innerHTML = currentProduct.available
            ? '<span style="color:#00b894;">✓ En stock</span>'
            : '<span style="color:#d63031;">✗ Rupture de stock</span>';

        // Rendu des tailles dynamiques
        const sizesContainer = document.getElementById('modal-sizes');
        sizesContainer.innerHTML = currentProduct.sizes.map(size =>
            `<button class="size-btn">${size}</button>`
        ).join('');

        let selectedSize = currentProduct.sizes[0];
        const sizeBtns = sizesContainer.querySelectorAll('.size-btn');
        if(sizeBtns.length > 0) sizeBtns[0].classList.add('active');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                sizeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                selectedSize = parseInt(e.target.textContent);
                updateModalTotal();
            });
        });

        // Sélecteur de quantité
        let qtyWrapper = document.getElementById('modal-qty-wrapper');
        if (!qtyWrapper) {
            qtyWrapper = document.createElement('div');
            qtyWrapper.id = 'modal-qty-wrapper';
            qtyWrapper.style.cssText = 'display:flex; align-items:center; gap:0.75rem; margin-top:1rem;';
            qtyWrapper.innerHTML = `
                <span style="font-weight:600; font-size:0.9rem;">Quantité :</span>
                <button id="modal-qty-minus" style="width:32px;height:32px;border-radius:50%;border:2px solid var(--c-blue-primary);background:transparent;color:var(--c-blue-primary);font-size:1.1rem;cursor:pointer;font-weight:700;">-</button>
                <span id="modal-qty-val" style="font-weight:700; font-size:1.1rem; min-width:24px; text-align:center;">1</span>
                <button id="modal-qty-plus" style="width:32px;height:32px;border-radius:50%;border:2px solid var(--c-blue-primary);background:transparent;color:var(--c-blue-primary);font-size:1.1rem;cursor:pointer;font-weight:700;">+</button>
                <span id="modal-qty-total" style="margin-left:auto;font-weight:700;color:var(--c-blue-primary);"></span>
            `;
            sizesContainer.parentElement.insertAdjacentElement('afterend', qtyWrapper);
        }
        let selectedQty = 1;
        document.getElementById('modal-qty-val').textContent = 1;
        const updateModalTotal = () => {
            document.getElementById('modal-qty-total').textContent = formatPrice(currentProduct.price * selectedQty);
        };
        updateModalTotal();

        const qtyMinus = document.getElementById('modal-qty-minus').cloneNode(true);
        const qtyPlus  = document.getElementById('modal-qty-plus').cloneNode(true);
        document.getElementById('modal-qty-minus').replaceWith(qtyMinus);
        document.getElementById('modal-qty-plus').replaceWith(qtyPlus);
        qtyMinus.addEventListener('click', () => { if(selectedQty > 1) { selectedQty--; document.getElementById('modal-qty-val').textContent = selectedQty; updateModalTotal(); }});
        qtyPlus.addEventListener('click',  () => { selectedQty++; document.getElementById('modal-qty-val').textContent = selectedQty; updateModalTotal(); });

        // Bouton Ajouter au panier
        const addBtn = document.getElementById('modal-add-btn');
        const newAddBtn = addBtn.cloneNode(true);
        addBtn.parentNode.replaceChild(newAddBtn, addBtn);
        newAddBtn.addEventListener('click', () => {
            addToCart(currentProduct, selectedSize, selectedQty);
            modal.classList.remove('active');
            toggleCart();
        });

        // Bouton Commander direct
        const orderBtn = document.getElementById('modal-order-btn');
        const newOrderBtn = orderBtn.cloneNode(true);
        orderBtn.parentNode.replaceChild(newOrderBtn, orderBtn);
        newOrderBtn.addEventListener('click', () => {
            currentOrderContext = { ...currentProduct, size: selectedSize, quantity: selectedQty, isDirect: true };

            document.getElementById('order-summary-product').textContent = `${currentProduct.brand} — ${currentProduct.model} ${currentProduct.name}`;
            document.getElementById('order-summary-size').textContent = `Pointure: ${selectedSize} | Qté: ${selectedQty} | Catégorie: ${currentProduct.category}`;
            document.getElementById('order-summary-price').textContent = `Total: ${formatPrice(currentProduct.price * selectedQty)}`;

            modal.classList.remove('active');
            document.getElementById('cart-overlay').classList.add('active');
            document.getElementById('order-modal').classList.add('active');
        });

        modal.classList.add('active');
    }

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    // --- 4. PANIER ---
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const navActions = document.querySelector('.nav-actions');
    const cartBtn = navActions.querySelector('button[aria-label="Panier"]');
    
    const badge = document.createElement('span');
    badge.className = 'cart-badge';
    badge.id = 'cart-count';
    badge.textContent = '0';
    cartBtn.appendChild(badge);

    const toggleCart = () => {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    };

    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.getElementById('order-modal').classList.remove('active');
        document.getElementById('confirm-modal').classList.remove('active');
    });

    const addToCart = (product, size, quantity) => {
        const existingItem = cart.find(item => item.id === product.id && item.size === size);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...product, size, quantity });
        }
        updateCartUI();
    };

    const updateCartUI = () => {
        const container = document.getElementById('cart-items-container');
        const countEl = document.getElementById('cart-count');
        const totalEl = document.getElementById('cart-total-price');
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
        if(totalItems === 0) {
            countEl.style.display = 'none';
            container.innerHTML = '<p style="text-align:center; margin-top:2rem; color:var(--c-grey);">Votre panier est vide.</p>';
            totalEl.textContent = '0 FCFA';
            document.getElementById('checkout-btn').disabled = true;
            return;
        }
        countEl.style.display = 'flex';
        document.getElementById('checkout-btn').disabled = false;

        container.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.model}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.brand} ${item.model}</div>
                    <div style="font-size:0.8rem; color:var(--c-grey); margin-bottom:0.5rem;">Taille: ${item.size}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" data-action="minus" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" data-action="plus" data-index="${index}">+</button>
                        <button class="remove-item" data-index="${index}">Supprimer</button>
                    </div>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalEl.textContent = formatPrice(total);

        attachCartEvents();
    };

    const attachCartEvents = () => {
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                const action = e.target.getAttribute('data-action');
                if (action === 'plus') cart[index].quantity += 1;
                else if (action === 'minus') {
                    cart[index].quantity -= 1;
                    if (cart[index].quantity === 0) cart.splice(index, 1);
                }
                updateCartUI();
            });
        });
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                cart.splice(e.target.getAttribute('data-index'), 1);
                updateCartUI();
            });
        });
    };
    updateCartUI();

    // --- 5. FORMULAIRE DE COMMANDE (Prêt pour Firebase) ---
    const orderModal = document.getElementById('order-modal');
    const confirmModal = document.getElementById('confirm-modal');
    const orderForm = document.getElementById('order-form');

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if(cart.length === 0) return;
        currentOrderContext = { isDirect: false }; // Achat depuis le panier global
        
        // Résumé du panier
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        document.getElementById('order-summary-product').textContent = `Panier (${totalItems} article${totalItems > 1 ? 's' : ''})`;
        document.getElementById('order-summary-size').textContent = cart.map(i => `${i.model} (T${i.size})`).join(', ');
        document.getElementById('order-summary-price').textContent = `Total: ${formatPrice(totalPrice)}`;
        
        cartSidebar.classList.remove('active');
        cartOverlay.classList.add('active');
        orderModal.classList.add('active');
    });

    document.getElementById('close-order').addEventListener('click', () => {
        orderModal.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    document.getElementById('close-confirm').addEventListener('click', () => {
        confirmModal.classList.remove('active');
        cartOverlay.classList.remove('active');
    });

    // --- INITIALISATION SUPABASE ---
    const supabaseUrl = 'https://wcpiucjqaoxyfmucrsma.supabase.co';
    const supabaseKey = 'sb_publishable_BZ-SiuAqgLDj29FuIngQew_zYq0bLr2';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    // Fonction de soumission Firebase/Supabase
    const submitOrder = async (orderDetails) => {
        console.log("=== ENVOI VERS SUPABASE ===");
        
        const { data, error } = await supabase
            .from('orders')
            .insert([
                {
                    order_details: orderDetails,
                    status: 'pending',
                    created_at: new Date().toISOString()
                }
            ]);

        if (error) {
            console.error("Erreur Supabase:", error);
            throw new Error(error.message);
        }
        
        return data;
    };

    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btnSubmit = orderForm.querySelector('button[type="submit"]');
        btnSubmit.textContent = "Traitement...";
        btnSubmit.disabled = true;

        const formData = new FormData(orderForm);
        
        // Déterminer les items à commander (Direct ou Panier)
        let orderItems = [];

        if (currentOrderContext.isDirect) {
            orderItems = [{
                product_id: currentOrderContext.id,
                brand: currentOrderContext.brand,
                product_name: currentOrderContext.model + ' ' + currentOrderContext.name,
                category: currentOrderContext.category,
                size: currentOrderContext.size,
                quantity: currentOrderContext.quantity,
                unit_price: currentOrderContext.price * EUR_TO_FCFA,
                total: (currentOrderContext.price * currentOrderContext.quantity) * EUR_TO_FCFA
            }];
        } else {
            orderItems = cart.map(item => ({
                product_id: item.id,
                brand: item.brand,
                product_name: item.model + ' ' + item.name,
                category: item.category,
                size: item.size,
                quantity: item.quantity,
                unit_price: item.price * EUR_TO_FCFA,
                total: (item.price * item.quantity) * EUR_TO_FCFA
            }));
        }
        
        const orderDetails = {
            client: {
                nom: formData.get('lastname'),
                prenom: formData.get('firstname'),
                telephone: formData.get('phone'),
                whatsapp: formData.get('whatsapp'),
                email: formData.get('email'),
                ville: formData.get('city'),
                pays: formData.get('country')
            },
            livraison: {
                ville: formData.get('shipping-city'),
                adresse: formData.get('shipping-address'),
                informations_complementaires: "",
                mode_contact: formData.get('contact-method')
            },
            commande: orderItems
        };

        try {
            await submitOrder(orderDetails);
            
            // Succès
            orderModal.classList.remove('active');
            
            // Remplir la confirmation
            document.getElementById('confirm-name').textContent = orderDetails.client.prenom;
            document.getElementById('confirm-product').textContent = orderDetails.commande[0].product_name + (orderDetails.commande.length > 1 ? ` et ${orderDetails.commande.length - 1} autre(s)` : '');
            document.getElementById('confirm-size').textContent = orderDetails.commande.map(i => i.size).join(', ');
            document.getElementById('confirm-qty').textContent = orderDetails.commande.reduce((s, i) => s + i.quantity, 0);
            
            const totalFCFA = orderDetails.commande.reduce((sum, item) => sum + item.total, 0);
            const totalStr = new Intl.NumberFormat('fr-FR').format(totalFCFA) + ' FCFA';
            document.getElementById('confirm-price').textContent = totalStr;
            
            // Configurer le lien WhatsApp
            const waNumber = "22657138126";
            const waMessage = `Bonjour, je viens d'effectuer une demande de commande sur votre site.\n\n*Client:* ${orderDetails.client.nom} ${orderDetails.client.prenom}\n*Produit:* ${orderDetails.commande[0].product_name}\n*Pointure:* ${orderDetails.commande[0].size}\n*Quantité:* ${orderDetails.commande[0].quantity}\n*Total:* ${totalStr}\n*Livraison:* ${orderDetails.livraison.ville}\n\nPouvez-vous me confirmer la disponibilité ?`;
            document.getElementById('whatsapp-continue-btn').href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
            
            confirmModal.classList.add('active');
            
            if (!currentOrderContext.isDirect) {
                cart = [];
                updateCartUI();
            }
            orderForm.reset();

        } catch (error) {
            alert("Erreur lors de l'enregistrement de la commande. Veuillez vérifier votre connexion ou réessayer plus tard.\n\nDétails: " + error.message);
        } finally {
            btnSubmit.textContent = "Confirmer la commande";
            btnSubmit.disabled = false;
        }
    });


    // --- 6. GESTION NAVIGATION ET BOUTONS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const heroCtas = document.querySelectorAll('.hero-actions .btn');
    if(heroCtas.length >= 2) {
        heroCtas[0].addEventListener('click', () => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' }));
        heroCtas[1].addEventListener('click', () => document.querySelector('#new-drops-grid').scrollIntoView({ behavior: 'smooth' }));
    }

    const editionBtn = document.querySelector('.section-edition .btn');
    if(editionBtn) {
        editionBtn.addEventListener('click', () => openProductModal('aj1-chicago')); 
    }

    const finalCta = document.querySelector('.section-cta .btn');
    if(finalCta) finalCta.addEventListener('click', () => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' }));

    const searchBtn = navActions.querySelector('button[aria-label="Recherche"]');
    if(searchBtn) {
        searchBtn.addEventListener('click', () => {
            document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- 7. ANIMATIONS OBSERVER ---
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    const observeElements = () => {
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-text').forEach(el => {
            el.classList.remove('is-visible');
            observer.observe(el);
        });
    };
    observeElements();

    // --- 9. MENU HAMBURGER MOBILE ---
    const hamburgerBtn = document.getElementById('nav-hamburger');
    const mobileMenu   = document.getElementById('nav-mobile-menu');
    const mobileClose  = document.getElementById('nav-mobile-close');

    // Afficher le hamburger seulement sur mobile/tablette
    const showHamburger = () => {
        if (window.innerWidth <= 992) {
            hamburgerBtn.style.display = 'flex';
        } else {
            hamburgerBtn.style.display = 'none';
            mobileMenu.classList.remove('open');
        }
    };
    showHamburger();
    window.addEventListener('resize', showHamburger);

    hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

    // Fermer le menu quand on clique un lien
    document.querySelectorAll('.nav-mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
});

