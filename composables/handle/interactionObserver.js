import stateMachine from "~/data/state/scroll";

// @ts-ignore
function handleIntersection(entries) {
  // @ts-ignore
  entries.map((entry) => {
    if (entry.isIntersecting) {
      // console.log("VISIBLE");
      stateMachine.state.scrollValuesFrozen = false;
    } else {
      // console.log("INVISIBLE");
      stateMachine.state.scrollValuesFrozen = true;
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

export { handleIntersection, options };
