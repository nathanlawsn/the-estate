import ReactPlayer from 'react-player/youtube'

export default function Video() {
    return (
        <ReactPlayer className="aspect-video" width="100%" height="100%" url='https://www.youtube.com/watch?v=_kBMhQ7_AwY' />
    );
}