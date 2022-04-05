type PlasticFact = {
  emoji: string;
  label: string;
  text: string;
};

const facts: Record<string, PlasticFact> = {
  "plastic-clothing": {
    emoji: "♻️",
    label: "recycle",
    text: "A lot of companies are using **plastic to create fabric and pieces of clothing** - look for a local recycler to contribute",
  },
};
export { facts };
