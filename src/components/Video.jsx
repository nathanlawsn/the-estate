import ReactPlayer from 'react-player/youtube'

export default function Video({url}) {
    return (
        <ReactPlayer className="aspect-video" width="100%" height="100%" url={url} />
    );
}