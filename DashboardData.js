import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import analytics from '../../Assets/Image/Dashboard/analytics.png'
import quizzes from '../../Assets/Image/Dashboard/quizzes.png'
import goals from '../../Assets/Image/Dashboard/goals.png'
import students from '../../Assets/Image/Dashboard/students.png'
import class1 from '../../Assets/Image/Dashboard/classes.png'
import teacher from '../../Assets/Image/Dashboard/teacher.png'
import subscription from '../../Assets/Image/Dashboard/subscription.png'
import content from '../../Assets/Image/Dashboard/content.png'

export const DashboardData = [
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <img src={analytics} width={"35vh"} ></img >,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Quizzes',
    path: '/reports',
    icon: <img src={quizzes} width={"35vh"} ></img >,
    iconClosed: < RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Template',
        path: '/template-quiz',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Create',
        path: '/create-quiz',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Publish',
        path: '/publish-quiz',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Goals',
    path: '/goals',
    icon: <img src={goals} width={"35vh"} ></img >,
  },
  {
    title: 'Students',
    path: '/students',
    icon: <img src={students} width={"35vh"} ></img >,
  },
  {
    title: 'Classes',
    path: '/classes',
    icon: <img src={class1} width={"35vh"} ></img >,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Teacher',
    path: '/teacher',
    icon: <img src={teacher} width={"35vh"} ></img >,
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: <img src={subscription} width={"35vh"} ></img >,
  },
  {
    title: 'Content Management',
    path: '/content',
    icon: <img src={content} width={"35vh"} ></img >,
  }
];
