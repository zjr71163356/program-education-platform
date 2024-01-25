const tableData = [
  {
    problemId: '1001',
    title: '两数之和',
    tag: ['数组', '哈希表'],
    acceptRate: 80,
    difficulty: '简单'
  },
  {
    problemId: '1002',
    title: '反转链表',
    tag: ['链表'],
    acceptRate: 75,
    difficulty: '简单'
  },
  {
    problemId: '1003',
    title: '合并区间',
    tag: ['排序', '数组'],
    acceptRate: 90,
    difficulty: '中等'
  },
  {
    problemId: '1004',
    title: '二分查找',
    tag: ['二分查找'],
    acceptRate: 85,
    difficulty: '简单'
  },
  {
    problemId: '1005',
    title: '最长递增子序列',
    tag: ['动态规划', '二分查找'],
    acceptRate: 95,
    difficulty: '中等'
  },
  {
    problemId: '1006',
    title: '括号生成',
    tag: ['字符串', '回溯算法'],
    acceptRate: 88,
    difficulty: '中等'
  },
  {
    problemId: '1007',
    title: '最小生成树',
    tag: ['图论', '最小生成树'],
    acceptRate: 82,
    difficulty: '中等'
  },
  {
    problemId: '1008',
    title: '最短路径',
    tag: ['图论', '最短路径'],
    acceptRate: 91,
    difficulty: '中等'
  }
]

const classInfo = [
  {
    id: 1,
    title: 'Category 1',
    links: [
      {
        id: 1,
        title: 'Link 1',
        url: '#'
      },
      {
        id: 2,
        title: 'Link 2',
        url: '#'
      },
      {
        id: 3,
        title: 'Link 3',
        url: '#'
      }
    ]
  },
  {
    id: 2,
    title: 'Category 2',
    links: [
      {
        id: 4,
        title: 'Link 1',
        url: '#'
      }
    ]
  },
  {
    id: 3,
    title: 'Category 3',
    links: [
      {
        id: 5,
        title: 'Link 1',
        url: '#'
      },
      {
        id: 6,
        title: 'Link 2',
        url: '#'
      }
    ]
  }
]
const languageList = ['cpp', 'python', 'java', 'javascript']
export const SubmitResultDict = {
  题目: 1001,
  用户: '虚无void',
  提交时间: '2024/01/23 16:06:09',
  编译器: 'C (gcc)',
  内存: '0 / 65536 KB',
  用时: '0 / 2000 ms',
  状态: '编译错误',
  评测时间: '2024/01/23 16:06:10'
}
export const Posts = {
  title: '这是第一个帖子',
  user: '虚无void',
  time: '2024/01/23 16:06:09',
  like: 10,
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

export const PostsList = [
  {
    title: '这是第一个帖子',
    user: '虚无void',
    time: '2024/01/23 16:06:09',
    like: 10,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '算法解析：如何优化快速排序算法？',
    user: 'CodeMaster',
    time: '2024/01/25 10:15:30',
    like: 22,
    avatar: 'https://img.zcool.cn/community/011d125bada9dda801213deae4ed54.jpg?'
  },
  {
    title: '动态规划应用实例分享',
    user: 'DynamicCoder',
    time: '2024/01/26 14:20:45',
    like: 18,
    avatar: 'https://cn.gravatar.com/avatar/tyrfly5'
  },
  {
    title: '深度学习入门：神经网络基础',
    user: 'AIExplorer',
    time: '2024/01/27 18:30:12',
    like: 30,
    avatar:
      'https://images.unsplash.com/photo-1484249170766-998fa6efe3f3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '动态规划入门：斐波那契数列解析',
    user: 'DPExplorer',
    time: '2024/02/05 11:20:30',
    like: 15,
    avatar:
      'https://images.unsplash.com/photo-1508001184411-99a654ada4c2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '最长公共子序列问题详解',
    user: 'LongestSeqSolver',
    time: '2024/02/07 14:45:18',
    like: 20,
    avatar:
      'https://images.unsplash.com/photo-1484249170766-998fa6efe3f3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '背包问题求解思路分享',
    user: 'KnapsackMaster',
    time: '2024/02/10 16:30:12',
    like: 25,
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '动态规划优化技巧总结',
    user: 'OptimizationGuru',
    time: '2024/02/12 19:10:24',
    like: 18,
    avatar:
      'https://images.unsplash.com/photo-1532009324734-20a7a5813719?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '动态规划算法实战：编辑距离问题',
    user: 'EditDistanceMaster',
    time: '2024/02/15 10:45:30',
    like: 22,
    avatar:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
 

]

export default { tableData, classInfo, languageList }
