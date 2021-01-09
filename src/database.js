const mongoose = require('mongoose');
const {data_base} = require('./keys');


mongoose.connect(data_base.URI, { useNewUrlParser: true,  useUnifiedTopology: true}). then(()=>{
    console.log("conected to the data base");
}).catch((err)=>{
    console.log(err);
});
