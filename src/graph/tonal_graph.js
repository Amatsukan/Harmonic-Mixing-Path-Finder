const tonalGraph = {};

const weights = {
  perfect: 0,
  energyBoost: 1,
  plusOne: 2,
  scaleChange: 0.5,
  diagonal: 5,
  jaw: 4,
  mood: 4,
  minusOne: 5,
};

const wrap = n => ((n - 1 + 12) % 12) + 1;

for (let i = 1; i <= 12; i++) {
  for (const tone of ["A", "B"]) {
    const node = `${i}${tone}`;
    const inv = tone === "A" ? "B" : "A";

    tonalGraph[node] = [
      [`${i}${tone}`, weights.perfect],
      [`${wrap(i + 1)}${tone}`, weights.plusOne],
      [`${wrap(i - 1)}${tone}`, weights.minusOne],
      [`${wrap(i + 2)}${tone}`, weights.energyBoost],
      [`${i}${inv}`, weights.scaleChange],
      [`${wrap(i - 1)}${inv}`, weights.diagonal],
      [`${wrap(i + 7)}${tone}`, weights.jaw],
      [`${wrap(i + 3)}${inv}`, weights.mood],
    ];
  }
}

module.exports = tonalGraph;
