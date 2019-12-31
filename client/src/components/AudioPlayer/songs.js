//Audio
import FreeAtLast from "../../audio/FreeAtLast.mp3";
import GuiltTrip from "../../audio/GuiltTrip.mp3";
import StillWaiting from "../../audio/StillWaiting.mp3";

//Album Art
import DTLI from "../../images/DTLISum41.png";
import MorbidStuff from "../../images/MorbidStuffPUP.png";
import SelfTitled from "../../images/SelfTitledPUP.png";

const songs = [
    { id: 0, title: "Guilt Trip", band: "PUP", src: GuiltTrip, cover: SelfTitled },
    { id: 1, title: "Free At Last", band: "PUP", src: FreeAtLast, cover: MorbidStuff },
    { id: 2, title: "Still Waiting", band: "Sum 41", src: StillWaiting, cover: DTLI }
];

export default songs;