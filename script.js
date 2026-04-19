document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mangoForm = document.getElementById('mangoForm');
    const formStatus = document.getElementById('form-status');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 253, 245, 0.95)';
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.background = 'rgba(255, 253, 245, 0.8)';
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Form Handling
    if (mangoForm) {
        mangoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = mangoForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            // Simulation of sending an email
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Success state
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
                submitBtn.style.background = '#1B5E20';
                
                formStatus.innerHTML = `
                    <div style="background: #E8F5E9; color: #1B5E20; padding: 15px; border-radius: 10px; margin-top: 20px; font-weight: 500;">
                        Success! Your inquiry has been sent to <strong>dealer@mangofarm.com</strong>. We will get back to you within 24 hours.
                    </div>
                `;

                // Reset after 5 seconds
                setTimeout(() => {
                    mangoForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    formStatus.innerHTML = '';
                }, 5000);
            }, 2000);
        });
    }

    // Scroll reveal animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.video-item, .contact-info, .contact-form-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Remove forced transition on scroll (let observer handle it)

    // ============================================
    // Variety Modal Popup
    // ============================================
    const modal = document.getElementById('varietyModal');
    const modalClose = document.getElementById('modalClose');
    const modalCta = document.getElementById('modalCta');
    const scrollingContent = document.querySelector('.scrolling-content');

    const imageMap = {
        'Alphonso': 'Alphonso.jpg',
        'Kesar': 'Kesar.jpg',
        'Banganapalle': 'Banganapalle.jpg'
    };

    function openModal(card) {
        const data = card.dataset;

        // Populate modal
        document.getElementById('modalName').textContent = data.name || '';
        document.getElementById('modalDescription').textContent = data.description || '';
        document.getElementById('modalOrigin').textContent = data.origin || '';
        document.getElementById('modalSeason').textContent = data.season || '';
        document.getElementById('modalTaste').textContent = data.taste || '';
        document.getElementById('modalTexture').textContent = data.texture || '';
        document.getElementById('modalAroma').textContent = data.aroma || '';
        document.getElementById('modalWeight').textContent = data.weight || '';

        // Handle Specialities List
        const specsList = document.getElementById('modalSpecialities');
        specsList.innerHTML = '';
        if (data.specialities) {
            const specs = data.specialities.split(';');
            specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec.trim();
                specsList.appendChild(li);
            });
        }

        // Set image
        const img = document.getElementById('modalImage');
        const cardImg = card.querySelector('img');
        img.src = imageMap[data.name] || (cardImg ? cardImg.src : '');
        img.alt = data.name || 'Mango Variety';

        // Pause scroll animation
        if (scrollingContent) {
            scrollingContent.style.animationPlayState = 'paused';
        }

        // Show modal
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
        }
        document.body.style.overflow = '';

        // Resume scroll animation
        if (scrollingContent) {
            scrollingContent.style.animationPlayState = 'running';
        }
    }

    // Click handlers on variety cards using Event Delegation
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.variety-card');
        if (card) {
            e.stopPropagation();
            openModal(card);
        }
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on overlay click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Close modal when CTA is clicked (navigates to contact)
    if (modalCta) {
        modalCta.addEventListener('click', () => {
            closeModal();
        });
    }
});
