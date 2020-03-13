import { Video } from './../../../shared/models/details-info-director.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-video',
  templateUrl: './dialog-video.component.html',
  styleUrls: ['./dialog-video.component.scss']
})
export class DialogVideoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video
  ) {}

  private parceMediaURL(media: HTMLMediaElement): string {
    const regexp: RegExp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)/;
    const url = media.src;
    const match = url.match(regexp);
    return match[1];
  }

  private generateURL(id: string): string {
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }

  private createIframe(id: string): Node {
    const iframe = document.createElement('iframe');
    iframe.classList.add('video-media');
    iframe.setAttribute('allowfulscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('src', this.generateURL(id));
    iframe.setAttribute(
      'style',
      'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none'
    );

    return iframe;
  }

  public setupVideo() {
    const link: Element = document.querySelector('.video-link');
    const button: Element = document.querySelector('.video-button');
    const media: HTMLMediaElement = document.querySelector('.video-media');
    const id: string = this.parceMediaURL(media);

    const iframe: Node = this.createIframe(id);
    link.remove();
    button.remove();
    document.querySelector('.video').appendChild(iframe);
    link.removeAttribute('href');
  }

  ngOnInit(): void {}
}
