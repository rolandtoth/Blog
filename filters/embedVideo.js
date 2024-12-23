import getVideoId from 'get-video-id';
import videoThumbnailUrl from 'video-thumbnail-url';
import { image as _image } from 'image-downloader';
import { existsSync } from 'fs';

export default function (url) {
    var id, service, imgFile, thumb = "",
        videoData = {};

    if (url.constructor === Array) {
        videoData.service = url[0];
        videoData.id = encodeURIComponent(url[1]);
        thumb = getFacebookVideoId(videoData.id);
        url = false; // skip downloading image, must be copied manually to assets/images/video-thumbs folder
    } else {
        videoData = getVideoId(url);
    }

    if (videoData && videoData.id && videoData.service) {
        id = videoData.id;
        service = videoData.service;
    } else {
        return "";
    }

    imgFile = 'assets/images/video-thumbs/' + service + '-' + (thumb ? thumb : id) + '.jpg';

    imgFile = imgFile.toLowerCase();

    if (!existsSync(imgFile)) {
        videoThumbnailUrl(url).then(thumb_url => { // thumb_url is  url or null

            if (thumb_url) {
                var options = {
                    url: thumb_url,
                    dest: imgFile // Save to /path/to/dest/photo.jpg
                }

                _image(options)
                    .then(({
                        filename,
                        image
                    }) => {
                        console.log('Video thumb saved to', filename)
                    })
                    .catch((err) => {
                        console.error(err)
                    });
            }
        });
    }

    if (thumb) {
        thumb = ` data-video-thumb="${thumb}"`;
    }

    return `<div class="video-player-wrap"><div class="video-player" data-video-id="${id}" data-video-service="${service}"${thumb}></div></div>`;
};

function getFacebookVideoId(path) {
    path = unescape(path);

    if (path.substr(-1) === '/') {
        path = path.substr(0, path.length - 1);
    }

    return unescape(path).split("/").pop();
}