import { h, h as createElement } from './h'
import options from './options'
import WeElement from './we-element'
import { render } from './render'
import { define } from './define'
import { tag } from './tag'
import { cloneElement } from './clone-element'
import { getHost } from './get-host'
import { rpx } from './rpx'
import { classNames, extractClass } from './class'
import { o } from './o'
import htm from 'htm'
import { extend, get, set, bind, unbind } from './extend'
import JSONProxy from './proxy'

const html = htm.bind(h)

function createRef() {
  return {}
}

const $ = {}
const Component = WeElement
const defineElement = define
const elements = options.mapping

const omi = {
  tag,
  WeElement,
  Component,
  render,
  h,
  createElement,
  options,
  define,
  cloneElement,
  getHost,
  rpx,
  defineElement,
  classNames,
  extractClass,
  createRef,
  html,
  htm,
  o,
	elements,
	$,
	extend,
	get,
	set,
	bind,
	unbind,
	JSONProxy
}

options.root.Omi = omi
options.root.omi = omi
options.root.Omi.version = '6.15.1'

export default omi

export {
  tag,
  WeElement,
  Component,
  render,
  h,
  createElement,
  options,
  define,
  cloneElement,
  getHost,
  rpx,
  defineElement,
  classNames,
  extractClass,
  createRef,
  html,
  htm,
  o,
	elements,
	$,
	extend,
	get,
	set,
	bind,
	unbind,
	JSONProxy
}
