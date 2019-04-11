/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

const menuData = [
  {
    name: 'Pages',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ]
  },
  {
    name: 'typescript',
    icon: 'dashboard',
    path: 'typescript',
  },
  {
    name: '组件',
    path: 'components',
    icon: 'dashboard',
    children: [
      {
        name: '通用',
        path: 'common',
        children: [
          {
            name: 'Button 按钮',
            path: 'button',
          },
          {
            name: 'Icon 图标',
            path: 'icon',
          }
        ]
      },
      {
        name: '布局',
        path: 'layout',
        children: [
          {
            name: 'Grid 栅格',
            path: 'grid',
          },
          {
            name: 'Layout 布局',
            path: 'layout',
          }
        ]
      },
      {
        name: '导航',
        path: 'navigation',
        children: [
          {
            name: 'Affix 固钉',
            path: 'affix',
          },
          {
            name: 'Breadcrumb 面包屑',
            path: 'breadcrumb',
          },
          {
            name: 'Dropdown 下拉菜单',
            path: 'dropdown',
          },
          {
            name: 'Menu 导航菜单',
            path: 'menu',
          },
          {
            name: 'Pagination 分页',
            path: 'pagination',
          },
          {
            name: 'PageHeader 页头',
            path: 'pageheader',
          },
          {
            name: 'Steps 步骤条',
            path: 'steps',
          },
        ]
      },
      {
        name: '数据录入',
        path: 'datainput',
        children: [
          {
            name: 'AutoComplete 自动完成',
            path: 'autocomplete',
          },
          {
            name: 'Cascader 级联选择',
            path: 'cascader',
          },
          {
            name: 'Checkbox 多选框',
            path: 'checkbox',
          },
          {
            name: 'DatePicker 日期选择框',
            path: 'datepicker',
          },
          {
            name: 'Form 表单',
            path: 'form',
          },
          {
            name: 'Input 输入框',
            path: 'input',
          },
          {
            name: 'InputNumber 数字输入框',
            path: 'inputnumber',
          },
          {
            name: 'Mention 提及',
            path: 'mention',
          },
          {
            name: 'Radio 单选框',
            path: 'radio',
          },
          {
            name: 'Rate 评分',
            path: 'rate',
          },
          {
            name: 'Select 选择器',
            path: 'select',
          },
          {
            name: 'Slider 滑动输入条',
            path: 'slider',
          },
          {
            name: 'Switch 开关',
            path: 'switch',
          },
          {
            name: 'Transfer 穿梭框',
            path: 'transfer',
          },
          {
            name: 'TimePicker 时间选择框',
            path: 'timepicker',
          },
          {
            name: 'TreeSelect 树选择',
            path: 'treeselect',
          },
          {
            name: 'Upload 上传',
            path: 'upload',
          },

        ]
      },
      {
        name: '数据展示',
        path: 'datashow',
        children: [
          {
            name: 'Avatar 头像',
            path: 'avatar',
          },
          {
            name: 'Badge 徽标数',
            path: 'badge',
          },
          {
            name: 'Calendar 日历',
            path: 'calendar',
          },
          {
            name: 'Card 卡片',
            path: 'card',
          },
          {
            name: 'Carousel 走马灯',
            path: 'carousel',
          },
          {
            name: 'Collapse 折叠面板',
            path: 'collapse',
          },
          {
            name: 'Comment 评论',
            path: 'comment',
          },
          {
            name: 'Empty 空状态',
            path: 'empty',
          },
          {
            name: 'List 列表',
            path: 'list',
          },
          {
            name: 'Popover 气泡卡片',
            path: 'popover',
          },
          {
            name: 'Statistic 统计数值',
            path: 'statistic',
          },
          {
            name: 'Tooltip 文字提示',
            path: 'tooltip',
          },
          {
            name: 'Table 表格',
            path: 'table',
          },
          {
            name: 'Tabs 标签页',
            path: 'tabs',
          },
          {
            name: 'Tag 标签',
            path: 'tag',
          },
          {
            name: 'Timeline 时间轴',
            path: 'timeline',
          },
          {
            name: 'Tree 树形控件',
            path: 'tree',
          },
        ]
      },
      {
        name: '反馈',
        path: 'feedback',
        children: [
          {
            name: 'Alert 警告提示',
            path: 'alert',
          },
          {
            name: 'Drawer 抽屉',
            path: 'drawer',
          },
          {
            name: 'Modal 对话框',
            path: 'modal',
          },
          {
            name: 'Message 全局提示',
            path: 'message',
          },
          {
            name: 'Notification 通知提醒框',
            path: 'notification',
          },
          {
            name: 'Progress 进度条',
            path: 'progress',
          },
          {
            name: 'popconfirm 气泡确认框',
            path: 'popconfirm',
          },
          {
            name: 'Spin 加载中',
            path: 'spin',
          },
          {
            name: 'Skeleton 骨架屏',
            path: 'skeleton',
          },
        ]
      },
      {
        name: '其它',
        path: 'other',
        children: [
          {
            name: 'Anchor 锚点',
            path: 'anchor',
          },
          {
            name: 'BackTop 回到顶部',
            path: 'backtop',
          },
          {
            name: 'ConfigProvider 全局化配置',
            path: 'configprovider',
          },
          {
            name: 'Divider 分割线',
            path: 'divider',
          },
          {
            name: 'LocaleProvider 国际化',
            path: 'localeprovider',
          },
        ]
      }
    ]
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
