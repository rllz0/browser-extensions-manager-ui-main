document.addEventListener('DOMContentLoaded', function() {
    const extensionsGrid = document.getElementById('extensions-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeToggle = document.querySelector('.theme-toggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    const logo = document.querySelector('.logo');
    
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
        moonIcon.classList.add('hidden'); 
        sunIcon.classList.remove('hidden'); 
    } else {
        document.body.classList.remove('dark-theme');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden'); 
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden'); 
        } else {
            moonIcon.classList.remove('hidden'); 
            sunIcon.classList.add('hidden'); 
        }
        localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active'); 
            const filterValue = this.getAttribute('data-filter');
            renderExtensions(filterValue);
        });
    });

    const extensionsData = [
        {
            "logo": "./assets/images/logo-devlens.svg",
            "name": "DevLens",
            "description": "Quickly inspect page layouts and visualize element boundaries.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-style-spy.svg",
            "name": "StyleSpy",
            "description": "Instantly analyze and copy CSS from any webpage element.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-speed-boost.svg",
            "name": "SpeedBoost",
            "description": "Optimizes browser resource usage to accelerate page loading.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-json-wizard.svg",
            "name": "JSONWizard",
            "description": "Formats, validates, and prettifies JSON responses in-browser.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-tab-master-pro.svg",
            "name": "TabMaster Pro",
            "description": "Organizes browser tabs into groups and sessions.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-viewport-buddy.svg",
            "name": "ViewportBuddy",
            "description": "Simulates various screen resolutions directly within the browser.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-markup-notes.svg",
            "name": "Markup Notes",
            "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-grid-guides.svg",
            "name": "GridGuides",
            "description": "Overlay customizable grids and alignment guides on any webpage.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-palette-picker.svg",
            "name": "Palette Picker",
            "description": "Instantly extracts color palettes from any webpage.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-link-checker.svg",
            "name": "LinkChecker",
            "description": "Scans and highlights broken links on any page.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-dom-snapshot.svg",
            "name": "DOM Snapshot",
            "description": "Capture and export DOM structures quickly.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-console-plus.svg",
            "name": "ConsolePlus",
            "description": "Enhanced developer console with advanced filtering and logging.",
            "isActive": true
        }
    ];
    
    function createExtensionCard(extension) {
        const card = document.createElement('div');
        card.className = 'extension-card';
        
        card.innerHTML = `
            <div class="extension-top">
                <div class="extension-icon ${extension.bgClass}">
                    <img src="${extension.logo}" alt="${extension.name} icon">
                </div>
                <div class="extension-info">
                    <h3 class="extension-name">${extension.name}</h3>
                    <p class="extension-description">${extension.description}</p>
                </div>
            </div>
            <div class="extension-bottom">
                <button class="remove-btn">Remove</button>
                <label class="toggle-switch">
                    <input type="checkbox" ${extension.isActive ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
        `;
        const toggleSwitch = card.querySelector('input[type="checkbox"]');
        toggleSwitch.addEventListener('change', function() {
            extension.isActive = this.checked;
        });
        
        const removeBtn = card.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            card.remove();
        });
        
        return card;
    }

    function renderExtensions(filter = 'all') {
        extensionsGrid.innerHTML = '';
        let filteredExtensions;
        
        switch(filter) {
            case 'active':
                filteredExtensions = extensionsData.filter(ext => ext.isActive);
                break;
            case 'inactive':
                filteredExtensions = extensionsData.filter(ext => !ext.isActive);
                break;
            default:
                filteredExtensions = extensionsData;
        }
        filteredExtensions.forEach(extension => {
            const card = createExtensionCard(extension);
            extensionsGrid.appendChild(card);
        });
    }

    renderExtensions();
    
  
    document.querySelector('[data-filter="all"]').classList.add('active');
});