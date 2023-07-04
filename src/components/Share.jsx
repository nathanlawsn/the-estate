
import { TwitterShareButton, FacebookShareButton } from "react-share";

const shareUrl = "https://the-estate.co.uk/";

export default function Share() {
    return (
        <div class="flex items-center gap-5">
            <span>Share via</span>
            <div class="flex items-center gap-2.5">
                <TwitterShareButton url={shareUrl}>
                    <span class="block w-8 h-7 text-primary-orange hover:text-primary-purple duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <g id="Group_43" data-name="Group 43" transform="translate(-144.27 -713.996)">
                                <g id="Ellipse_189" data-name="Ellipse 189" transform="translate(144.27 713.996)" fill="none" stroke="currentColor" stroke-width="1">
                                <circle cx="15" cy="15" r="15" stroke="none"/>
                                <circle cx="15" cy="15" r="14.5" fill="none"/>
                                </g>
                                <path id="twitter_1_" d="M1552.124,3455.76a4.3,4.3,0,0,1-.89.3,2.844,2.844,0,0,0,.73-1.192h0a.149.149,0,0,0-.089-.187.175.175,0,0,0-.115.009h0a5.02,5.02,0,0,1-1.353.57.278.278,0,0,1-.089.009.4.4,0,0,1-.24-.089,2.755,2.755,0,0,0-1.834-.712,2.7,2.7,0,0,0-.881.142,2.731,2.731,0,0,0-1.816,1.985,2.971,2.971,0,0,0-.062,1.05.142.142,0,0,1-.027.08.086.086,0,0,1-.08.035h-.009a7.184,7.184,0,0,1-5-2.741h0a.152.152,0,0,0-.2-.027.088.088,0,0,0-.036.045h0a2.893,2.893,0,0,0,.454,3.453,2.614,2.614,0,0,1-.632-.249h0a.137.137,0,0,0-.2.053.131.131,0,0,0-.018.08h0a2.861,2.861,0,0,0,1.62,2.625h-.062a2.8,2.8,0,0,1-.472-.044h0a.138.138,0,0,0-.169.116.194.194,0,0,0,.009.071h0a2.8,2.8,0,0,0,2.2,1.94,5.074,5.074,0,0,1-2.865.89h-.32a.212.212,0,0,0-.2.16.221.221,0,0,0,.107.25,7.443,7.443,0,0,0,3.827,1.059,7.583,7.583,0,0,0,3.275-.712,7.2,7.2,0,0,0,2.394-1.833,8.23,8.23,0,0,0,1.967-5.268v-.045a.472.472,0,0,1,.178-.374,5.6,5.6,0,0,0,1.1-1.237h0a.151.151,0,0,0-.036-.2.174.174,0,0,0-.16-.009Z" transform="translate(-1386.633 -2730.474)" fill="currentColor"/>
                            </g>
                        </svg>
                    </span>
                </TwitterShareButton>
                <FacebookShareButton url={shareUrl} quote="TEST" hashtag="#test">
                    <span class="block w-8 h-7 text-primary-orange hover:text-primary-purple duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <g id="Group_44" data-name="Group 44" transform="translate(-184.232 -713.996)">
                                <g id="Ellipse_192" data-name="Ellipse 192" transform="translate(184.232 713.996)" fill="none" stroke="currentColor" stroke-width="1">
                                <circle cx="15" cy="15" r="15" stroke="none"/>
                                <circle cx="15" cy="15" r="14.5" fill="none"/>
                                </g>
                                <g id="Group_3_1_" transform="translate(195.271 720.996)">
                                <path id="Path_1_1_" d="M426.768,1042.653v-1.91a.969.969,0,0,1,.992-.95h.992v-2.384h-1.984a2.911,2.911,0,0,0-2.965,2.859v2.384H421.82v2.384H423.8v7.628h2.965v-7.628h1.984l.992-2.384Z" transform="translate(-421.82 -1037.409)" fill="currentColor"/>
                                </g>
                            </g>
                        </svg>
                    </span>
                </FacebookShareButton>
            </div>
        </div>
    )
}