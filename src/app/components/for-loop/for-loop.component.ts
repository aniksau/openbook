import { Component, Input } from '@angular/core';
import { Iterable } from '../../interfaces/iterator.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for-loop',
  imports: [CommonModule],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  @Input() iterableItem!: Iterable<any>;
}
