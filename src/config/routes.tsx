import { Users } from 'pages/users/users.component';
import { Courses } from 'pages/courses/courses.component';
import { MyCourses } from 'pages/my-courses/my-courses.component';

import UsersIcon from '@mui/icons-material/People';
import CoursesIcon from '@mui/icons-material/Assignment';

export const routes = [
  {
    title: 'Users',
    path: '/users',
    component: Users,
    role: ['admin'],
    icon: <UsersIcon />,
  },
  {
    title: 'Courses',
    path: '/courses',
    component: Courses,
    role: ['admin'],
    icon: <CoursesIcon />,
  },

  {
    title: 'My courses',
    path: '/my-courses',
    component: MyCourses,
    role: ['user'],
    icon: <CoursesIcon />,
  },
];
