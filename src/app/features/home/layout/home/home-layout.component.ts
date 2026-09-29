import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RevealOnScrollDirective } from '@shared/directives/reveal-on-scroll.directive';
import { Navbar } from '@shared/components/navbar/navbar';
import { About } from '@features/home/components/about/about';
import { Projects } from '@features/home/components/projects/projects';
import { SkillsComponent } from '@features/home/components/skills/skills';
import { Welcome } from '@features/home/components/welcome/welcome';
import { Experience } from "@features/home/components/experience/experience";
import { Contact } from "@features/home/components/contact/contact";
import { Footer } from "@features/home/components/footer/footer";
import { EducationComponent } from '@features/home/components/education/education';


@Component({
  selector: 'app-home',
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css',
  imports: [Navbar, Welcome, About, Projects, SkillsComponent, Experience, Contact, Footer, EducationComponent, RevealOnScrollDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeLayout { }
