import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

declare type Size = 'sm' | 'md' | 'lg';
declare type Variant =
  | 'basic'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary';

@Component({
  selector: 'header-gjnana',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header-gjnana.component.html',
  styleUrl: './header-gjnana.component.scss',
})
export class HeaderGjnanaComponent {
  @Input() title?: string;
  @Input() size: Size = 'md';
  @Input() variant: Variant = 'primary';
}
