import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-qa',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-qa.component.html',
  styleUrl: './bootstrap-qa.component.css'
})
export class BootstrapQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Bootstrap',
      question: 'What is Bootstrap?',
      answer: `Bootstrap is a free, open-source front-end framework used to create responsive and mobile-first websites using HTML, CSS, and JavaScript.`
    },
    {
      category: 'Bootstrap',
      question: 'What are the main features of Bootstrap?',
      answer: `Responsive grid system, Predefined CSS classes, Mobile-first design, Browser compatibility, Reusable UI components, JavaScript plugins (modal, tooltip, carousel, etc.)`

    },
    {
      category: 'Bootstrap',
      question: 'What is a Grid System in Bootstrap?',
      answer: `Bootstrap grid system divides the screen into 12 columns and helps in creating responsive layouts using rows and columns.`
    },
    {
      category: 'Bootstrap',
      question: 'What are containers in Bootstrap?',
      answer: `Containers are used to wrap site content.
        .container → fixed width,.container-fluid → full width`
    },
    {
      category: 'Bootstrap',
      question: 'What is Mobile-First approach?',
      answer: `Bootstrap first designs for mobile devices, then scales up for tablets and desktops using media queries.`
    },
    {
      category: 'Bootstrap',
      question: 'What are Bootstrap breakpoints?',
      answer: `Breakpoints define screen sizes for responsive design.
      Breakpoint	Class Prefix
      Extra small	.col-,
      Small	.col-sm-,
      Medium	.col-md-,
      Large	.col-lg-,
      Extra large	.col-xl-,
      XXL (v5)	.col-xxl-`
    },
    {
      category: 'Bootstrap',
      question: 'Difference between .container and .container-fluid?',
      answer: `.container → fixed width based on screen size, .container-fluid → always 100% width`
    },
    {
      category: 'Bootstrap',
      question: 'What are Bootstrap components?',
      answer: `Pre-built UI elements such as: Buttons, Cards, Navbar, Modal, Carousel, Dropdown, Alerts, Forms`
    },
    {
      category: 'Bootstrap',
      question: 'What is a Navbar?',
      answer: `Navbar is a responsive navigation header used to create menus and branding.`
    },
    {
      category: 'Bootstrap',
      question: 'What is a Modal?',
      answer: `Modal is a popup dialog box used for alerts, forms, or messages.`
    },
    {
      category: 'Bootstrap',
      question: 'What is a Card in Bootstrap?',
      answer: `Card is a flexible content container with header, body, footer, image, etc.`
    },
    {
      category: 'Bootstrap',
      question: 'What is Flexbox in Bootstrap?',
      answer: `Bootstrap uses CSS Flexbox for layout and alignment with utility classes like:- d-flex, justify-content-center, align-items-center`
    },
    {
      category: 'Bootstrap',
      question: 'What are Utility classes?',
      answer: `Small helper classes for spacing, colors, alignment, display, etc. Example: mt-3, p-2, text-center, bg-primary`
    },
    {
      category: 'Bootstrap',
      question: 'What is Bootstrap CDN?',
      answer: `CDN (Content Delivery Network) is used to load Bootstrap files from the internet instead of local files.`
    },
    {
      category: 'Bootstrap',
      question: 'What is responsive design?',
      answer: `Design that adapts to different screen sizes (mobile, tablet, desktop).`
    },
    {
      category: 'Bootstrap',
      question: 'What is a Carousel?',
      answer: `Carousel is a slideshow component for images or content.`
    },
    {
      category: 'Bootstrap',
      question: 'What are forms in Bootstrap?',
      answer: `Bootstrap provides classes for styling forms like:-.form-control,.form-check,.input-group`
    },
    {
      category: 'Bootstrap',
      question: 'What is the use of col-* classes?',
      answer: `They define column width for different screen sizes. Example - <div class="col-sm-6 col-md-4 col-lg-3"></div>`
    },
    {
      category: 'Bootstrap',
      question: 'What is the difference between row and col?',
      answer: `row → wrapper for columns. col → actual content column`
    },
    {
      category: 'Bootstrap',
      question: 'What is d-none d-md-block?',
      answer: `Hides element on small screens and shows it on medium and larger screens.`
    },
    {
      category: 'Bootstrap',
      question: 'How do you customize Bootstrap?',
      answer: `Override CSS, Use custom SCSS variables, Use utility classes`
    },
    {
      category: 'Bootstrap',
      question: 'What is the use of z-index in Bootstrap?',
      answer: `Controls overlapping elements like modals, dropdowns, tooltips.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}




