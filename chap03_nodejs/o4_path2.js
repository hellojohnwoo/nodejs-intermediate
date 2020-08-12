const { pathToFileURL } = require("url");

path.join('/a', '/b', '/c');    //  /a/b/c
path.resolve('/a', '/b', '/c'); //    /b/c

// '\'    VS.     '\\'
//                Escape using '\\'. because '\' is a special character in JS