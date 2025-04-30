import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

declare type Size = 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
declare type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

@Component({
  selector: 'button-gjnana',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-gjnana.component.html',
  styleUrl: './button-gjnana.component.scss',
})
export class ButtonGjnanaComponent {
  @Input() size: Size = 'md';
  @Input() variant: Variant = 'primary';
}
