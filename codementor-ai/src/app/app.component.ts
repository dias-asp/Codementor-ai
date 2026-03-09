import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemComponent } from './components/problem/problem.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    ProblemComponent,
    FeaturesComponent,
    HowItWorksComponent,
    BenefitsComponent,
    PricingComponent,
    CtaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codementor-ai';
}
