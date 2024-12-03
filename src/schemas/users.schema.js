import * as Yup from 'yup'

const listsUser = {
  schema: {
     query: {
        yupSchema: Yup.object().shape({
          limit: Yup.number().default(2)
        }),
      }
  }
}

const addUser = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().min(3).max(32).required()
      }),
    }
  },
}



const getUser = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number().required()
      })
    },
  },
}

export default { listsUser, addUser, getUser };