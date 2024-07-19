import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../shared/sidenav/sidenav.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../shared/container/container.component';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNavComponent,
    ToolbarComponent,
    CommonModule,
    MatToolbarModule,
    ContainerComponent,
    ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
