const themes = [
  {
    title: 'white',
    description: 'Simple black on white theme, that you saw when firstly met awsm.css.',
    colors: {
      primary: '#000',
      secondary: '#fff',
      stealthy: '#595959',
      invisible: '#f2f2f2',
      selectionBase: '#0064c1',
      link: '#0064c1',
      linkHover: '#f00000',
      linkVisited: '#8d39d0',
      alarm: '#d00000',
    },
    prismTheme: '',
  },
  {
    // source: https://www.instagram.com/p/BgJk0tcBK-d/
    title: 'gondola',
    description: '“Premium” theme with dark wine background color.',
    colors: {
      primary: '#FFF2E1',
      secondary: '#1F1010',
      stealthy: '#763F28',
      invisible: '#492622',
      selectionBase: '#874671',
      link: '#874671',
      linkHover: '#C6BDB8',
      linkVisited: '#524971',
      alarm: '#852323',
    },
    prismTheme: 'tomorrow',
  },
  {
    // source: https://www.instagram.com/p/Be2qWo_FR2s/
    title: 'mischka',
    description: 'Grey-ish military looking theme with nice red links.',
    colors: {
      primary: '#3A3B45',
      secondary: '#D3D7DD',
      stealthy: '#9197A3',
      invisible: '#CFCED4',
      selectionBase: '#C34138',
      link: '#C34138',
      linkHover: '#DB887B',
      linkVisited: '#603237',
      alarm: '#851F1B',
    },
    prismTheme: 'okaidia',
  },
  {
    // source: https://www.instagram.com/p/BeF113mlSfq/
    title: 'big-stone',
    description: 'Awesome colored dark blue theme that looks like you\'re under water. I\'m sure that Aquaman likes this theme!',
    colors: {
      primary: '#99C0C9',
      secondary: '#1B2D3E',
      stealthy: '#145E86',
      invisible: '#184165',
      selectionBase: '#1570AB',
      link: '#1570AB',
      linkHover: '#AEC8E7',
      linkVisited: '#726191',
      alarm: '#A15433',
    },
    prismTheme: 'tomorrow',
  },
  {
    // source: inverted white theme
    title: 'black',
    description: 'I created this theme using color inversion on the white version. And I got old-fashion theme that looks like you\'re in 80\'s.',
    colors: {
      primary: '#fff',
      secondary: '#000',
      stealthy: '#444',
      invisible: '#222',
      selectionBase: '#FD9A49',
      link: '#FD9A49',
      linkHover: '#75C53C',
      linkVisited: '#7b4a29',
      alarm: '#5AFFFE',
    },
    prismTheme: '',
  },
  {
    // source: https://www.instagram.com/p/BUlk5_sFn1s/
    title: 'tasman',
    description: 'Do you like pistachios?',
    colors: {
      primary: '#742E1E',
      secondary: '#DAE4D8',
      stealthy: '#9A5C37',
      invisible: '#c1b6b4',
      selectionBase: '#1D2A3D',
      link: '#418198',
      linkHover: '#D68A41',
      linkVisited: '#1D2A3D',
      alarm: '#73BFBE',
    },
    prismTheme: '',
  },
  {
    // source: https://www.instagram.com/p/BUJFTRmldcm/
    title: 'pastel-pink',
    description: 'Just a nice pink theme.',
    colors: {
      primary: '#173957',
      secondary: '#ffd9e3',
      stealthy: '#46799A',
      invisible: '#efb4c0',
      selectionBase: '#88505B',
      link: '#88505B',
      linkHover: '#1DB2C1',
      linkVisited: '#C27174',
      alarm: '#1981e0',
    },
    prismTheme: '',
  },
  {
    // source: https://www.instagram.com/p/BdbLpu6FAWd/
    title: 'pearl-lusta',
    description: 'Really warm theme with colors like orange, red, pink and some others.',
    colors: {
      primary: '#411B33',
      secondary: '#FBECDA',
      stealthy: '#dcafb5',
      invisible: '#EDDBD6',
      selectionBase: '#A54A29',
      link: '#A54A29',
      linkHover: '#F6B731',
      linkVisited: '#742B5A',
      alarm: '#EFC44E',
    },
    prismTheme: 'solarizedlight',
  },
];

themes.push(Object.assign({}, themes.find(x => x.title === 'white'), { title: '' })); // alias for white

module.exports = themes;
