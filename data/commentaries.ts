export interface commentary {
  year: number;
  comment: string;
}
export interface commentariesArr extends Array<commentary> {}

export const commentaries: commentariesArr = [
  { year: 2024, comment: "😱60th U.S. Presidential Election😱" },
  { year: 2028, comment: "😱61st U.S. Presidential Election😱" },
  { year: 2024, comment: "😱60th U.S. Presidential Election😱" },
  { year: 2028, comment: "😱😱61st U.S. Presidential Election😱😱" },
  { year: 2035, comment: "🎂YouTube turns 30🎂" },
  { year: 2040, comment: "🛸We have flying cars–for real this time!🛸" },
  { year: 2045, comment: "🍾...and jetpacks!🍾" },
  { year: 2050, comment: "📉No one remembers the crash of 2008📉" },
  {
    year: 2076,
    comment:
      "🙏The United States turns 300–hopefully we're still one country🙏",
  },
  { year: 2101, comment: "✊100 year anniversary of 9/11✊" },
  { year: 2120, comment: "🪦You’re dead🪦" },
  { year: 2220, comment: "🪦🪦Your kids are dead🪦🪦" },
  { year: 2320, comment: "🪦🪦🪦Your grandkids are dead🪦🪦🪦" },
  { year: 2420, comment: "🪦🪦🪦🪦Your grandkids' kids are dead🪦🪦🪦🪦" },
  {
    year: 2471,
    comment: "Congratulations–the water bottle has disintegrated!",
  },
];
