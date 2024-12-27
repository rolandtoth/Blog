const COLOR_MAP = [
  '#A6008A',
  '#331372',
  '#331372',
  '#41006A',
  '#343C60',
  '#02439D',
  '#025962',
  '#025962',
  '#941D4C',
  '#213BB4',
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
