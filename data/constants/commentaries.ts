import commentary from "~/components/commentary.vue";
import { tabsForPartI } from "~/composables/handle/tab";
import APP from "~/data/constants/app";

export interface commentary {
  year: number;
  comment: string;
  commentSm: string;
  tabIndex: number;
  isIphone: boolean;
  iphoneModel: number;
}

export interface commentariesArr extends Array<commentary> {}
export var commentaries: commentariesArr = [
  {
    year: 2021,
    comment: "~~~Scroll Down~~~",
    commentSm: "~~~Scroll Down~~~",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2022,
    comment: " ",
    commentSm: " ",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 14,
  },
  {
    year: 2023,
    comment: "",
    commentSm: "",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 15,
  },
  {
    year: 2024,
    comment: "",
    commentSm: "",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 16,
  },
  {
    year: 2025,
    comment: "",
    commentSm: "",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 17,
  },
  {
    year: 2026,
    comment: "",
    commentSm: "",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 18,
  },
  {
    year: 2027,
    comment: "",
    commentSm: "",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 19,
  },
  {
    year: 2028,
    comment: "",
    commentSm: "",
    tabIndex: 0,
    isIphone: true,
    iphoneModel: 20,
  },
  {
    year: 2029,
    comment: "You download your first<br />🌬Air Quality Index app🌬",
    commentSm: "You download<br />your first <br />🌬Air Quality app🌬",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2035,
    comment: "Your phone alerts you to<br />⚠️Ration Water⚠️",
    commentSm: "Your phone<br />alerts you to<br />⚠️Ration Water⚠️",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2042,
    comment: "🔫Water Wars🔫<br />start sprouting up",
    commentSm: "🔫Water Wars🔫<br />start sprouting up",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2050,
    comment: "You vote for the candidate who<br />💧promises cheap water💧",
    commentSm:
      "You vote for<br />the candidate who<br />💧promises cheap water💧",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2069,
    comment: "Californian farmers<br />🚜move to Alaska🚜",
    commentSm: "Californian<br />farmers move<br />🚜to Alaska🚜",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2098,
    comment: "🪦You’re dead🪦",
    commentSm: "You’re<br />🪦dead🪦",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2123,
    comment: "“The Great Migration” displaces<br />🚧40% of the population🚧",
    commentSm:
      "“The Great Migration”<br />displaces<br />🚧 40% 🚧<br />of the population",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2150,
    comment: "Ocean has more plastic than 🐟fish🐟",
    commentSm: "Ocean has more<br />plastic than<br />🐟fish🐟",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },

  {
    year: 2160,
    comment: "🪦Your kids are dead🪦",
    commentSm: "Your kids<br />🪦are dead🪦",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2186,
    comment: "🔥“Fire moat”🔥<br />voted phrase of the century",
    commentSm: "🔥“Fire moat”🔥<br />voted phrase<br />of the century",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2214,
    comment: "Last polar bear dies and<br />😕humanity can’t believe itself😕",
    commentSm:
      "Last polar bear dies<br />and humanity<br />😕can’t believe itself😕",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2237,
    comment: "🪦Grandkids ➡ Dead🪦",
    commentSm: "Grandkids ➡<br />🪦Dead🪦",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2260,
    comment: "☠️Water War III☠️",
    commentSm: "☠️Water War☠️<br />III",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2284,
    comment: "🚀Top 1% move to Mars🚀<br />to escape climate change on Earth",
    commentSm:
      "Top 1%<br />🚀move to Mars🚀<br />to escape climate<br />change on Earth",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2307,
    comment: "🌊Sea levels ⤴️ 40 feet🌊",
    commentSm: "🌊Sea levels🌊<br />⤴️ 40 feet",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2330,
    comment: "Sharks swim through<br />🦈downtown Miami🦈",
    commentSm: "🦈Sharks swim🦈<br />through downtown<br />Miami",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2354,
    comment: "🇧🇩Bangladesh🇧🇩<br />is a body of water",
    commentSm: "🇧🇩Bangladesh🇧🇩<br />is a<br />body of water",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2378,
    comment: "Last glacier<br />🧊melts into the sea🧊",
    commentSm: "Last glacier<br />melts into<br />🧊the sea🧊",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2399,
    comment: "A child asks<br />🤔“What was wildlife?”🤔",
    commentSm: "A child asks<br />“What was<br />🤔wildlife?”🤔",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2421,
    comment:
      "🌪Hurricane Omega obliterates 🌪<br />Florida, Louisiana, Georgia,<br />South Carolina",

    commentSm:
      "🌪Hurricane Omega 🌪<br />obliterates Florida<br />Louisiana, Georgia,<br />South Carolina",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2453,
    comment: "Planet plagued by super-storms.<br />👋Last human leaves Earth👋",
    commentSm:
      "Planet plagued<br />by super-storms.<br />Last human<br />👋leaves Earth👋",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
  {
    year: 2471,
    comment: "Planet plagued by super-storms.<br />👋Last human leaves Earth👋",
    commentSm:
      "Planet plagued<br />by super-storms.<br />Last human<br />👋leaves Earth👋",
    tabIndex: 0,
    isIphone: false,
    iphoneModel: 0,
  },
];

export function setCommentariesTabIndexes(): void {
  let tabIndex = 0;
  const currentYear = new Date().getFullYear();
  const yearDifferential = currentYear - APP.YEAR_THIS_WEBSITE_CREATED;

  commentaries.forEach(function (commentary) {
    commentary.tabIndex = tabIndex;
    commentary.year += yearDifferential;
    if (commentary.isIphone) {
      commentary.iphoneModel += yearDifferential;
      commentary.comment =
        "📱️iPhone <span style='font-family: \"monspaceNumbers\"'>" +
        commentary.iphoneModel +
        "</span> released📱";
      commentary.commentSm =
        "📱️iPhone <span style='font-family: \"monspaceNumbers\"'>" +
        commentary.iphoneModel +
        "</span>📱<br />released";
    }
    tabIndex++;
  });
  tabsForPartI.value = tabIndex - 1;
}
