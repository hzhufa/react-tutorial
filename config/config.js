export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
    }],
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: './index'
        },
        {
          path: 'dashboard',
          routes: [
            { path: 'analysis', component: './dashboard/analysis' }
          ]
        },
        {
          path: 'helloworld',
          component: './HelloWorld'
        },
        { path: 'cards', component: './cards' },
        { path: 'puzzlecards', component: './puzzlecards' },
        { path: 'list', component: './list' },
        { path: 'typescript', component: './tsdemo' },
        { path: 'locale', component: './locale' },
        {
          path: 'components',
          routes: [
            {
              path: 'common',
              routes: [
                { path: 'button', component: './components/common/button' },
                { path: 'icon', component: './components/common/icon' },
              ]
            },
            {
              path: 'layout',
              routes: [
                { path: 'grid', component: './components/layout/grid' },
                { path: 'layout', component: './components/layout/layout' },
              ]
            },
            {
              path: 'navigation',
              routes: [
                { path: 'affix', component: './components/navigation/affix' },
                { path: 'breadcrumb', component: './components/navigation/breadcrumb' },
                { path: 'dropdown', component: './components/navigation/dropdown' },
                { path: 'menu', component: './components/navigation/menu' },
                { path: 'pagination', component: './components/navigation/pagination' },
                { path: 'pageheader', component: './components/navigation/pageheader' },
                { path: 'steps', component: './components/navigation/steps' },
              ]
            },
            {
              path: 'datainput',
              routes: [
                { path: 'autocomplete', component: './components/datainput/autocomplete' },
                { path: 'cascader', component: './components/datainput/cascader' },
                { path: 'checkbox', component: './components/datainput/checkbox' },
                { path: 'datepicker', component: './components/datainput/datepicker' },
                { path: 'form', component: './components/datainput/form' },
                { path: 'input', component: './components/datainput/input' },
                { path: 'inputnumber', component: './components/datainput/inputnumber' },
                { path: 'mention', component: './components/datainput/mention' },
                { path: 'radio', component: './components/datainput/radio' },
                { path: 'rate', component: './components/datainput/rate' },
                { path: 'select', component: './components/datainput/select' },
                { path: 'slider', component: './components/datainput/slider' },
                { path: 'switch', component: './components/datainput/switch' },
                { path: 'treeselect', component: './components/datainput/treeselect' },
                { path: 'transfer', component: './components/datainput/transfer' },
                { path: 'timepicker', component: './components/datainput/timepicker' },
                { path: 'upload', component: './components/datainput/upload' },
              ]
            },
            {
              path: 'datashow',
              routes: [
                { path: 'avatar', component: './components/datashow/avatar' },
                { path: 'badge', component: './components/datashow/badge' },
                { path: 'calendar', component: './components/datashow/calendar' },
                { path: 'card', component: './components/datashow/card' },
                { path: 'carousel', component: './components/datashow/carousel' },
                { path: 'collapse', component: './components/datashow/collapse' },
                { path: 'comment', component: './components/datashow/comment' },
                { path: 'empty', component: './components/datashow/empty' },
                { path: 'list', component: './components/datashow/list' },
                { path: 'popover', component: './components/datashow/popover' },
                { path: 'statistic', component: './components/datashow/statistic' },
                { path: 'tooltip', component: './components/datashow/tooltip' },
                { path: 'table', component: './components/datashow/table' },
                { path: 'tabs', component: './components/datashow/tabs' },
                { path: 'tag', component: './components/datashow/tag' },
                { path: 'timeline', component: './components/datashow/timeline' },
                { path: 'tree', component: './components/datashow/tree' },
              ]
            },
            {
              path: 'feedback',
              routes: [
                { path: 'alert', component: './components/feedback/alert' },
                { path: 'drawer', component: './components/feedback/drawer' },
                { path: 'modal', component: './components/feedback/modal' },
                { path: 'message', component: './components/feedback/message' },
                { path: 'notification', component: './components/feedback/notification' },
                { path: 'progress', component: './components/feedback/progress' },
                { path: 'popconfirm', component: './components/feedback/popconfirm' },
                { path: 'spin', component: './components/feedback/spin' },
                { path: 'skeleton', component: './components/feedback/skeleton' }
              ]
            },
            {
              path: 'other',
              routes: [
                { path: 'anchor', component: './components/other/anchor' },
                { path: 'backtop', component: './components/other/backtop' },
                { path: 'configprovider', component: './components/other/configprovider' },
                { path: 'divider', component: './components/other/divider' },
                { path: 'localeprovider', component: './components/other/localeprovider' }
              ]
            }
          ]
        },
      ]
    }
  ],
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    },
  },
};
