import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ROMAN'

  code: string = `
    document.querySelectorAll('gf-shopping-bag').forEach(el => {
      el.appendChild(document.createTextNode('It works!'))
    })
  `
  onClick(): void {
    chrome.tabs.executeScript({
      code: this.code,
    })
  }
}
