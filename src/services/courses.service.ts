import request, { Methods } from 'utils/request';

import { CourseModel } from 'models/course.model';

export function getCourses() {
  return request<CourseModel[]>({ resource: 'courses' });
}

export function createCourse(data: CourseModel) {
  return request<CourseModel>({ resource: 'courses', data, method: Methods.POST });
}

export function editCourse(id: number, data: CourseModel) {
  return request<CourseModel>({ resource: `courses/${id}`, data, method: Methods.PUT });
}

export function deleteCourse(id: number) {
  return request({ resource: `courses/${id}`, method: Methods.DELETE });
}
