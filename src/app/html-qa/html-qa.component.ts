import { Component } from '@angular/core';

@Component({
  selector: 'app-html-qa',
  standalone: true,
  imports: [],
  templateUrl: './html-qa.component.html',
  styleUrl: './html-qa.component.css'
})
export class HtmlQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'HTML',
      question: 'What is HTML?',
      answer: `HTML (HyperText Markup Language) is used to create the structure of web pages using elements like headings, paragraphs, images, links, and forms.`
    },
    {
      category: 'HTML',
      question: 'What are HTML tags?',
      answer: `Tags are keywords enclosed in angle brackets < > that define elements in HTML.
              Example: <p>, <div>, <h1>.`
    },
    {
      category: 'HTML',
      question: 'Difference between HTML and HTML5?',
      answer: `HTML5 supports audio, video, semantic tags, and local storage.`
    },
    {
      category: 'HTML',
      question: 'What is an element?',
      answer: `An element consists of opening tag, content, and closing tag.`
    },
    {
      category: 'HTML',
      question: 'What is the use of <!DOCTYPE html>?',
      answer: `It tells the browser that the document is HTML5.`
    },
    {
      category: 'HTML',
      question: 'What are semantic tags?',
      answer: `Tags that describe meaning clearly like <header>, <footer>, <article>.`
    },
    {
      category: 'HTML',
      question: 'Difference between <div> and <span>?',
      answer: `div is block-level, span is inline.`
    },
    {
      category: 'HTML',
      question: 'What are attributes?',
      answer: `They provide extra information about elements.`
    },
    {
      category: 'HTML',
      question: 'What is id attribute?',
      answer: `Used to uniquely identify an element.`
    },
    {
      category: 'HTML',
      question: 'What is class attribute?',
      answer: `Used to group multiple elements.`
    },
    {
      category: 'HTML',
      question: 'What is an anchor tag?',
      answer: `<a> tag is used to create links.`
    },
    {
      category: 'HTML',
      question: 'What is image tag?',
      answer: `<img> is used to display images.`
    },
    {
      category: 'HTML',
      question: 'What is alt attribute?',
      answer: `Shows text if image not loaded and helps screen readers.`
    },
    {
      category: 'HTML',
      question: 'What are lists in HTML?',
      answer: `<ul>, <ol>, <dl> are list types.`
    },
    {
      category: 'HTML',
      question: 'What is a table?',
      answer: `Used to display data in rows and columns.`
    },
    {
      category: 'HTML',
      question: 'What are forms?',
      answer: `Used to collect user input.`
    },
    {
      category: 'HTML',
      question: 'What is <input> tag?',
      answer: `Used to accept user data.`
    },
    {
      category: 'HTML',
      question: 'Difference between GET and POST?',
      answer: `GET sends data in URL, POST sends in body.`
    },
    {
      category: 'HTML',
      question: 'What is iframe?',
      answer: `Embeds another webpage inside current page.`
    },
    {
      category: 'HTML',
      question: 'What are block-level elements?',
      answer: `Elements that take full width (div, p, h1).`
    },
    {
      category: 'HTML',
      question: 'What are inline elements?',
      answer: `Elements that take required width (span, a, img).`
    },
    {
      category: 'HTML',
      question: 'What is meta tag?',
      answer: `Provides metadata like charset and viewport.`
    },
    {
      category: 'HTML',
      question: 'What is viewport?',
      answer: `Controls layout on mobile devices.`
    },
    {
      category: 'HTML',
      question: 'What is localStorage?',
      answer: `Stores data permanently in browser.`
    },
    {
      category: 'HTML',
      question: 'What is sessionStorage?',
      answer: `Stores data for one session only.`
    },
    {
      category: 'HTML',
      question: 'What is canvas?',
      answer: `Used to draw graphics with JavaScript.`
    },
    {
      category: 'HTML',
      question: 'What is SVG?',
      answer: `Scalable Vector Graphics for vector images.`
    },
    {
      category: 'HTML',
      question: 'What is accessibility?',
      answer: `Making website usable for disabled users.`
    },
    {
      category: 'HTML',
      question: 'What is aria attribute?',
      answer: `Improves accessibility for screen readers.`
    },
    {
      category: 'HTML',
      question: 'Difference between <b> and <strong>?',
      answer: `b is style, strong is semantic importance.`
    },
    {
      category: 'HTML',
      question: 'Difference between <i> and <em>?',
      answer: `i is style, em is semantic emphasis.`
    },
    {
      category: 'HTML',
      question: 'What is <br> tag?',
      answer: `Creates line break.`
    },
    {
      category: 'HTML',
      question: 'What is <hr> tag?',
      answer: `Creates horizontal line.`
    },
    {
      category: 'HTML',
      question: 'What is HTML validator?',
      answer: `Tool to check HTML code errors.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}





