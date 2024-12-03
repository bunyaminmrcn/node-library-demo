
import * as Yup from 'yup'

const listsBook = {
  schema: {
     query: {
        yupSchema: Yup.object().shape({
          limit: Yup.number().default(2)
        }),
      }
  }
}

const addBook = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().min(3).max(32).required()
      }),
    }
  },
}



const getBook = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.number().required()
      })
    },
  },
}

const editBook = {
    schema: {
      query: {
        yupSchema: Yup.object().shape({
            id: Yup.number().required()
        })
      },
      body: {
        yupSchema: Yup.object().shape({
          name: Yup.string().min(3).max(50).required()
        })
      },
    },
  }

export default { listsBook, addBook, getBook, editBook };