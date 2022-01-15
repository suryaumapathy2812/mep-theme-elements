import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent as DefaultLayoutComponent } from './components/default/layout/layout.component';
import { HeaderComponent as DefaultHeaderComponent } from './components/default/header/header.component';
import { LayoutComponent as AdminLayoutComponent } from './components/admin/layout/layout.component';
import { SidebarComponent as AdminSidebarComponent } from './components/admin/sidebar/sidebar.component';
import { HeaderComponent as AdminHeaderComponent } from './components/admin/header/header.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [AppService],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const elements = [
      { name: "mep-default-layout", component: DefaultLayoutComponent },
      { name: "mep-admin-layout", component: AdminLayoutComponent },
    ]

    elements.forEach(element => {
      const el = createCustomElement(element.component, { injector: this.injector });
      customElements.define(element.name, el);
    })
  }



}
