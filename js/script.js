/**
 * SAMRIDDHI MISHRA — PORTFOLIO SCRIPT
 * Vanilla JavaScript (100% Offline & file:// compatible)
 * Strictly zero dependencies, zero fetch, zero build steps.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initProjectFiltering();
    initGalleryModal();
    initContactForm();
    initEasterEgg();
    initScrollEffects();
  });

  /* ==========================================================================
     1. NAVIGATION (Mobile Hamburger & Active Link Management)
     ========================================================================== */
  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('is-active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('is-active')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
        }
      });

      // Close menu on link click (useful on mobile)
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
        });
      });
    }

    // Set active link according to current URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ==========================================================================
     2. PROJECT FILTERING (projects.html)
     ========================================================================== */
  function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Update active filter button
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const selectedCategory = btn.getAttribute('data-filter').toLowerCase().trim();

        projectCards.forEach(function (card) {
          const cardCategories = (card.getAttribute('data-category') || '')
            .toLowerCase()
            .split(',')
            .map(function (c) { return c.trim(); });

          const isMatch = selectedCategory === 'all' || cardCategories.includes(selectedCategory);

          if (isMatch) {
            card.classList.remove('is-hidden');
            card.classList.remove('fade-in');
            // Trigger reflow to restart animation
            void card.offsetWidth;
            card.classList.add('fade-in');
          } else {
            card.classList.add('is-hidden');
            card.classList.remove('fade-in');
          }
        });
      });
    });
  }

  /* ==========================================================================
     3. GALLERY MODAL (gallery.html)
     ========================================================================== */
  function initGalleryModal() {
    const modalBackdrop = document.querySelector('#gallery-modal');
    if (!modalBackdrop) return;

    const modalCloseBtn = modalBackdrop.querySelector('.modal-close-btn');
    const modalImg = modalBackdrop.querySelector('#modal-img');
    const modalTitle = modalBackdrop.querySelector('#modal-title');
    const modalDesc = modalBackdrop.querySelector('#modal-desc');
    const modalTech = modalBackdrop.querySelector('#modal-tech');
    const galleryItems = document.querySelectorAll('.gallery-item');

    let lastFocusedElement = null;

    function openModal(item) {
      lastFocusedElement = document.activeElement;

      const imgSrc = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      const tech = item.getAttribute('data-tech');

      if (modalImg) modalImg.src = imgSrc;
      if (modalImg) modalImg.alt = title;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalTech) modalTech.textContent = tech || '';

      modalBackdrop.classList.add('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeModal() {
      modalBackdrop.classList.remove('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        openModal(item);
      });

      // Keyboard accessibility (Enter/Space on card)
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(item);
        }
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    // Close on clicking backdrop outside modal card
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     4. CONTACT FORM VALIDATION (contact.html)
     ========================================================================== */
  function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const messageInput = form.querySelector('#message');
    const successBanner = document.querySelector('#form-success');

    function showError(input, errorElementId, message) {
      const group = input.closest('.form-group');
      const errorEl = document.querySelector('#' + errorElementId);
      if (group) group.classList.add('has-error');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      }
    }

    function clearError(input, errorElementId) {
      const group = input.closest('.form-group');
      const errorEl = document.querySelector('#' + errorElementId);
      if (group) group.classList.remove('has-error');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }
    }

    // Real-time cleanup as user types
    [
      { input: nameInput, id: 'name-error' },
      { input: emailInput, id: 'email-error' },
      { input: subjectInput, id: 'subject-error' },
      { input: messageInput, id: 'message-error' }
    ].forEach(function (item) {
      if (item.input) {
        item.input.addEventListener('input', function () {
          clearError(item.input, item.id);
        });
      }
    });

    function isValidEmail(val) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(val).toLowerCase());
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'name-error', 'Please let me know your name! ♡');
        hasError = true;
      } else {
        clearError(nameInput, 'name-error');
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        showError(emailInput, 'email-error', 'Please enter your email so I can write back!');
        hasError = true;
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'email-error', 'Please enter a valid email format (e.g., name@domain.com)');
        hasError = true;
      } else {
        clearError(emailInput, 'email-error');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'subject-error', 'Please add a brief topic or subject!');
        hasError = true;
      } else {
        clearError(subjectInput, 'subject-error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        showError(messageInput, 'message-error', 'Please write a message! I love hearing project ideas.');
        hasError = true;
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'message-error', 'Your message is a little short (at least 10 characters).');
        hasError = true;
      } else {
        clearError(messageInput, 'message-error');
      }

      if (!hasError) {
        // Display cute frontend success feedback
        form.style.display = 'none';
        if (successBanner) {
          successBanner.classList.add('is-visible');
        }
      }
    });
  }

  /* ==========================================================================
     5. EASTER EGG (Click tiny heart 5 times)
     ========================================================================== */
  function initEasterEgg() {
    const easterEggBtns = document.querySelectorAll('.easter-egg-btn');
    const toast = document.querySelector('#easter-egg-toast');
    let clickCount = 0;
    let toastTimeout = null;

    easterEggBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        clickCount++;

        // Tiny bounce scale
        btn.style.transform = 'scale(1.4) rotate(' + (clickCount * 15) + 'deg)';
        setTimeout(function () {
          btn.style.transform = '';
        }, 200);

        if (clickCount >= 5) {
          clickCount = 0;
          if (toast) {
            toast.classList.add('is-active');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(function () {
              toast.classList.remove('is-active');
            }, 5000);
          }
        }
      });
    });
  }

  /* ==========================================================================
     6. SCROLL EFFECTS
     ========================================================================== */
  function initScrollEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

})();
