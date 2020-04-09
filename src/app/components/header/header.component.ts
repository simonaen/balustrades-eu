import {AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {faCalendarAlt, faAward, faCheckCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  languages = [
    {value: 1, name: 'Български'},
    {value: 2, name: 'English'},
    {value: 3, name: 'Français'},
    {value: 4, name: 'Русский'},
    {value: 5, name: 'Deutsch'},
    {value: 6, name: 'Italiano'}];

  public faIcons = [faCalendarAlt, faAward, faCheckCircle];
  public titles = ['Посрещнати срокове', 'Гарантирано качество', 'Конкурентни цени'];
  public paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  ];

  @ViewChild('container', {static: true})
  container: ElementRef;

  @ViewChildren('iconBoxes')
  iconBoxes: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        setTimeout(() => {
          this.container.nativeElement.classList.add('animated', 'fadeInDown');
          this.container.nativeElement.classList.add('show');
        }, 70);

      }
    }, { threshold: [0.11] });
    setTimeout(() => {
      observer.observe(this.container.nativeElement);
    },  400);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting === true) {
              this.renderer.addClass(entry.target, 'animated');
              this.renderer.addClass(entry.target, 'slideInUp');
              this.renderer.addClass(entry.target, 'show');
          }
        });
    }, {threshold: [0.05]});

    this.iconBoxes.forEach((item, index) => {
      setTimeout(() => {
        observer.observe(item.nativeElement);
      }, 400 * index);
    });
  }

}
