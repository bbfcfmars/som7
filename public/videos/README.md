# Video Setup Instructions

## To achieve true full bleed video:

1. **Download the video from Vimeo:**
   - Go to: https://vimeo.com/1103273577
   - If you have Vimeo Pro/Plus, click the download button
   - Or use a video downloader tool like yt-dlp

2. **Save the video file:**
   - Rename the downloaded file to: `hero-video.mp4`
   - Place it in this directory: `public/videos/hero-video.mp4`

3. **Alternative: Use a different video**
   - You can use any MP4 video file
   - Recommended: 1920x1080 or higher resolution
   - Keep file size reasonable (under 50MB for web)

## Current setup:
- The Hero component will use the local video file if available
- Falls back to Vimeo embed if local file is missing
- Local video provides true full bleed without sidebars

## Video requirements:
- Format: MP4
- Codec: H.264
- Resolution: 1920x1080 or higher
- Duration: 10-30 seconds (looping)
- File size: Optimize for web (compress if needed)