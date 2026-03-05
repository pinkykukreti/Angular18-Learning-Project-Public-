import { Component } from '@angular/core';

@Component({
  selector: 'app-css-sass-qa',
  standalone: true,
  imports: [],
  templateUrl: './css-sass-qa.component.html',
  styleUrl: './css-sass-qa.component.css'
})
export class CssSassQaComponent {
  selectedIndex: number | null = null;
qaList = [
  {
    category: 'CSS',
    question: 'What is CSS?',
    answer: `CSS (Cascading Style Sheets) is used to style and layout web pages, for example to change colors, fonts, spacing, and positioning.`
  },
  {
    category: 'CSS',
    question: 'What are the types of CSS?',
    answer: `There are three types of CSS: Inline CSS, Internal CSS, and External CSS.`
  },
  {
    category: 'CSS',
    question: 'What is the CSS box model?',
    answer: `The CSS box model consists of content, padding, border, and margin which together define the size and spacing of elements.`
  },
  {
    category: 'CSS',
    question: 'What is specificity in CSS?',
    answer: `Specificity determines which CSS rule is applied when multiple rules target the same element. Priority: inline > id > class > element.`
  },
  {
    category: 'CSS',
    question: 'What is a class selector?',
    answer: `A class selector is used to target elements using the class attribute.`
  },
  {
    category: 'CSS',
    question: 'What is an id selector?',
    answer: `An id selector is used to target a unique element using the id attribute.`
  },
  {
    category: 'CSS',
    question: 'What is display property?',
    answer: `The display property specifies how an element is displayed such as block, inline, inline-block, none, and flex.`
  },
  {
    category: 'CSS',
    question: 'What is flexbox?',
    answer: `Flexbox is a one-dimensional layout system used to align and distribute space among items in a container.`
  },
  {
    category: 'CSS',
    question: 'What is CSS Grid?',
    answer: `CSS Grid is a two-dimensional layout system used to design rows and columns.`
  },
  {
    category: 'CSS',
    question: 'What is position property?',
    answer: `The position property defines how an element is positioned: static, relative, absolute, fixed, or sticky.`
  },
  {
    category: 'CSS',
    question: 'What is z-index?',
    answer: `z-index controls the vertical stacking order of positioned elements. Higher value elements appear on top.`
  },
  {
    category: 'CSS',
    question: 'What is overflow property?',
    answer: `Overflow controls what happens when content exceeds container size. Values include hidden, scroll, auto, and visible.`
  },
  {
    category: 'CSS',
    question: 'What is opacity?',
    answer: `Opacity controls the transparency of an element with values from 0 to 1.`
  },
  {
    category: 'CSS',
    question: 'What are media queries?',
    answer: `Media queries allow CSS to be applied based on device screen size or resolution.`
  },
  {
    category: 'CSS',
    question: 'What is responsive design?',
    answer: `Responsive design ensures a webpage adapts to different screen sizes and devices.`
  },
  {
    category: 'CSS',
    question: 'What is a pseudo-class?',
    answer: `A pseudo-class defines a special state of an element such as :hover, :focus, or :active.`
  },
  {
    category: 'CSS',
    question: 'What is a pseudo-element?',
    answer: `A pseudo-element styles specific parts of an element such as ::before and ::after.`
  },
  {
    category: 'CSS',
    question: 'What is shorthand property?',
    answer: `A shorthand property combines multiple CSS properties into one declaration, for example margin or padding.`
  },
  {
    category: 'CSS',
    question: 'What is transition?',
    answer: `Transition allows smooth change of CSS properties over a specified duration.`
  },
  {
    category: 'CSS',
    question: 'What is animation?',
    answer: `Animation allows elements to change styles using keyframes over time.`
  },
  {
    category: 'CSS',
    question: 'What is visibility property?',
    answer: `Visibility controls whether an element is visible or hidden without affecting layout.`
  },
  {
    category: 'CSS',
    question: 'What is float?',
    answer: `Float positions an element to the left or right of its container.`
  },
  {
    category: 'CSS',
    question: 'What is clear?',
    answer: `Clear specifies which sides of floating elements are not allowed to float.`
  },
  {
    category: 'CSS',
    question: 'What is important rule?',
    answer: `!important overrides all other CSS rules and should be used carefully.`
  },
  {
    category: 'CSS',
    question: 'What is inheritance?',
    answer: `Inheritance allows child elements to receive certain styles from their parent elements.`
  },
  {
    category: 'CSS',
    question: 'What is object-fit?',
    answer: `Object-fit controls how images and videos fit within their containers.`
  },
  {
    category: 'CSS',
    question: 'What is calc() function?',
    answer: `calc() allows dynamic calculations for CSS values like width and height.`
  },
  {
    category: 'SASS',
    question: 'What is SASS?',
    answer: `SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds features like variables, nesting, and mixins.`
  },
  {
    category: 'SASS',
    question: 'What are variables in SASS?',
    answer: `Variables store reusable values such as colors, font sizes, and spacing.`
  },
  {
    category: 'SASS',
    question: 'What is nesting in SASS?',
    answer: `Nesting allows CSS selectors to be written inside one another for better readability.`
  },
  {
    category: 'SASS',
    question: 'What are mixins?',
    answer: `Mixins are reusable blocks of CSS code that can be included in multiple selectors.`
  },
  {
    category: 'SASS',
    question: 'What is @include?',
    answer: `@include is used to apply a mixin to a selector.`
  },
  {
    category: 'SASS',
    question: 'What are partials?',
    answer: `Partials are small SASS files that are imported into other files for modular styling.`
  },
  {
    category: 'SASS',
    question: 'What is @extend?',
    answer: `@extend allows a selector to inherit styles from another selector.`
  },
  {
    category: 'SASS',
    question: 'What are functions in SASS?',
    answer: `Functions return computed values that can be used in stylesheets.`
  },
  {
    category: 'SASS',
    question: 'Difference between SASS and SCSS?',
    answer: `SASS uses indentation syntax while SCSS uses CSS-like syntax with curly braces and semicolons.`
  },
  {
    category: 'SASS',
    question: 'What is @use in SASS?',
    answer: `@use loads another SASS file and makes its members available with a namespace.`
  },
  {
    category: 'SASS',
    question: 'What is @forward?',
    answer: `@forward shares variables and mixins from one file to another.`
  },
  {
    category: 'SASS',
    question: 'What is a placeholder selector?',
    answer: `Placeholder selectors use % and are meant to be extended but not output directly to CSS.`
  },
  {
    category: 'SASS',
    question: 'What is compilation in SASS?',
    answer: `Compilation converts SASS or SCSS files into standard CSS files.`
  },
  {
    category: 'SASS',
    question: 'What is map in SASS?',
    answer: `A map stores key-value pairs and is used for managing sets of values like theme colors.`
  },
  {
    category: 'SASS',
    question: 'What is control directive?',
    answer: `Control directives like @if, @for, and @each add logic and loops to stylesheets.`
  }
];


  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}






