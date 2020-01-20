# DiffViewer

DiffViewer is an Angular Pipe for comparing objects.

## Usage

First of all install:

```
npm install diff-viewer
```

Import Diff2Html styles in your angular.json:

```
"styles": [
    ...
    "./node_modules/diff2html/bundles/css/diff2html.min.css"
],
```

Import DiffViewerModule in your module where you want to use the pipe:

```
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiffViewerModule } from 'diff-viewer'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DiffViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

Then use the pipe with the [innerHtml] tag:

```
<div [innerHtml]="firstObject | diffViewer: secondObject"></div>
```

## Built With

- [Diff](https://www.npmjs.com/package/diff) - Used for generating unified diff
- [Diff2HTML](https://www.npmjs.com/package/diff2html) - Used for display the differences
