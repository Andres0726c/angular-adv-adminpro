import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css' ;
    // console.log(url)

    //Cambiar valor del href por el valor nuevo(url)
    this.linkTheme?.setAttribute('href', url);
   }

   changeTheme( theme: string ) {

    //Convertirlo en un string
    const url = `./assets/css/colors/${ theme }.css`;
    // console.log(url)

    //Cambiar valor del href por el valor nuevo(url)
    this.linkTheme?.setAttribute('href', url);

    //Guardar el último color en el localstorage
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    links.forEach( elemento => {

      elemento.classList.remove('working');
      const btnTheme = elemento.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) {
        elemento.classList.add('working');
      }

    })

  }
}
