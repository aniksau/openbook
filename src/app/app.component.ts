import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForLoopComponent } from "./components/for-loop/for-loop.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForLoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OpenBook';
}
