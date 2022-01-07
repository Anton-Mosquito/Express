import * as uuid from "uuid";
import * as path from "path";

class FileService {
  saveFiles(file) {
    try {
      const filename = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", filename);
      file.mv(filePath);
      return filename;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();
