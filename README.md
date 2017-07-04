# React Redux iplay app

串接體育署iplayAPI 用來查詢體育場館資訊
## How to run it

To run it simply do:

```bash
npm install
npm start
```

The app will run at [http://localhost:9000](http://localhost:9000).

## How to build it

You can build it using Cordova.

- [Install Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#installing-the-cordova-cli):

```
npm install -g cordova
```

You need to build the project:

```
npm run build
```

Add a platform to run it on a device or emulator. For Android:

```
cordova platform add android
cordova run android
```

This assumes that you have the Android SDK installed.

## Contributing

1. Fork it ( https://github.com/argelius/react-onsenui-redux-weather/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
