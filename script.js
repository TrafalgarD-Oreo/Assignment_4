// document.addEventListener('DOMContentLoaded', () => {
    
//     // Global elements
//     const body = document.body;
//     const themeToggle = document.getElementById('theme-toggle');
    
//     // -----------------------------------------------------------------
//     // 1. Dark/Light Mode Logic (Includes OS Preference Check)
//     // -----------------------------------------------------------------
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//     // Set initial theme based on local storage or OS preference
//     if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
//         body.classList.remove('dark-mode');
//         body.classList.add('light-mode');
//     } else {
//         body.classList.add('dark-mode');
//         body.classList.remove('light-mode');
//     }

//     // Toggle logic on button click
//     themeToggle.addEventListener('click', () => {
//         const isDarkMode = body.classList.toggle('dark-mode');
//         body.classList.toggle('light-mode', !isDarkMode);

//         if (isDarkMode) {
//             localStorage.setItem('theme', 'dark');
//         } else {
//             localStorage.setItem('theme', 'light');
//         }
//     });


//     // -----------------------------------------------------------------
//     // 2. Portfolio Filtering Logic
//     // -----------------------------------------------------------------
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const galleryItems = document.querySelectorAll('.gallery-item');

//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const filterValue = button.getAttribute('data-filter');

//             // Update active state for buttons
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');

//             // Filter the gallery items
//             galleryItems.forEach(item => {
//                 const itemCategory = item.getAttribute('data-category');
                
//                 if (filterValue === 'all' || filterValue === itemCategory) {
//                     item.style.display = 'block'; // Show item
//                 } else {
//                     item.style.display = 'none'; // Hide item
//                 }
//             });
//         });
//     });


//     // -----------------------------------------------------------------
//     // 3. Video Lightbox Modal Logic (Creative Element)
//     // -----------------------------------------------------------------
//     const lightbox = document.getElementById('video-lightbox');
//     const closeBtn = document.querySelector('.close-btn');
//     const videoContainer = document.querySelector('.video-container');

//     // Open Lightbox on Gallery Item Click
//     galleryItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const videoUrl = item.getAttribute('data-video-url');
            
//             // Create the YouTube iframe
//             const iframe = document.createElement('iframe');
//             // Adding autoplay=1 to start playback immediately
//             iframe.setAttribute('src', videoUrl + "?autoplay=1&rel=0"); 
//             iframe.setAttribute('allow', 'autoplay; encrypted-media; gyroscope; picture-in-picture');
//             iframe.setAttribute('allowfullscreen', '');
            
//             videoContainer.innerHTML = ''; // Clear previous video
//             videoContainer.appendChild(iframe);

//             lightbox.style.display = 'block';
//         });
//     });

//     // Close Lightbox Function
//     const closeLightbox = () => {
//         lightbox.style.display = 'none';
//         // Stop the video playback by clearing the container
//         videoContainer.innerHTML = '';
//     };

//     closeBtn.addEventListener('click', closeLightbox); // X button
    
//     // Close when clicking outside the content area
//     lightbox.addEventListener('click', (e) => {
//         if (e.target === lightbox) {
//             closeLightbox();
//         }
//     });

