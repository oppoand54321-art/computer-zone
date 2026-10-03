import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';

import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  @ViewChild('bgVideo')
  bgVideo?: ElementRef<HTMLVideoElement>;

  @ViewChild('botField')
  botField?: ElementRef<HTMLInputElement>;

  @ViewChild('botWalk')
  botWalk?: ElementRef<HTMLVideoElement>;

  botOpen = false;
  whatsappNumber = '923001234567';

  botMessages: { from: 'bot' | 'user'; text: string }[] = [
    { from: 'bot', text: 'Hello, how can I help you?' }
  ];


  /*
   * 15 IMAGES
   *
   * Put your images inside:
   * public/images/marquee/
   *
   * Names:
   * 01.jpg
   * 02.jpg
   * 03.jpg
   * ...
   * 15.jpg
   */
  marqueeImages = [
    '/images/marquee/01.jpg',
    '/images/marquee/02.jpg',
    '/images/marquee/03.jpg',
    '/images/marquee/04.jpg',
    '/images/marquee/05.jpg',
    '/images/marquee/06.jpg',
    '/images/marquee/07.jpg',
    '/images/marquee/08.jpg',
    '/images/marquee/09.jpg',
    '/images/marquee/10.jpg',
    '/images/marquee/11.jpg',
    '/images/marquee/12.jpg',
    '/images/marquee/13.jpg',
    '/images/marquee/14.jpg',
    '/images/marquee/15.jpg'
  ];


  /*
   * HOVER CARDS (front page)
   * tone-green / tone-purple / tone-orange / tone-blue
   * give each card its own light colour.
   */
  items = [

    {
      key: 'dell',
      number: '01',
      kicker: 'BRAND 01',
      title: 'DELL LAPTOPS',
      line1: 'LATITUDE, INSPIRON & XPS',
      line2: 'BUSINESS AND EVERYDAY PERFORMANCE',
      body:
        'Dell laptops for office work, study and creative tasks. From dependable Latitude business machines to slim XPS models and budget-friendly Inspiron and Vostro laptops.',
      features: [
        'Latitude',
        'Inspiron',
        'XPS',
        'Vostro'
      ],
      tone: 'tone-green'
    },

    {
      key: 'hp',
      number: '02',
      kicker: 'BRAND 02',
      title: 'HP LAPTOPS',
      line1: 'ELITEBOOK, PROBOOK & PAVILION',
      line2: 'RELIABLE WORK AND HOME LAPTOPS',
      body:
        'HP laptops built for long working days and busy homes. Premium EliteBook and ProBook business series, everyday Pavilion models and Victus laptops for gaming.',
      features: [
        'EliteBook',
        'ProBook',
        'Pavilion',
        'Victus'
      ],
      tone: 'tone-purple'
    },

    {
      key: 'lenovo',
      number: '03',
      kicker: 'BRAND 03',
      title: 'LENOVO LAPTOPS',
      line1: 'THINKPAD, IDEAPAD & LEGION',
      line2: 'TOUGH, SMART AND POWERFUL',
      body:
        'Lenovo laptops known for strong keyboards and solid build quality. ThinkPad for professionals, IdeaPad for students and families, and Legion for serious gaming.',
      features: [
        'ThinkPad',
        'IdeaPad',
        'Legion',
        'Yoga'
      ],
      tone: 'tone-orange'
    },

    {
      key: 'all',
      number: '04',
      kicker: 'BRAND 04',
      title: 'ALL LAPTOPS',
      line1: 'EVERY BRAND IN ONE PLACE',
      line2: 'BUSINESS, STUDENT AND GAMING',
      body:
        'Looking for something different? Browse laptops from other leading brands, ready-to-use machines for students and offices, and powerful options for gaming and design work.',
      features: [
        'Any Brand',
        'Business',
        'Student',
        'Gaming'
      ],
      tone: 'tone-blue'
    }

  ];


  /*
   * BRAND PAGES (4 pages)
   * Images go in: public/images/pages/
   * Names: dell-1.jpg, dell-2.jpg, dell-3.jpg, hp-1.jpg ... all-3.jpg
   * Edit the text below with your real models and specs.
   */
  servicePages = [

    {
      key: 'dell',
      kicker: 'BRAND 01',
      title: 'DELL LAPTOPS',
      headings: [
        'BUILT FOR BUSINESS, READY FOR HOME',
        'LATITUDE, INSPIRON, XPS AND VOSTRO'
      ],
      paragraphs: [
        'Computer Zone stocks Dell laptops for every kind of user. Latitude is the choice for offices that need dependable, secure machines. Inspiron and Vostro cover everyday work and study at a friendly price.',
        'XPS is Dell\'s premium range with slim bodies and sharp displays, a good match for designers, creators and anyone who wants a high-end laptop.',
        'Ask our team about processor, RAM, storage and warranty for each model, and we will help you pick the Dell that fits your work and your budget.'
      ],
      video: '',
      images: [
        '/images/pages/dell-1.jpg',
        '/images/pages/dell-2.jpg',
        '/images/pages/dell-3.jpg'
      ]
    },

    {
      key: 'hp',
      kicker: 'BRAND 02',
      title: 'HP LAPTOPS',
      headings: [
        'LONG WORKING DAYS, LIGHT TO CARRY',
        'ELITEBOOK, PROBOOK, PAVILION AND VICTUS'
      ],
      paragraphs: [
        'HP laptops at Computer Zone range from premium EliteBook machines for professionals to ProBook models that give small offices strong value.',
        'Pavilion laptops suit students and families who want a good display, a comfortable keyboard and reliable everyday speed. Victus brings gaming performance without a gaming price.',
        'Tell us how you will use your laptop and we will recommend the HP model with the right processor, memory and storage for you.'
      ],
      video: '',
      images: [
        '/images/pages/hp-1.jpg',
        '/images/pages/hp-2.jpg',
        '/images/pages/hp-3.jpg'
      ]
    },

    {
      key: 'lenovo',
      kicker: 'BRAND 03',
      title: 'LENOVO LAPTOPS',
      headings: [
        'TOUGH BUILD, COMFORTABLE KEYBOARD',
        'THINKPAD, IDEAPAD, LEGION AND YOGA'
      ],
      paragraphs: [
        'ThinkPad is Lenovo\'s legendary business series, loved for its keyboard, durability and security features. It is a favourite for professionals who work on their laptop all day.',
        'IdeaPad gives students and families a smooth, affordable laptop. Yoga models add flexible screens and a premium feel, while Legion is made for gamers who want high frame rates and good cooling.',
        'Visit Computer Zone to see the Lenovo range in person and compare models side by side.'
      ],
      video: '',
      images: [
        '/images/pages/lenovo-1.jpg',
        '/images/pages/lenovo-2.jpg',
        '/images/pages/lenovo-3.jpg'
      ]
    },

    {
      key: 'all',
      kicker: 'BRAND 04',
      title: 'ALL LAPTOPS',
      headings: [
        'EVERY BRAND, EVERY BUDGET',
        'BUSINESS, STUDENT, GAMING AND DESIGN'
      ],
      paragraphs: [
        'Not sure which brand to choose? Computer Zone also carries laptops from other leading brands, so you can compare more options before you decide.',
        'Whether you need a light laptop for classes, a strong machine for office software, or a powerful system for gaming and design, our team will guide you to the right choice.',
        'Visit the shop or message us to ask about available models, specifications and warranty.'
      ],
      video: '',
      images: [
        '/images/pages/all-1.jpg',
        '/images/pages/all-2.jpg',
        '/images/pages/all-3.jpg'
      ]
    }

  ];


  activeKey = 'dell';
  cardOpen = true;

  hideTimer: ReturnType<typeof setTimeout> | null = null;


  get activeItem() {
    return this.items.find(
      (item) => item.key === this.activeKey
    );
  }


  firstWord(text: string): string {
    if (!text) {
      return '';
    }

    return text.trim().split(/\s+/)[0];
  }


  restWords(text: string): string {
    if (!text) {
      return '';
    }

    const parts = text.trim().split(/\s+/);
    return parts.slice(1).join(' ');
  }


  private setupPageReveal(): void {

    let queued = false;

    const update = () => {
      queued = false;

      const root = document.querySelector('.zone-page');
      const pages = document.querySelectorAll('.service-page');
      const viewHeight = window.innerHeight;

      pages.forEach((page) => {
        const box = page.getBoundingClientRect();
        const visible =
          box.top < viewHeight * 0.7 && box.bottom > viewHeight * 0.3;

        page.classList.toggle('in-view', visible);
      });

      if (root) {
        root.classList.add('reveal-ready');
      }
    };

    const schedule = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    document.addEventListener('scroll', schedule, true);
    window.addEventListener('resize', schedule);

    update();
    setTimeout(update, 300);

  }


  ngAfterViewInit(): void {

    this.setupPageReveal();

    const video = this.bgVideo?.nativeElement;

    if (!video) {
      return;
    }

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    const playVideo = () => {
      const promise = video.play();

      if (promise && promise.catch) {
        promise.catch(() => {});
      }
    };

    playVideo();

    video.addEventListener('pause', playVideo);

    video.addEventListener('ended', () => {
      video.currentTime = 0.05;
      playVideo();
    });

    document.addEventListener(
      'visibilitychange',
      () => {
        if (!document.hidden) {
          playVideo();
        }
      }
    );

  }


  @HostListener(
    'document:click',
    ['$event']
  )
  onDocumentClick(event: MouseEvent): void {

    const target =
      event.target as HTMLElement;

    if (
      target.closest('.service-button') ||
      target.closest('.service-card')
    ) {
      return;
    }

    this.cardOpen = false;

  }


  openCard(key: string): void {

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.activeKey = key;
    this.cardOpen = true;

  }


  hoverCard(key: string): void {

    // touch screens fake a hover on tap; only react on real hover devices
    if (window.matchMedia('(hover: hover)').matches) {
      this.openCard(key);
    }

  }


  goToPage(key: string): void {

    const narrow = window.matchMedia('(max-width: 1000px)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;

    // touch tablets: first tap shows the card, second tap opens the page
    if (!narrow && !canHover && this.activeKey !== key) {
      this.openCard(key);
      return;
    }

    this.openCard(key);

    const page = document.getElementById('page-' + key);

    if (page) {
      page.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }


  keepOpen(): void {

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

  }


  scheduleClose(): void {

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.hideTimer = setTimeout(() => {
      this.cardOpen = false;
    }, 180);

  }


  toggleBot(): void {
    this.botOpen = !this.botOpen;
  }


  sendBot(event: Event): void {
    event.preventDefault();

    const field = this.botField?.nativeElement;
    const text = (field?.value || '').trim();

    if (!text) {
      return;
    }

    this.botMessages.push({ from: 'user', text });

    if (field) {
      field.value = '';
    }

    this.botMessages.push({ from: 'bot', text: this.replyBot(text) });
  }


  replyBot(_text: string): string {
    return 'Wait — connecting you on WhatsApp. Message us here: https://wa.me/' + this.whatsappNumber + '  If someone is available they will reply. Otherwise please come back to this chat a bit later.';
  }

}