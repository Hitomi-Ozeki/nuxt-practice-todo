import { Store } from "vuex"
import { getModule } from "vuex-module-decorators"
import KoinoSampleTodo from "~/store/koinoSample/todo"

/* eslint-disable import/no-mutable-exports */
let koinoSampleTodo: KoinoSampleTodo
/* eslint-enable import/no-mutable-exports */

export type State = {
  koinoSampleTodo: KoinoSampleTodo;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initialiseStores (store: Store<State>) {
  koinoSampleTodo = getModule(KoinoSampleTodo, store)
  return store
}

export { initialiseStores, koinoSampleTodo }
