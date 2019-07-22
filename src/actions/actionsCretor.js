const typeList = [
    'REQUEST',
    'SUCCESS',
    'FAILED'
  ]
  
  const actionTypes = [
    'FETCH_TODOS',
    'FETCH_TODO',
    'CREATE_TODO',
    'UPDATE_TODO',
    'REMOVE_TODO'
  ]
  
  const createTypes = typeString =>
  typeList.reduce((type, key) => {
      type[key] = `${typeString}_${key}`
      return type
    }, {})
  
  const createActions = typeString =>
  typeList.reduce((type, key) => {
      type[key] = (payload = {}, callback) => ({ type: `${typeString}_${key}`, payload, callback })
      return type
    }, {})
  
  export const actions = {}
  export const types = {}

  console.log(actions)
  console.log(types)
  
  actionTypes.forEach(type => {
    actions[type] = {
      ...createActions(type)
    }
    types[type] = {
      ...createTypes(type)
    }
  })