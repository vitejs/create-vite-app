import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld';
import logo from './assets/logo.png';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <div>
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3.0 + Vite" />
      </div>
    );
  },
});
