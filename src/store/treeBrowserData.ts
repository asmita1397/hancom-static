import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { treeData } from '../models/TreeData'
import { TreeUserFormData } from "../entities/TreeUserFormData";

export const state: any = treeData

export const getters: GetterTree<TreeUserFormData, any> = {
  root: state => state
}

export const mutations: MutationTree<any> =
{
 
}
export const actions: ActionTree<any, any> = {

}

export const treeBrowserData = {
  state,
  getters,
  mutations,
  actions
}
