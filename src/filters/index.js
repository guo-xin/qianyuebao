import Vue from 'vue'
/**
 * Created by aidenZou on 16/5/5.
 */

// import Vue from 'vue'
import filters from '../methods/filters'

Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))
