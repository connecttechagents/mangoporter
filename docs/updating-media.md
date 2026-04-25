# How to Update Photos and Videos

Replacing the placeholder assets with your own farm photos and videos is simple. Follow these steps:

## 1. Prepare Your Files
For the best performance and visual quality, we recommend:
- **Images**: Use `.webp` or `.jpg` format. Aim for a resolution of at least `1920x1080` for headers and `800x600` for cards.
- **Videos**: Use `.mp4` format. Try to keep background videos under 10MB using tools like [Handbrake](https://handbrake.fr/) to ensure fast loading on mobile.

## 2. Locate the Asset Folders
All media files are stored in the `public/` directory:
- **Photos**: `public/images/`
- **Videos**: `public/videos/`

## 3. Method A: Replace by Filename (Easiest)
The simplest way to update a photo is to name your new file exactly like the old one and overwrite it in the folder. The website will automatically show the new image without any code changes.

**Example**:
1. Take your new farm photo and name it `hero-bg.webp`.
2. Move it into `public/images/`, replacing the existing file.

## 4. Method B: Update in HTML (Advanced)
If you want to use a different filename or add more images, you can update the source path in the `.html` files.

**Look for the `<img>` tag**:
```html
<!-- Example from index.html -->
<img src="/images/your-new-photo.jpg" alt="Description">
```

**Look for the `<source>` tag in videos**:
```html
<!-- Example from index.html -->
<video poster="/images/video-poster.jpg" ...>
  <source src="/videos/your-new-video.mp4" type="video/mp4">
</video>
```

## 5. Mobile Poster Frames
For videos, always provide a "poster" image. This is the photo that shows while the video is loading or if the user is on a slow connection. It should be a screenshot of the first frame of the video.

## 6. Optimization Tip
Before uploading, run your images through [squoosh.app](https://squoosh.app/) to reduce file size without losing quality. This ensures your site stays fast for Bangalore customers on mobile networks.
