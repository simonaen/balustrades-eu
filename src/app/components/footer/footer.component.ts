import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faPhoneAlt, faEnvelope, faGlobeEurope} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public faFacebook = faFacebookSquare;
  public icons = [faPhoneAlt, faEnvelope, faGlobeEurope];
  private executed = false;

  @ViewChild('container', {static: true})
  container: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true && this.executed === false) {
        setTimeout(() => {
          this.container.nativeElement.classList.add('animated', 'fadeInUp');
          this.container.nativeElement.classList.add('show');
          this.executed = true;
        }, 70);

      }
    }, { threshold: [0.11] });

    observer.observe(this.container.nativeElement);
  }

}
