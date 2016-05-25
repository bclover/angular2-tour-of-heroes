//Imports for loading & configuring a fake backend (In-Memory API)
import { provide } from "@angular/core";
import { XHRBackend } from "@angular/http";
import { InMemoryBackendService, SEED_DATA } from "angular2-in-memory-web-api/src/in-memory-backend.service";
import { InMemoryDataService } from "./in-memory-data.service";

// The usual bootstrapping imports
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from  './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: InMemoryBackendService}), //in-memory server
    provide(SEED_DATA, {useClass: InMemoryDataService})      //in-memory data
]);
