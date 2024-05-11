import { setStatus } from "./set-status.js";
import { format } from "date-fns";

// const setStatus = console.log;

const doAThing = () => {
  const dateStr = format(new Date(), "h:mm:ss aaa | MMM do, yyyy");
  setStatus(dateStr);
};

// setInterval(doAThing, 1000);

const sleep = async (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};
const sleepBeats = async (beats, bpm = 130) => {
  await sleep((beats / bpm) * 60 * 1000);
};

const cashews = async () => {
  setStatus("did you know that cashews come from a fruit");
  await sleepBeats(6.5);
  setStatus("di-");
  await sleepBeats(0.5);
  setStatus("di- di-");
  await sleepBeats(0.5);
  setStatus("di- di- di-");
  await sleepBeats(0.5);

  setStatus("did you know that cashews come from a fruit");
  await sleepBeats(6.5);
  setStatus("ca-");
  await sleepBeats(0.5);
  setStatus("ca- ca-");
  await sleepBeats(0.5);
  setStatus("ca- ca- ca-");
  await sleepBeats(0.5);

  setStatus("ca- ca- ca- cashews");
  await sleepBeats(2);
  setStatus("cashews");
  await sleepBeats(2);
  setStatus("fr-");
  await sleepBeats(0.5);
  setStatus("fr- fr-");
  await sleepBeats(0.5);
  setStatus("fr- fr- fr-");
  await sleepBeats(0.5);
  setStatus("fr- fr- fr- fruit");
  await sleepBeats(1);

  setStatus("di-");
  await sleepBeats(0.5);
  setStatus("di- di-");
  await sleepBeats(0.5);
  setStatus("di- di- di-");
  await sleepBeats(0.5);

  setStatus("did");
  await sleepBeats(1);
  setStatus("you");
  await sleepBeats(1);
  setStatus("know");
  await sleepBeats(1);
  setStatus("that");
  await sleepBeats(2);

  setStatus('"noo..."');
  await sleepBeats(3);
};

const bKomachi = async () => {
  setStatus("👏◼️");
  await sleepBeats(1, 150);
  setStatus("◼️👏");
  await sleepBeats(1, 150);
  setStatus("👏");
  await sleepBeats(0.5, 150);
  setStatus("👏👏");
  await sleepBeats(0.5, 150);
  setStatus("👏👏👏");
  await sleepBeats(1, 150);
  setStatus("b-komachi");
  await sleepBeats(3, 150);
  setStatus("b-komachi (woo!)");
  await sleepBeats(1, 150);
};

while (true) {
  await cashews();
  // await bKomachi();
}
