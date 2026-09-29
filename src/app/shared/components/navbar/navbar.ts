import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // Estado reactivo del menú hamburguesa (Responsive)
  isMenuOpen = signal<boolean>(false);

  // Sección activa actual del portafolio
  activeSection = signal<string>('home');

  private readonly scrollOffset = 60;

  language = inject(LanguageService);

  // Función para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  // Función para cerrar el menú al hacer clic en una opción
  closeMenu() {
    this.isMenuOpen.set(false);
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    document.body.style.overflowY = this.isMenuOpen() ? 'hidden' : 'scroll';
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 768 && this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = document.querySelectorAll<HTMLElement>('section');

    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= this.scrollOffset) {
        currentSection = section.id;
      }
    });

    if (currentSection !== this.activeSection()) {
      this.activeSection.update(() => currentSection);
    }
  }
}
