import request from './request'

/**
 * 登录
 */
export function login (users) {
  return request({
    method: 'POST',
    url: '/admin/login',
    data: users
  })
}

/**
 * 获取微信号信息
 */
export function getwx () {
  return request({
    method: 'GET',
    url: '/admin/index'
  })
}

/**
 * 添加微信号
 */
export function addwx (data) {
  return request({
    method: 'POST',
    url: '/admin/add',
    data
  })
}

/**
 * 删除微信号
 */
export function delwx (id) {
  return request({
    method: 'GET',
    url: '/admin/del',
    params: id
  })
}
/**
 * 修改状态
 */
export function updatawx (item) {
  return request({
    method: 'GET',
    url: '/admin/updata',
    params: item
  })
}
