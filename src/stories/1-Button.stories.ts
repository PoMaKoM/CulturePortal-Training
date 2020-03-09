import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

export default {
  title: 'Button',
};

export const Button = () => ({
  template: `<button mat-button style="font-family: MontserratMedium; color: #241e20">Click me!</button>`,
  moduleMetadata: {
    imports: [MatButtonModule]
  }
});

export const ColoredButtons = () => ({
  template: `<button mat-button style="font-family: MontserratMedium;
             background-color: #96d4cf; margin: 5px; color: #000000">
             Click me!</button>
             <button mat-button style="font-family: MontserratMedium;
             background-color: #b5c4d9; margin: 5px; color: #ffffff">
             Click me!</button>
             <button mat-button style="font-family: MontserratMedium;
             background-color: #96d4cf; margin: 5px; color: #ffffff">
             Click me!</button>
             <button mat-button style="font-family: MontserratMedium;
             background-color: #b5c4d9; margin: 5px; color: #000000">
             Click me!</button>
             <button mat-mini-fab style="font-family: MontserratMedium;
             background-color: #b5c4d9; margin: 5px; color: #000000">
             En</button>
             <button mat-mini-fab style="font-family: MontserratMedium;
             background-color: #96d4cf; margin: 5px; color: #000000">
             En</button>`,
  moduleMetadata: {
    imports: [MatButtonModule]
  }
});

export const Checkboxes = () => ({
  template: `<mat-card>
          <mat-card-content>
            <h2 style="margin: 10px;">Checkbox configuration</h2>
            <section style="display: flex; align-content: center;align-items: center;height:60px;">
              <mat-checkbox style="margin: 0 10px;" [(ngModel)]="checked">Checked</mat-checkbox>
              <mat-checkbox style="margin: 0 10px;" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
            </section>
            <section style="display: flex; align-content: center;align-items: center;height:60px;">
              <label style="margin: 0 10px;">Align:</label>
              <mat-radio-group [(ngModel)]="labelPosition">
                <mat-radio-button style="margin: 0 10px;" value="after">After</mat-radio-button>
                <mat-radio-button style="margin: 0 10px;" value="before">Before</mat-radio-button>
              </mat-radio-group>
            </section>
            <section style="display: flex; align-content: center;align-items: center;height:60px;">
              <mat-checkbox style="margin: 0 10px;" [(ngModel)]="disabled">Disabled</mat-checkbox>
            </section>
          </mat-card-content>
        </mat-card>
        <mat-card class="result">
          <mat-card-content>
            <h2 style="margin: 10px;">Result</h2>
            <section style="display: flex; align-content: center;align-items: center;height:60px;">
              <mat-checkbox
              style="margin: 0 10px;"
                  [(ngModel)]="checked"
                  [(indeterminate)]="indeterminate"
                  [labelPosition]="labelPosition"
                  [disabled]="disabled">
                I'm a checkbox
              </mat-checkbox>
            </section>
          </mat-card-content>
        </mat-card>
  `,
  moduleMetadata: {
    imports: [MatCheckboxModule, MatCardModule, MatRadioModule]
  }
});
