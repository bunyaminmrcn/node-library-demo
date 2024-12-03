
import * as Yup from 'yup'

const listsBorrows = {
  schema: {
     query: {
        yupSchema: Yup.object().shape({
          limit: Yup.number().default(2)
        }),
      }
  }
}

const addBorrow = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        user_id: Yup.number().min(1).required(),
        book_id: Yup.number().min(1).required()
      }),
    }
  },
}

const editBorrow = {
    schema: {
      params: {
        yupSchema: Yup.object().shape({
          userId: Yup.number().positive().required(),
          bookId: Yup.number().positive().required()
        })
      },
    },
  }

  const returnBorrow = {
    schema: {
      params: {
        yupSchema: Yup.object().shape({
          userId: Yup.number().positive().required(),
          bookId: Yup.number().positive().required()
        })
      },
      body: {
        yupSchema: Yup.object().shape({
          score: Yup.number().positive().required()
        })
      },
    },
  }
export default { listsBorrows, addBorrow, editBorrow, returnBorrow };