export const APP = Object.freeze({
  YEARS_TILL_DISINTEGRATION: 450,
  STOP_AT_PERCENTAGE: 100,
  MOBILE_WIDTH: 540,
  MOVIE_MODE: false,
  VIMEO_ID: "607838921",
  VIDEO_FILENAME: "shatter.07-HD 1080p.02.mp4",
});

export interface ScrollSpeed {
  percentDisintegrated: number;
  speed: number;
}

export interface scrollSpeedArr extends Array<ScrollSpeed> {}

export const scrollSpeeds: scrollSpeedArr = [
  { percentDisintegrated: 0, speed: 0.01 },
  { percentDisintegrated: 3, speed: 0.05 },
  { percentDisintegrated: 10, speed: 0.15 },
  { percentDisintegrated: 20, speed: 0.2 },
  { percentDisintegrated: 80, speed: 0.25 },
  { percentDisintegrated: 110, speed: 0.25 },
];

export const SCROLL_DIRECTION = Object.freeze({
  UP: "UP",
  DOWN: "DOWN",
});
