# Frontend Mentor - Pricing Component Solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Frontend Mentor - Pricing Component Solution](#frontend-mentor---pricing-component-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
      - [Custom Toggle Switch](#custom-toggle-switch)
      - [Responsive Card Layout](#responsive-card-layout)
      - [Dynamic Price Switching](#dynamic-price-switching)
      - [Interactive Button States](#interactive-button-states)
    - [Continued Development](#continued-development)
  - [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle to switch between monthly and annual pricing options
- See hover states for all interactive elements on the page
- Calculate the correct price based on the selected billing frequency

### Screenshot

![Pricing Component Screenshot](./Frontend%20Mentor%20|%20Browser%20extensions%20manager%20UI.png)

### Links

- Solution URL: [Add your solution URL here](https://github.com/rllz0/browser-extensions-manager-ui-main.git)
- Live Site URL: [Add your live site URL here](https://rllz0.github.io/browser-extensions-manager-ui-main/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript for toggle functionality
- Mobile-responsive design
- Custom toggle switch component
- Interactive button states with hover effects
- Linear gradients for background elements

### What I Learned

This project provided valuable experience in several areas:

#### Custom Toggle Switch

Creating a custom toggle switch with smooth transitions and hover effects:

```css
#cb-toggle {
  opacity: 0;
  position: absolute;
}

.toggle {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 32px;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle:hover {
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  opacity: 0.8;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

#cb-toggle:checked+.toggle::after {
  transform: translateX(28px);
}
```

#### Responsive Card Layout

Implementing a responsive pricing card layout that adapts to different screen sizes:

```css
.card-contaniner {
  max-width: 1100px;
  margin: 0 auto 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
}

@media (max-width: 1023px) and (min-width: 376px) {
  .card-contaniner {
    flex-direction: column;
    gap: 2rem;
  }

  .basic,
  .professional,
  .master {
    width: 100%;
  }

  .professional {
    transform: none;
  }
}
```

#### Dynamic Price Switching

Implementing JavaScript to dynamically switch between monthly and annual pricing:

```javascript
function updatePriceDisplay() {
  if (toggle.checked) {
    // Monthly pricing
    monthlyPrices.forEach(price => price.style.display = 'block');
    annuallyPrices.forEach(price => price.style.display = 'none');
  } else {
    // Annual pricing
    monthlyPrices.forEach(price => price.style.display = 'none');
    annuallyPrices.forEach(price => price.style.display = 'block');
  }
}
```

#### Interactive Button States

Creating interactive hover states for buttons that differ based on their parent card:

```javascript
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    if (this.parentElement.classList.contains('professional')) {
      this.style.border = '1px solid white';
      this.style.background = 'transparent';
      this.style.color = 'white';
    } else {
      this.style.border = '1px solid hsl(237, 63%, 64%)';
      this.style.background = 'transparent';
      this.style.color = 'hsl(237, 63%, 64%)';
    }
  });
  
  button.addEventListener('mouseleave', function() {
    if (this.parentElement.classList.contains('professional')) {
      this.style.border = 'none';
      this.style.background = 'white';
      this.style.color = 'hsl(237, 63%, 64%)';
    } else {
      this.style.border = 'none';
      this.style.background = 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))';
      this.style.color = 'white';
    }
  });
});
```

### Continued Development

Areas I want to focus on in future projects include:

- Improving accessibility features, particularly for the toggle switch
- Adding more advanced animations and transitions
- Implementing additional pricing tiers and features
- Adding a dark/light theme toggle
- Enhancing the mobile responsive design further
- Exploring CSS Grid for more complex layouts
- Using CSS variables for more consistent theming

## Author