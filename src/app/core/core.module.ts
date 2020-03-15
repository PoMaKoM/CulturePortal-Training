import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { LanguageComponent } from './components/language/language.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, LogoComponent, LanguageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
