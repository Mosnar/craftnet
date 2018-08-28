import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

/**
 * State
 */
const state = {
    cart: {
        items: [
            {
                plugin: {
                    name: 'Some Plugin'
                },
                lineItem: {
                    total: '$99.00'
                }
            }
        ]
    }
}

/**
 * Getters
 */
const getters = {

}

/**
 * Actions
 */
const actions = {

    createCart() {
        console.log('create cart action');
        const data = {some:'data'}
        const formData = new FormData();
        const qsData = qs.stringify(data)

        const params = new URLSearchParams();
        params.append('param1', 'value1');
        params.append('param2', 'value2');

        axios.post('https://api.craftcms.test/v1/carts', qsData, {
            headers: {
                'X-CSRF-Token': Craft.csrfTokenValue,
            }
        })
            .then(response => {
                console.log('success');
                // return cb(response.data)
            })
            .catch(response => {
                // return errorCb(response)
            })
    },

}

/**
 * Mutations
 */
const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}
