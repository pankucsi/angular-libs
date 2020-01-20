import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DiffViewerPipe } from "./diff-viewer.pipe";

@NgModule({
  declarations: [DiffViewerPipe],
  imports: [CommonModule],
  exports: [DiffViewerPipe]
})
export class DiffViewerModule {}
