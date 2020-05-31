import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup: (props: { readonly msg: string }) => {
    const { msg } = props;
    const count = ref(0);
    return { msg, count };
  },
  render() {
    return (
      <div>
        <h1>{this.msg}</h1>
        <button onClick={() => this.count++}>count is: {this.count}</button>
        <p>
          Edit <code>components/HelloWorld.tsx</code> to test hot module
          replacement.
        </p>
      </div>
    );
  },
});