//     // Close on ESC key press
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && lightbox.style.display === 'block') {
//             closeLightbox();
//         }
//     });


//     // -----------------------------------------------------------------
//     // 4. Service Calculator Logic (Enhanced Functionality)
//     // -----------------------------------------------------------------
//     const serviceType = document.getElementById('service-type');
//     const durationInput = document.getElementById('duration');
//     const revisionCount = document.getElementById('revision-count');
//     const basePriceElement = document.getElementById('base-price');
//     const totalCostElement = document.getElementById('total-cost');
    
//     const calculateEstimate = () => {
//         const baseRate = parseFloat(serviceType.value) || 0;
//         const duration = parseFloat(durationInput.value) || 1;
//         const revisions = parseInt(revisionCount.value);

//         if (baseRate === 0) {
//             basePriceElement.textContent = `Base Service Cost: $0`;
//             totalCostElement.innerHTML = `**Total Estimated Price: $0**`;
//             return;
//         }

//         // Calculation: (Rate per Service Unit * Duration) + (Revisions Premium)
//         let total = baseRate * duration;
        
//         // Add a premium for revisions beyond the first two
//         const REVISION_PREMIUM_PER_EXTRA = 50; 
//         const revisionCost = Math.max(0, revisions - 2) * REVISION_PREMIUM_PER_EXTRA; 
//         total += revisionCost;

//         basePriceElement.textContent = `Base Service Cost: $${(baseRate * duration).toFixed(0)}`;
//         totalCostElement.innerHTML = `**Total Estimated Price: $${total.toFixed(0)}**`;
//     };

//     // Attach event listeners for real-time calculation
//     serviceType.addEventListener('change', calculateEstimate);
//     durationInput.addEventListener('input', calculateEstimate);
//     revisionCount.addEventListener('input', calculateEstimate);
    
//     calculateEstimate(); // Initial calculation on load


//     // -----------------------------------------------------------------
//     // 5. Contact Form Validation (Enhanced Functionality)
//     // -----------------------------------------------------------------
//     const contactForm = document.getElementById('contact-form');
//     const formMessage = document.getElementById('form-message');
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const messageInput = document.getElementById('message');

//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         let isValid = true;
//         let errorMessage = '';

//         if (nameInput.value.trim() === '') {
//             isValid = false;
//             errorMessage = 'Your name is required.';
//         } else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
//             isValid = false;
//             errorMessage = 'Please enter a valid email address.';
//         } else if (messageInput.value.trim().length < 20) {
//             isValid = false;
//             errorMessage = 'Please provide more details (minimum 20 characters in the message).';
//         }

//         if (isValid) {
//             formMessage.textContent = 'Inquiry sent! We will contact you within 24 hours.';
//             formMessage.style.color = '#48BB78';
//             contactForm.reset();
//         } else {
//             formMessage.textContent = errorMessage;
//             formMessage.style.color = '#E53E3E';
//         }
//     });

//     // -----------------------------------------------------------------
//     // 6. Mobile Menu Toggle (Basic)
//     // -----------------------------------------------------------------
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', () => {
//         // Simple toggle for mobile navigation visibility
//         navLinks.style.width= '50%'
//         navLinks.style.height= '100vh'
//         navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
//         navLinks.style.gap='25px'
//         navLinks.style.fontSize="1.5rem"
//         navLinks.style.flexDirection = 'column';
//         navLinks.style.position = 'absolute';
//         navLinks.style.top = '70px';
//         navLinks.style.right = '0';
//         navLinks.style.backgroundColor = body.classList.contains('dark-mode') ? 'var(--color-card-dark)' : 'var(--color-card-dark)';
//         navLinks.style.padding = '20px';
//         navLinks.style.boxShadow = '0 10px 10px rgba(0, 0, 0, 0.2)';
//     });

//     // Close mobile menu when a link is clicked
//     navLinks.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//             if (window.innerWidth <= 768) {
//                 navLinks.style.display = 'none';
//             }
//         });
//     });

//     // Fix layout on resize (for mobile menu)
//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 768) {
//             navLinks.style.display = 'flex';
//             navLinks.style.flexDirection = 'row';
//             navLinks.style.position = 'static';
//             navLinks.style.boxShadow = 'none';
//         } else {
//             navLinks.style.display = 'none';
//             navLinks.style.flexDirection = 'column';
//         }
//     });


    
// });





// script.js
import { auth, db } from './firebase-config.js'; 
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    
    // Variable to track login status
    let currentUser = null;

    // --- 1. AUTHENTICATION LOGIC (Show Name / Logout) ---
    const authContainer = document.getElementById('auth-container');
    
    onAuthStateChanged(auth, (user) => {
        currentUser = user; // Update the tracking variable

        if (user) {
            // User Logged In
            const displayName = user.displayName || user.email.split('@')[0];
            authContainer.innerHTML = `
                <span class="user-greeting">Hi, ${displayName}</span>
                <button id="logout-btn" class="btn-logout">Logout</button>
            `;
            
            // Attach Logout functionality
            document.getElementById('logout-btn').addEventListener('click', () => {
                signOut(auth).then(() => {
                    alert("Logged out successfully");
                    window.location.reload();
                }).catch((error) => console.error("Logout Error", error));
            });
        } else {
            // User Logged Out
            authContainer.innerHTML = `<a href="login.html" class="nav-login-btn" style="color:inherit; text-decoration:none; font-weight:600;">Login</a>`;
        }
    });

    // --- 2. MOBILE MENU LOGIC (Working Hamburger) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggle the CSS class that makes it visible
            navLinks.classList.toggle('active-mobile-menu');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active-mobile-menu');
            });
        });
        
        // Clean up on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active-mobile-menu');
            }
        });
    }

    // --- 3. THEME TOGGLE ---
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode', !isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // --- 4. PORTFOLIO FILTER (FIXED) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Manage Active Class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Get Filter Value
            const filterValue = button.getAttribute('data-filter');

            // 3. Loop through items and show/hide
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block'; // Show
                    // Add a small fade-in animation effect if desired
                    item.style.opacity = '0';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none'; // Hide
                }
            });
        });
    });

    // --- 4. CONTACT FORM (Protected by Login) ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // --- SECURITY CHECK START ---
            if (!currentUser) {
                alert("You must be logged in to send a brief! Redirecting to login...");
                window.location.href = "login.html";
                return; // Stop the function here
            }
            // --- SECURITY CHECK END ---

            let isValid = true;
            if (nameInput.value.trim() === '') isValid = false;
            else if (!emailInput.value.includes('@')) isValid = false;
            
            if (isValid) {
                formMessage.textContent = 'Sending...';
                formMessage.style.color = '#FF7700';
                
                try {
                    await addDoc(collection(db, "inquiries"), {
                        uid: currentUser.uid, // Also store the User ID
                        name: nameInput.value.trim(),
                        email: emailInput.value.trim(),
                        message: messageInput.value.trim(),
                        timestamp: serverTimestamp()
                    });
                    formMessage.textContent = 'Inquiry sent successfully!';
                    formMessage.style.color = '#48BB78';
                    contactForm.reset();
                } catch (error) {
                    console.error("Error:", error);
                    formMessage.textContent = 'Submission failed. Try again.';
                    formMessage.style.color = '#E53E3E';
                }
            } else {
                formMessage.textContent = 'Please check your inputs.';
                formMessage.style.color = '#E53E3E';
            }
        });
    }

    // --- 5. CALCULATOR ---
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const service = parseFloat(document.getElementById('service-type').value) || 0;
            const duration = parseFloat(document.getElementById('duration').value) || 1;
            const revisions = parseInt(document.getElementById('revision-count').value) || 2;
            
            if (service === 0) return;
            
            let total = service * duration;
            if (revisions > 2) total += (revisions - 2) * 50;

            document.getElementById('base-price').textContent = `Base: $${(service * duration).toFixed(0)}`;
            document.getElementById('total-cost').textContent = `**Total: $${total.toFixed(0)}**`;
        });
    }

    // --- 6. VIDEO LIGHTBOX ---
    const lightbox = document.getElementById('video-lightbox');
    const videoContainer = document.querySelector('.video-container');
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-video-url');
            videoContainer.innerHTML = `<video src="${url}" controls autoplay style="width:100%"></video>`;
            lightbox.style.display = 'block';
        });
    });

    if (document.querySelector('.close-btn')) {
        document.querySelector('.close-btn').addEventListener('click', () => {
            lightbox.style.display = 'none';
            videoContainer.innerHTML = '';
        });
    }
});