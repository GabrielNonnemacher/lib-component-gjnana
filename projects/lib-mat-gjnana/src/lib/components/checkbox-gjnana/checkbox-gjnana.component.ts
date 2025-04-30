import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

declare type Size = 'sm' | 'md' | 'lg';
declare type Variant =
  | 'basic'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary';

@Component({
  selector: 'checkbox-gjnana',
  standalone: true,
  imports: [NgClass],
  templateUrl: './checkbox-gjnana.component.html',
  styleUrl: './checkbox-gjnana.component.scss',
})
export class CheckBoxGjnanaComponent {
  protected classes: string[] = [] as string[];
  @Input() title?: string;
  @Input() variant: Variant = 'basic';
  @Input() size: Size = 'sm';
  @Input() disabled: boolean = false;
  @Input() value: boolean = false;
  @Output() check = new EventEmitter();

  public ngOnInit(): void {
    this.comporClasse();
  }

  private comporClasse(): void {
    this.classes = [this.size, this.value ? this.variant : ''];
  }

  public changeCheck(): void {
    this.value = !this.value;
    this.comporClasse();
    this.check.emit(this.value);
  }
}
