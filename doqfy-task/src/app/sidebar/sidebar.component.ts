import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PendingAction } from 'src/models/doqfy-model';
import { DoqfyService } from 'src/services/doqfy.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pendingData!: PendingAction[];

  constructor(private service: DoqfyService) {}

  private getPendingAction(): void {
    lastValueFrom(this.service.getPendingAction()).then(
      (result: PendingAction[]) => {
        this.pendingData = result;
      }
    );
  }

  ngOnInit(): void {
    this.getPendingAction();
  }
}
