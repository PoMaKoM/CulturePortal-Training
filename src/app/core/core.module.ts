import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { LanguageComponent } from './components/language/language.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetDataService } from './services/get-data.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LogoComponent,
    LanguageComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [GetDataService]
})
export class CoreModule {}
