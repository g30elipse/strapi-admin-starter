module.exports = {
  provider: process.env.NODE_ENV === 'development' ? 'local' : "imagekit",
  providerOptions: process.env.NODE_ENV === 'development' ? {} : {
    publicKey: process.env.IMG_KIT_PUBLIC_KEY,
    privateKey: process.env.IMG_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMG_KIT_URL_ENDPOINT,
    // Optional
    params: {
      // Defaults to "/" if value is not supplied
      folder: process.env.IMG_KIT_FOLDER
    }
  }
}
