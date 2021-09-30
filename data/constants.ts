import {commentariesArr} from "~/data/commentaries";

export default Object.freeze({
  YEARS_TILL_DISINTEGRATION: 450,
  STOP_AT_PERCENTAGE: 100,
  MOBILE_WIDTH: 540,
  VIMEO_ID: "607838921",
  VIDEO_FILENAME: "shatter.07-HD 1080p.02.mp4",
});

export
interface
scrollSpeed
{
  year: number;
  speed: number;
}

export
interface
scrollSpeedArr
extends
Array < scrollSpeed > {}

export const scrollSpeeds: commentariesArr = [
  {
    year: 10, speed: .1
  },
  {year: 25, speed: .15},
  {year 35, speed: .25}
];
