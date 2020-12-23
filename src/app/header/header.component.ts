import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/Data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  constructor(private dataService: DataStorageService) {}

  onSaveData() {
    this.dataService.storeRecipes();
  }

  onFetchData() {
    this.dataService.fetchRecipes();
  }
}
