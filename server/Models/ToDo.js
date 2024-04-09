const mongoose =require('mongoose')
const TodoScheme = new mongoose.Schema ({

    type: String
})

const TodoModel =mongoose.model('Todos',TodoScheme)
module.exports=TodoModel