import FtButton from './src/button';

/* istanbul ignore next */
FtButton.install = function(Vue) {
  Vue.component(FtButton.name, FtButton);
};

export default FtButton;
