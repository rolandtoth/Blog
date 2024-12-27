const COLOR_MAP = [
  '#6A2A28',
  '#542B33',
  '#49302C',
  '#53372C',
  '#34332F',
  '#48523A',
  '#1D4441',
  '#0E4741',
  '#225B4A',
  '#336F56',
  '#3B6535',
  '#4F6034',
  '#315288',
  '#4C516F',
  '#25464D',
  '#314452',
  '#2D4762',
  '#14344D',
  '#3B2941',
  '#422D3C',
  '#402E3C',
  '#29292B',
  '#131C2B',
  '#001D2F',
  '#001B36',
];

export default function (str) {
  return str
      ? COLOR_MAP[
          stringToIndex(str, COLOR_MAP.length)
        ]
      : COLOR_MAP[0];
};

function stringToIndex(str, max = 10) {
  let sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum % max;
}
