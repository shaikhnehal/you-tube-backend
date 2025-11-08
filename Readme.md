
what is multar ?

multer ek Node.js middleware hai jo multipart/form-data handle karta hai — ye wahi format hota hai jab frontend se file (image, video, pdf) bheji jati hai.

Express.js me JSON data to easily read hota hai, par image ya file binary data hoti hai — uske liye multer chahiye.


diskStorage() → multer ko bolta hai ke file temporarily disk me save karo.

destination → folder path jahan file temporarily rakhi jaye (yahaan: ./public/temp)

filename → file ka naam kya rakha jaye (yahaan: original file name)

Multer Short Note:
Multer ek Node.js middleware hai jo file uploads handle karta hai (like images, videos, etc.).
Ye multipart/form-data ko process karta hai jo normal JSON nahi hota.
diskStorage() ka use karke file ko temporarily local folder (e.g. public/temp) me store karta hai.
Baad me file Cloudinary par upload hoti hai aur local file delete kar di jati hai.


**************************************************************************************************************

