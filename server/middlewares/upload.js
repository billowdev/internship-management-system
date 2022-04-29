const multer = require('multer');
const imageFilter =(req, file, cb)=>{
	if(file.minetype.startsWith("image")) {
		cb(null, true);
	}else{
		cb("Please upload only images", false);
	}
}

let storage = multer.diskStorage({
	destination: (req, file, cb)=>{
		cb(null, __basedir)
	}
})