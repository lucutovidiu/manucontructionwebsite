var Jimp = require('jimp');
var fs = require('fs');

export class ResizingImageUsingJIMP {

    public resize(path, _tempFileLocationFolder, originalname) {
        Jimp.read(path)
            .then(img => {
                img
                    .quality(85) // set JPEG quality
                    .resize(Jimp.AUTO, 800) // resize the height to 800 and scale the width accordingly
                    .write(_tempFileLocationFolder + originalname); // save      
                fs.unlinkSync(path); //remove old file from the system  
            })
    }
}