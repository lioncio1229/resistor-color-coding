import abbreviateNumber from "./utils/abbreviateNumber.js";

export const colorcodeTable = [
  {
    color: "black",
    band1: 0,
    band2: 0,
    band3: 0,
    multiplier: 10 ** 0,
    tolerance: 0.01,
    tcr: 100,
  },
  {
    color: "brown",
    band1: 1,
    band2: 1,
    band3: 1,
    multiplier: 10 ** 1,
    tolerance: 0.02,
    tcr: 50,
  },
  { color: "red", band1: 2, band2: 2, band3: 2, multiplier: 10 ** 2, tcr: 15 },
  {
    color: "orange",
    band1: 3,
    band2: 3,
    band3: 3,
    multiplier: 10 ** 3,
    tcr: 25,
  },
  { color: "yellow", band1: 4, band2: 4, band3: 4, multiplier: 10 ** 4 },
  {
    color: "green",
    band1: 5,
    band2: 5,
    band3: 5,
    multiplier: 10 ** 5,
    tolerance: 0.005,
  },
  {
    color: "blue",
    band1: 6,
    band2: 6,
    band3: 6,
    multiplier: 10 ** 6,
    tolerance: 0.0025,
    tcr: 10,
  },
  {
    color: "violet",
    band1: 7,
    band2: 7,
    band3: 7,
    multiplier: 10 ** 7,
    tolerance: 0.01,
    tcr: 5,
  },
  {
    color: "gray",
    band1: 8,
    band2: 8,
    band3: 8,
    multiplier: 10 ** 8,
    tolerance: 0.0005,
  },
  { color: "white", band1: 9, band2: 9, band3: 9, multiplier: 10 ** 9 },
  { color: "gold", multiplier: 0.1, tolerance: 0.05 },
  { color: "silver", multiplier: 0.01, tolerance: 0.1 },
  { color: "none", tolerance: 0.2 },
];

export const bands = [
  { type: "bands4", title: "4 Bands" },
  { type: "bands5", title: "5 Bands" },
  { type: "bands6", title: "6 Bands" },
];

export const initialBands = {
  bands4: [
    { id: 0, bandName: "band1", text: "1st Band", color: "black" },
    { id: 1, bandName: "band2", text: "2nd Band", color: "brown" },
    { id: 2, bandName: "multiplier", text: "Multiplier", color: "red" },
    { id: 3, bandName: "tolerance", text: "Tolerance", color: "gold" },
  ],
  bands5: [
    { id: 0, bandName: "band1", text: "1st Band", color: "black" },
    { id: 1, bandName: "band2", text: "2nd Band", color: "brown" },
    { id: 2, bandName: "band3", text: "3nd Band", color: "red" },
    { id: 3, bandName: "multiplier", text: "Multiplier", color: "orange" },
    { id: 4, bandName: "tolerance", text: "Tolerance", color: "gold" },
  ],
  bands6: [
    { id: 0, bandName: "band1", text: "1st Band", color: "black" },
    { id: 1, bandName: "band2", text: "2nd Band", color: "brown" },
    { id: 2, bandName: "band3", text: "3nd Band", color: "red" },
    { id: 3, bandName: "multiplier", text: "Multiplier", color: "orange" },
    { id: 4, bandName: "tolerance", text: "Tolerance", color: "gold" },
    { id: 5, bandName: "tcr", text: "TCR", color: "violet" },
  ],
};

export function getBandValue(color, bandName) {
  for (let i = 0; i < colorcodeTable.length; i++) {
    const band = colorcodeTable[i];
    if (band.color === color && bandName in band) return band[bandName];
  }
  return -1;
}

export function calculateBand(resistance, tolerance) {
  const _tolerance = tolerance;
  tolerance = _tolerance * 100;
  const minimum = resistance - resistance * _tolerance;
  const maximum = resistance + resistance * _tolerance;
  return [
    { name: "Resitance ", value: abbreviateNumber(+resistance.toFixed(2)) + " Ω" },
    { name: "Tolerance", value: "± " + tolerance + " %" },
    { name: "Minimum", value: abbreviateNumber(+minimum.toFixed(2)) + " Ω" },
    { name: "Maximum", value: abbreviateNumber(+maximum.toFixed(2)) + " Ω" },
  ];
}

export function calculate4Band(band1, band2, multiplier, tolerance) {
  const resistance = Number(band1 + "" + band2) * multiplier;
  return calculateBand(resistance, tolerance);
}

export function calculate5Band(band1, band2, band3, multiplier, tolerance) {
  const resistance = Number(band1 + "" + band2 + "" + band3) * multiplier;
  return calculateBand(resistance, tolerance);
}

export function calculate6Band(
  band1,
  band2,
  band3,
  multiplier,
  tolerance,
  tcr
) {
  const resistance = Number(band1 + "" + band2 + "" + band3) * multiplier;
  return [
    ...calculateBand(resistance, tolerance),
    { name: "Tempco", value: '℃ '+tcr },
  ];
}

export function getBandOutput(band) {
  let values = [];
  band.forEach((obj) => {
    values.push(getBandValue(obj.color, obj.bandName));
  });

  switch (band.length) {
    case 4:
      return calculate4Band(values[0], values[1], values[2], values[3]);
    case 5:
      return calculate5Band(
        values[0],
        values[1],
        values[2],
        values[3],
        values[4]
      );
    case 6:
      return calculate6Band(
        values[0],
        values[1],
        values[2],
        values[3],
        values[4],
        values[5]
      );
  }
}
