import { Store } from "vuex"
import { initialiseStores, State } from "~/utils/store-accessor"

const initializer = (store: Store<State>) => initialiseStores(store)

export const plugins = [initializer]
export * from "~/utils/store-accessor"
