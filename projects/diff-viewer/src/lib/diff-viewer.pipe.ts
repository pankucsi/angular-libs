import { Pipe, PipeTransform } from "@angular/core";
import { createTwoFilesPatch, PatchOptions } from "diff";
import * as Diff2Html from "diff2html";

@Pipe({
  name: "diffViewer"
})
export class DiffViewerPipe implements PipeTransform {
  transform(obj1: any, obj2: any, option: PatchOptions): any {
    let strInput = createTwoFilesPatch(
      "obj1",
      "obj2",
      JSON.stringify(obj1, null, 2),
      JSON.stringify(obj2, null, 2),
      "",
      "",
      option
    );

    let outputHtml = Diff2Html.html(strInput, {
      inputFormat: "diff",
      showFiles: false,
      matching: "lines",
      outputFormat: "side-by-side"
    } as any);

    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(outputHtml, "text/html");
    const onlyDiffs = parsedHtml.querySelector(".d2h-files-diff");

    this.removeInfoLabel(onlyDiffs);

    return onlyDiffs.innerHTML;
  }

  private removeInfoLabel(element: Element) {
    const infoLines = element.querySelectorAll(
      "tr td.d2h-code-side-linenumber.d2h-info"
    );

    infoLines.forEach(infoLine => {
      infoLine.parentElement.remove();
    });
  }
}
