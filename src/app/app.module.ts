import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DirectivaComponent} from './directiva/directiva.component';
import {ClientesComponent} from './clientes/clientes.component';
import {FormComponent} from './clientes/form.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {ClienteService} from './clientes/cliente.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {DetalleComponent} from './clientes/detalle/detalle.component';
import {LoginComponent} from './usuarios/login.component';
import {AuthGuard} from './usuarios/guards/auth.guard';
import {RoleGuard} from './usuarios/guards/role.guard';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/page/:page', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatMomentDateModule
  ],
  providers: [ClienteService, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
