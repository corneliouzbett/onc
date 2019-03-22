import { NgModule } from '@angular/core';

import { OncSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OncSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OncSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OncSharedCommonModule {}
