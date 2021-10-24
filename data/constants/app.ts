export const APP = Object.freeze({
  YEARS_TILL_DISINTEGRATION: 450,
  STOP_AT_PERCENTAGE: 100,
  MOBILE_WIDTH: 834,
  MOVIE_MODE: false,
  MOVIE_DURATION: 60,
  VIMEO_ID: "607838921",
  VIDEO_FILENAME: "shatter.75.01-1080p.mp4", // assumes both webm and mp4 exist in static/video • [https://cloudconvert.com/mov-to-webm]
});

export interface ScrollSpeed {
  percentDisintegrated: number;
  speed: number;
}

export interface scrollSpeedArr extends Array<ScrollSpeed> {}

export const scrollSpeeds: scrollSpeedArr = [
  { percentDisintegrated: 0, speed: 0.035 },
  { percentDisintegrated: 3, speed: 0.075 },
  { percentDisintegrated: 10, speed: 0.15 },
  { percentDisintegrated: 20, speed: 0.2 },
  { percentDisintegrated: 80, speed: 0.25 },
  { percentDisintegrated: 110, speed: 0.25 },
];

export const SCROLL_DIRECTION = Object.freeze({
  UP: "UP",
  DOWN: "DOWN",
});

export default APP;
