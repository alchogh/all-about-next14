import { StaticImageData } from "next/image";
import photo1 from "./photos/angry-cat.jpg"
import photo2 from './photos/bigmouth-cat.jpg'
import photo3 from './photos/butterfly-cat.jpg'
import photo4 from './photos/happy-cat.jpg'
import photo5 from './photos/staring-cat.jpg'
import photo6 from './photos/surprise-cat.jpg'
import photo7 from './photos/wondering-cat.jpg'

export interface WonderImageProps{
  id:string;
  name:string;
  src:StaticImageData;
  photographer:string;
  location:string;
}

 const WONDER_IMAGES: WonderImageProps[] = [
  {
    id:"1",
    name:"angry-cat",
    src:photo1,
    photographer:"cho",
    location:'seoul'
  },  {
    id:"2",
    name:"bigmouth-cat",
    src:photo2,
    photographer:"choi",
    location:'incheon'
  },  {
    id:"3",
    name:"butterfly-cat",
    src:photo3,
    photographer:"kim",
    location:'busan'
  },  {
    id:"4",
    name:"happy-cat",
    src:photo4,
    photographer:"park",
    location:'ulsan'
  },  {
    id:"5",
    name:"staring-cat",
    src:photo5,
    photographer:"na",
    location:'kangwondo'
  },  {
    id:"6",
    name:"surprise-cat",
    src:photo6,
    photographer:"lee",
    location:'gyeonsan'
  },  {
    id:"7",
    name:"wondering-cat",
    src:photo7,
    photographer:"you",
    location:'naju'
  },
]

export default WONDER_IMAGES